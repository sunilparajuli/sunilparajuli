import data from "@/json/data.json";
import { absoluteUrl } from "@/lib/seo";
import { query, databaseConfigured } from "@/lib/db";
export const dynamic = "force-dynamic";
export default async function sitemap() {
  const pages = [
    "/",
    "/about",
    "/projects",
    "/blog",
    ...data.Projects.filter((p) => p.show).map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: absoluteUrl(path) }));
  if (databaseConfigured()) {
    const posts = await query(
      "SELECT slug,updated_at FROM blog.published_posts",
    );
    pages.push(
      ...posts.map((p) => ({
        url: absoluteUrl(`/blog/${p.slug}`),
        lastModified: p.updated_at,
      })),
    );
  }
  return pages;
}
