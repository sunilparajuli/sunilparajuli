import Link from "next/link";
import { requireAdmin } from "@/lib/blog-auth";
import { query } from "@/lib/db";
import { logout } from "./actions";
export default async function Admin() {
  const user = await requireAdmin();
  const posts = await query(
    "SELECT id,title,excerpt,status,slug,updated_at FROM blog.posts ORDER BY created_at DESC",
  );
  return (
    <main
      id="main-content"
      className="site-container section-space admin-shell"
    >
      <div className="admin-heading">
        <div>
          <p className="eyebrow">EDITORIAL DESK · {user.display_name}</p>
          <h1 className="page-title">Review your stories.</h1>
        </div>
        <form action={logout}>
          <button className="pill-button outline">Sign out</button>
        </form>
      </div>
      <div className="admin-stats">
        <span>{posts.filter((p) => p.status === "draft").length} drafts</span>
        <span>
          {posts.filter((p) => p.status === "published").length} published
        </span>
        <span>
          {posts.filter((p) => p.status === "archived").length} archived
        </span>
      </div>
      <p>
        Check facts and source links, refine the text, then publish when ready.
        Saved edits also update a published article.
      </p>
      <div className="review-list">
        {posts.map((p) => (
          <Link className="review-row" href={`/admin/posts/${p.id}`} key={p.id}>
            <div>
              <span className={`status-badge status-${p.status}`}>
                {p.status}
              </span>
              <h2>{p.title}</h2>
              <p>{p.excerpt}</p>
            </div>
            <span>Review ↗</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
