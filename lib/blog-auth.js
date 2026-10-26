import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  randomBytes,
  createHash,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import { query, pool } from "@/lib/db";
const scrypt = promisify(scryptCallback);
const cookieName = "sunil_blog_session";
export const hash = (value) => createHash("sha256").update(value).digest("hex");
export async function passwordHash(password) {
  const salt = randomBytes(16).toString("hex");
  const key = await scrypt(password, salt, 64);
  return `scrypt:${salt}:${key.toString("hex")}`;
}
export async function passwordMatches(password, encoded) {
  const [kind, salt, stored] = (encoded || "").split(":");
  const candidate = await scrypt(password, salt || "dummy-salt", 64);
  if (kind !== "scrypt" || !/^[a-f0-9]{128}$/.test(stored || "")) return false;
  return timingSafeEqual(candidate, Buffer.from(stored, "hex"));
}
export async function currentAdmin() {
  const token = cookies().get(cookieName)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const [user] = await query(
    `SELECT u.id,u.email,u.display_name FROM blog.sessions s JOIN blog.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.is_active AND u.role='admin'`,
    [hash(token)],
  );
  return user || null;
}
export async function requireAdmin() {
  const user = await currentAdmin();
  if (!user) redirect("/admin/login");
  return user;
}
export async function startSession(userId) {
  const token = randomBytes(32).toString("hex");
  await query(
    "INSERT INTO blog.sessions(user_id,token_hash,expires_at) VALUES($1,$2,now()+interval '8 hours')",
    [userId, hash(token)],
  );
  cookies().set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 28800,
  });
}
export async function endSession() {
  const token = cookies().get(cookieName)?.value;
  if (token)
    await query(
      "UPDATE blog.sessions SET revoked_at=now() WHERE token_hash=$1",
      [hash(token)],
    );
  cookies().delete(cookieName);
}
export async function allowedAttempt(scope) {
  const client = await pool().connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT pg_advisory_xact_lock(hashtext($1))", [scope]);
    const key = hash(scope);
    await client.query(
      "DELETE FROM blog.login_attempts WHERE attempted_at<now()-interval '1 day'",
    );
    const {
      rows: [{ count }],
    } = await client.query(
      "SELECT count(*)::int AS count FROM blog.login_attempts WHERE scope_hash=$1 AND attempted_at>now()-interval '15 minutes'",
      [key],
    );
    if (count >= 8) {
      await client.query("COMMIT");
      return false;
    }
    await client.query(
      "INSERT INTO blog.login_attempts(scope_hash) VALUES($1)",
      [key],
    );
    await client.query("COMMIT");
    return true;
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
}
