import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { query, databaseConfigured } from "@/lib/db";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import BlogMarkdown from "@/components/BlogMarkdown";
import Footer from "@/components/Footer";
export const dynamic = "force-dynamic";
const load = cache(async (slug) => {
  if (!databaseConfigured()) return null;
  const [p] = await query(
    "SELECT p.*,u.display_name FROM blog.published_posts p JOIN blog.users u ON u.id=p.author_id WHERE p.slug=$1",
    [slug],
  );
  return p;
});
export async function generateMetadata({ params }) {
  const p = await load(params.slug);
  if (!p) return { title: "Article not found", robots: { index: false } };
  return pageMetadata(
    p.seo_title || p.title,
    p.seo_description || p.excerpt,
    `/blog/${p.slug}`,
  );
}
export default async function Article({ params }) {
  const p = await load(params.slug);
  if (!p) notFound();
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.published_at.toISOString(),
    dateModified: p.updated_at.toISOString(),
    author: {
      "@type": "Person",
      name: p.display_name,
      url: absoluteUrl("/about"),
    },
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
  };
  return (
    <>
      <main
        id="main-content"
        className="site-container section-space article-shell"
      >
        <Link className="text-link" href="/blog">
          ← Technology journal
        </Link>
        <p className="eyebrow">
          {p.display_name} ·{" "}
          {p.published_at.toLocaleDateString("en-GB", { timeZone: "UTC" })}
        </p>
        <h1 className="page-title">{p.title}</h1>
        <p className="page-intro">{p.excerpt}</p>
        <BlogMarkdown>{p.content_markdown}</BlogMarkdown>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
