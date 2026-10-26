import { setup } from "../actions";
import { query, databaseConfigured } from "@/lib/db";
import { redirect } from "next/navigation";
export default async function Setup({ searchParams }) {
  if (databaseConfigured()) {
    const rows = await query(
      "SELECT id FROM blog.users WHERE role='admin' AND password_hash IS NOT NULL LIMIT 1",
    );
    if (rows.length) redirect("/admin/login");
  }
  return (
    <main
      id="main-content"
      className="site-container section-space admin-shell"
    >
      <p className="eyebrow">ONE-TIME SETUP</p>
      <h1 className="page-title">Your editorial desk.</h1>
      <p>
        Create the password for sunilparajuli2002@gmail.com. The setup token is
        in your private environment configuration.
      </p>
      {databaseConfigured() && process.env.ADMIN_SETUP_TOKEN ? (
        <form action={setup} className="editor-form auth-form">
          {searchParams.error && (
            <p role="alert">
              {searchParams.error === "limited"
                ? "Too many attempts. Wait 15 minutes."
                : "Check your setup token and matching passwords (at least 14 characters)."}
            </p>
          )}
          <label>
            Setup token
            <input type="password" name="token" autoComplete="off" required />
          </label>
          <label>
            New password
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              minLength={14}
              maxLength={256}
              required
            />
          </label>
          <label>
            Confirm password
            <input
              type="password"
              name="confirmation"
              autoComplete="new-password"
              minLength={14}
              maxLength={256}
              required
            />
          </label>
          <button className="pill-button">Create admin password</button>
        </form>
      ) : (
        <p role="alert">
          Configure DATABASE_URL, DATABASE_SSL_CA, and ADMIN_SETUP_TOKEN before
          setup.
        </p>
      )}
    </main>
  );
}
