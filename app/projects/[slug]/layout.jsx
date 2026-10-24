import jsonData from "@/json/data.json";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = jsonData.Projects.find((item) => item.slug === slug && item.show);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  return pageMetadata(project.title, project.desc[0], `/projects/${project.slug}`);
}
export default function Layout({ children }) { return children; }
