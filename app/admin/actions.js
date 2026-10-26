"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { query, pool } from "@/lib/db";
import {
  allowedAttempt,
  passwordMatches,
  passwordHash,
  requireAdmin,
  startSession,
  endSession,
} from "@/lib/blog-auth";
const text = (form, key) => String(form.get(key) || "").trim();
export async function login(form) {
  const email = text(form, "email").toLowerCase(),
    password = String(form.get("password") || "");
  if (email.length > 254 || password.length > 256)
    redirect("/admin/login?error=invalid");
  if (!(await allowedAttempt("login:" + email)))
    redirect("/admin/login?error=limited");
  const [user] = await query(
    "SELECT id,password_hash FROM blog.users WHERE email=$1 AND is_active AND role='admin'",
    [email],
  );
  if (!(await passwordMatches(password, user?.password_hash)))
    redirect("/admin/login?error=invalid");
  await startSession(user.id);
  redirect("/admin");
}
export async function setup(form) {
  if (!(await allowedAttempt("admin-setup")))
    redirect("/admin/setup?error=limited");
  const token = text(form, "token"),
    expected = process.env.ADMIN_SETUP_TOKEN || "";
  const password = String(form.get("password") || "");
  if (
    !expected ||
    Buffer.byteLength(token) !== Buffer.byteLength(expected) ||
    !timingSafeEqual(Buffer.from(token), Buffer.from(expected)) ||
    password.length < 14 ||
    password.length > 256 ||
    password !== String(form.get("confirmation") || "")
  )
    redirect("/admin/setup?error=invalid");
  const hashed = await passwordHash(password),
    client = await pool().connect();
  let user;
  try {
    await client.query("BEGIN");
    await client.query("SELECT pg_advisory_xact_lock(763291)");
    const existing = await client.query(
      "SELECT id FROM blog.users WHERE role='admin' AND password_hash IS NOT NULL",
    );
    if (!existing.rowCount) {
      const result = await client.query(
        "UPDATE blog.users SET password_hash=$1 WHERE email=$2 AND role='admin' AND password_hash IS NULL RETURNING id",
        [hashed, "sunilparajuli2002@gmail.com"],
      );
      user = result.rows[0];
    }
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
  if (!user) redirect("/admin/login");
  await startSession(user.id);
  redirect("/admin");
}
export async function logout() {
  await endSession();
  redirect("/admin/login");
}
export async function savePost(form) {
  await requireAdmin();
  const id = text(form, "id"),
    title = text(form, "title"),
    excerpt = text(form, "excerpt"),
    content = text(form, "content");
  const intent = text(form, "intent");
  if (!/^[a-f0-9-]{36}$/.test(id)) throw new Error("Invalid article.");
  if (
    !title ||
    title.length > 180 ||
    excerpt.length > 500 ||
    !content ||
    content.length > 100000 ||
    !["save", "publish", "draft", "archive"].includes(intent)
  )
    redirect(`/admin/posts/${id}?error=invalid`);
  const seoTitle = text(form, "seo_title"),
    seoDescription = text(form, "seo_description");
  if (seoTitle.length > 180 || seoDescription.length > 300)
    redirect(`/admin/posts/${id}?error=invalid`);
  const [post] = await query(
    `UPDATE blog.posts SET title=$2,excerpt=$3,content_markdown=$4,seo_title=NULLIF($5,''),seo_description=NULLIF($6,''),status=CASE WHEN $7='save' THEN status WHEN $7='publish' THEN 'published' WHEN $7='draft' THEN 'draft' ELSE 'archived' END,published_at=CASE WHEN $7='publish' THEN COALESCE(published_at,now()) ELSE published_at END WHERE id=$1 AND updated_at=$8::timestamptz RETURNING slug`,
    [
      id,
      title,
      excerpt,
      content,
      seoTitle,
      seoDescription,
      intent,
      text(form, "version"),
    ],
  );
  if (!post) redirect(`/admin/posts/${id}?error=conflict`);
  revalidatePath("/blog");
  revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/sitemap.xml");
  redirect(`/admin/posts/${id}?saved=1`);
}
