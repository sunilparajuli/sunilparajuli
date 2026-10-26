import Link from "next/link";
import { query, databaseConfigured } from "@/lib/db";
import { pageMetadata } from "@/lib/seo";
import Footer from "@/components/Footer";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Technology journal",
  "Thoughtful explainers on chips, AI, security, and emerging technology, with sources and practical context.",
  "/blog",
);
export default async function Blog() {
  const posts = databaseConfigured()
    ? await query(
        "SELECT p.id,p.slug,p.title,p.excerpt,p.published_at,c.name AS category FROM blog.published_posts p LEFT JOIN blog.categories c ON c.id=p.category_id ORDER BY p.published_at DESC LIMIT 100",
      )
    : [];
  return (
    <>
      <main id="main-content" className="site-container section-space">
        <div className="section-heading">
          <p className="eyebrow">THE TECHNOLOGY JOURNAL</p>
          <h1 className="page-title">Ideas behind the innovation.</h1>
          <p>
            Chips, AI, and the systems shaping our digital world. Clear
            explanations, practical perspectives, and sources you can explore.
          </p>
        </div>
        {posts.length ? (
          <div className="blog-grid">
            {posts.map((p) => (
              <Link className="blog-card" href={`/blog/${p.slug}`} key={p.id}>
                <p className="eyebrow">{p.category || "Technology"}</p>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <span>
                  {new Date(p.published_at).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}{" "}
                  · Read article ↗
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <h2>Good stories take a little preparation.</h2>
            <p>The first articles are being reviewed. Check back soon.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
