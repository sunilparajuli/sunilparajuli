import { profile } from "@/data/profile";
export default function About() {
  return (
    <main id="main-content" className="site-container section-space inner-page">
      <p className="eyebrow">ABOUT SUNIL</p>
      <h1 className="page-title">
        Bridging social protection
        <br />
        and digital delivery.
      </h1>
      <p className="page-intro">{profile.intro}</p>
      <div className="about-grid section-space">
        <div>
          <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
          <h2>
            Policy understanding.
            <br />
            Implementation experience.
          </h2>
          <a
            className="pill-button outline"
            href="/Sunil_Parajuli_CV.pdf"
            download
          >
            Download full CV ↓
          </a>
        </div>
        <div>
          {profile.experience.map((x) => (
            <article className="timeline-item" key={x.role}>
              <p className="eyebrow">{x.period}</p>
              <h3>{x.role}</h3>
              <strong>{x.organisation}</strong>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </div>
      <section>
        <p className="eyebrow">EDUCATION & RESEARCH</p>
        <h2>A foundation in governance and engineering.</h2>
        <div className="education-grid">
          {profile.education.map((x) => (
            <article className="timeline-item" key={x.title}>
              <h3>{x.title}</h3>
              <strong>{x.organisation}</strong>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
