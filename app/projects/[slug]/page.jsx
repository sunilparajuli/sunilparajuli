import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/data.json";
export const dynamicParams = false;

export function generateStaticParams() {
  return data.Projects.filter((p) => p.show).map((p) => ({ slug: p.slug }));
}
export default function Project({ params }) {
  const project = data.Projects.find((p) => p.slug === params.slug && p.show);
  if (!project) notFound();
  return (
    <main
      id="main-content"
      className="site-container section-space inner-page project-detail"
    >
      <Link className="text-link" href="/projects">
        ← All projects
      </Link>
      <p className="eyebrow">SELECTED WORK / {project.year}</p>
      <h1 className="page-title">{project.title}</h1>
      <div className="detail-grid">
        <aside>
          <h2>Tools & approaches</h2>
          <ul>
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>
        <article>
          <h2>Project overview</h2>
          {project.desc.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {project.preview &&
            !project.preview.includes("sunilparajuli.com") && (
              <a
                className="pill-button outline"
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project reference ↗
              </a>
            )}
        </article>
      </div>
    </main>
  );
}
