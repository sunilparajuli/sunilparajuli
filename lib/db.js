import "server-only";
import pg from "pg";
const globalDb = globalThis;
export function databaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}
export function pool() {
  if (!process.env.DATABASE_URL)
    throw new Error("Blog database is not configured.");
  if (!globalDb.blogPool) {
    const url = new URL(process.env.DATABASE_URL);
    for (const key of [
      "sslmode",
      "sslrootcert",
      "sslcert",
      "sslkey",
      "uselibpqcompat",
    ])
      url.searchParams.delete(key);
    globalDb.blogPool = new pg.Pool({
      connectionString: url.toString(),
      max: 3,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 10000,
      ssl: {
        rejectUnauthorized: true,
        ...(process.env.DATABASE_SSL_CA
          ? { ca: process.env.DATABASE_SSL_CA.replace(/\\n/g, "\n") }
          : {}),
      },
    });
    globalDb.blogPool.on("error", () =>
      console.error("Blog database connection interrupted."),
    );
  }
  return globalDb.blogPool;
}
export async function query(text, values = []) {
  return (await pool().query(text, values)).rows;
}
