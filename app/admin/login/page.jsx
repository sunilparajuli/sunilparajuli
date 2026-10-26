import Link from "next/link";
import { login } from "../actions";
import { databaseConfigured } from "@/lib/db";
export default function Login({ searchParams }) {
  return (
    <main
      id="main-content"
      className="site-container section-space admin-shell"
    >
      <p className="eyebrow">EDITORIAL DESK</p>
      <h1 className="page-title">Welcome back.</h1>
      <p>Sign in to review drafts and manage your blog.</p>
      {!databaseConfigured() ? (
        <p role="alert">The blog database has not been configured yet.</p>
      ) : (
        <form action={login} className="editor-form auth-form">
          {searchParams.error && (
            <p role="alert">
              {searchParams.error === "limited"
                ? "Too many attempts. Please wait 15 minutes."
                : "Unable to sign in. Check your email and password."}
            </p>
          )}
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="username"
              required
              defaultValue="sunilparajuli2002@gmail.com"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              maxLength={256}
            />
          </label>
          <button className="pill-button">Sign in</button>
          <Link className="text-link" href="/admin/setup">
            First time? Set your password →
          </Link>
        </form>
      )}
    </main>
  );
}
