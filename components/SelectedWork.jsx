"use client";
import { useState } from "react";
import Link from "next/link";
import data from "@/json/data.json";
const filters = [
  [0, "All work"],
  [3, "Social protection"],
  [1, "Health insurance"],
  [2, "Interoperability"],
  [4, "Enterprise systems"],
];
export default function SelectedWork({ all = false }) {
  const [filter, setFilter] = useState(0);
  const projects = [...data.Projects]
    .filter((p) => p.show)
    .sort(
      (a, b) =>
        Number(b.slug === "ssf-nepal-automation") -
        Number(a.slug === "ssf-nepal-automation"),
    );
  const shown = projects.filter((p) => !filter || p.category.includes(filter));
  return (
    <>
      <div className="work-filters" aria-label="Filter projects">
        {filters.map(([id, label]) => (
          <button
            key={id}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="work-grid" aria-live="polite">
        {(all ? shown : shown.slice(0, 6)).map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            className={`work-card work-tone-${i % 4}`}
            key={p.slug}
          >
            <div className="work-art" aria-hidden="true">
              <span className="work-year">{p.year} / SELECTED WORK</span>
              <div className="art-orbit" />
              <strong>
                {p.slug === "ssf-nepal-automation" ? "SSF" : p.tech[0]}
              </strong>
              <span className="work-arrow">↗</span>
            </div>
            <div className="work-caption">
              <p className="eyebrow">{p.tech.slice(0, 2).join(" / ")}</p>
              <h3>{p.title}</h3>
              <p>{p.desc[0]}</p>
              <span className="text-link">Explore project ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
