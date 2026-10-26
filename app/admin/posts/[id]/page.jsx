import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/blog-auth";
import { query } from "@/lib/db";
import { savePost } from "../../actions";
import BlogMarkdown from "@/components/BlogMarkdown";
export default async function Review({ params, searchParams }) {
  await requireAdmin();
  if (!/^[a-f0-9-]{36}$/.test(params.id)) notFound();
  const [p] = await query(
    "SELECT *,updated_at::text AS version FROM blog.posts WHERE id=$1",
    [params.id],
  );
  if (!p) notFound();
  const revisions = await query(
    "SELECT id,created_at FROM blog.post_revisions WHERE post_id=$1 ORDER BY id DESC LIMIT 5",
    [p.id],
  );
  return (
    <main
      id="main-content"
      className="site-container section-space admin-shell"
    >
      <Link className="text-link" href="/admin">
        ← All articles
      </Link>
      <p className="eyebrow">{p.status} · ARTICLE REVIEW</p>
      <h1 className="page-title">{p.title}</h1>
      {searchParams.saved && (
        <p className="save-message" role="status">
          Saved successfully.
        </p>
      )}
      {searchParams.error && (
        <p role="alert">
          {searchParams.error === "conflict"
            ? "This post changed in another session. Reload and review the latest version before saving."
            : "Check field lengths and provide a title and article body."}
        </p>
      )}
      <div className="editor-grid">
        <form action={savePost} className="editor-form">
          <input type="hidden" name="id" value={p.id} />
          <input type="hidden" name="version" value={p.version} />
          <label>
            Title
            <input
              name="title"
              defaultValue={p.title}
              maxLength={180}
              required
            />
          </label>
          <label>
            Summary
            <textarea
              name="excerpt"
              defaultValue={p.excerpt}
              rows={3}
              maxLength={500}
            />
          </label>
          <label>
            Article (Markdown; keep source citations)
            <textarea
              name="content"
              defaultValue={p.content_markdown}
              rows={25}
              maxLength={100000}
              required
            />
          </label>
          <label>
            SEO title
            <input
              name="seo_title"
              defaultValue={p.seo_title || ""}
              maxLength={180}
            />
          </label>
          <label>
            SEO description
            <textarea
              name="seo_description"
              defaultValue={p.seo_description || ""}
              rows={3}
              maxLength={300}
            />
          </label>
          <div className="button-row">
            <button className="pill-button" name="intent" value="save">
              Save changes
            </button>
            <button
              className="pill-button outline"
              name="intent"
              value="publish"
            >
              Publish article
            </button>
            <button className="pill-button outline" name="intent" value="draft">
              Return to draft
            </button>
            <button
              className="pill-button outline"
              name="intent"
              value="archive"
            >
              Archive
            </button>
          </div>
        </form>
        <aside className="review-preview">
          <p className="eyebrow">SAVED PREVIEW</p>
          <p>Save changes to refresh this preview.</p>
          <BlogMarkdown>{p.content_markdown}</BlogMarkdown>
          <h2>Recent saved versions</h2>
          <ul>
            {revisions.map((v) => (
              <li key={v.id}>
                Version {v.id} ·{" "}
                {new Date(v.created_at).toLocaleString("en-GB", {
                  timeZone: "UTC",
                })}{" "}
                UTC
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
