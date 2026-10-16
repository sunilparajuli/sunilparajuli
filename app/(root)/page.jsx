import Link from "next/link";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="hero">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                SOCIAL SECURITY · DIGITAL PUBLIC INFRASTRUCTURE
              </p>
              <h1>
                Sunil
                <br />
                Parajuli<span>.</span>
              </h1>
              <h2>{profile.title}</h2>
              <p className="hero-intro">{profile.intro}</p>
              <div className="button-row">
                <a className="pill-button" href="#work">
                  Explore my work ↗
                </a>
                <a className="text-link" href="/Sunil_Parajuli_CV.pdf" download>
                  Download CV ↓
                </a>
              </div>
              <p className="hero-location">
                <span /> Based in Kathmandu · Working across borders
              </p>
            </div>
            <div className="hero-art" aria-hidden="true">
              <span className="vertical-label">POLICY MEETS PRACTICE</span>
              <div className="hero-disc">
                <span>
                  SP<span className="coral">.</span>
                </span>
              </div>
              <div className="hero-note">
                <small>MY FOCUS</small>
                <p>
                  People.
                  <br />
                  Protection.
                  <br />
                  Public systems.
                </p>
              </div>
              <span className="hero-number">01 / INTRODUCTION</span>
            </div>
          </div>
        </section>
        <div className="focus-strip">
          <div className="site-container">
            <span>Social security</span>
            <span>Health insurance</span>
            <span>openIMIS</span>
            <span>Interoperability</span>
            <span>e-Governance</span>
          </div>
        </div>
        <section id="expertise" className="section-space site-container">
          <div className="section-heading">
            <p className="eyebrow">AREAS OF PRACTICE</p>
            <h2>From policy to implementation.</h2>
            <p>
              Domain understanding and technical experience, brought together to
              make public services work better.
            </p>
          </div>
          <div className="expertise-grid">
            {profile.expertise.map((x, i) => (
              <article key={x.title}>
                <span className="section-number">0{i + 1}</span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="work-section section-space">
          <div className="site-container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED CONTRIBUTIONS</p>
              <h2>Work with a public purpose.</h2>
              <p>
                Social protection programmes, health insurance platforms, and
                the systems that connect them.
              </p>
            </div>
            <SelectedWork />
            <div className="center-link">
              <Link className="pill-button outline" href="/projects">
                View all projects ↗
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="section-space site-container about-grid">
          <div className="about-panel">
            <p className="eyebrow">THE INTERSECTION THAT MATTERS</p>
            <h2>
              Social protection.
              <br />
              Public policy.
              <br />
              <span>Practical technology.</span>
            </h2>
            <p>Kathmandu, Nepal / International collaboration</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT ME</p>
            <h2>
              A systems perspective.
              <br />A public-service focus.
            </h2>
            <p>
              I’m a social security and social protection professional with a
              background in computer engineering and e-Governance. My work
              connects institutional needs with the technology that supports
              registration, contributions, health insurance, and benefit
              delivery.
            </p>
            <p>
              My experience includes assignments involving Nepal’s Social
              Security Fund, ILO, GIZ, and health-sector partners, alongside
              international contributions in Germany, Kenya, Laos, and Cameroon.
            </p>
            <Link className="pill-button outline" href="/about">
              Experience & background ↗
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
