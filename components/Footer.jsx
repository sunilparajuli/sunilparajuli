import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              Better systems.
              <br />
              Stronger social protection.
            </h2>
            <p>
              For advisory work, programme collaboration, or a conversation
              about social security and digital transformation.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
            <a href={`tel:${profile.phone}`}>+977 9849298499</a>
            <p>{profile.location}</p>
            <a
              className="pill-button light"
              href="/Sunil_Parajuli_CV.pdf"
              download
            >
              Download CV ↓
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sunil Parajuli</span>
          <a href="https://github.com/sunilparajuli">GitHub ↗</a>
          <span>
            Design inspired by{" "}
            <a href="https://technext.github.io/steve/index.html">Steve</a> /{" "}
            <a href="https://colorlib.com">Colorlib</a>
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
