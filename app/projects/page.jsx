import SelectedWork from "@/components/SelectedWork";
export default function Projects() {
  return (
    <main id="main-content" className="site-container section-space inner-page">
      <div className="section-heading">
        <p className="eyebrow">PROJECTS & CONTRIBUTIONS</p>
        <h1 className="page-title">Systems that serve people.</h1>
        <p>
          Explore work across social security, health financing,
          interoperability, and public-sector technology.
        </p>
      </div>
      <SelectedWork all />
    </main>
  );
}
