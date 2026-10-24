import data from "@/json/data.json";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  return ["/", "/about", "/projects", ...data.Projects.filter(p => p.show).map(p => `/projects/${p.slug}`)]
    .map(path => ({ url: absoluteUrl(path) }));
}
