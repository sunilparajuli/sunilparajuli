"use client";
export default function Error({ reset }) {
  return (
    <main id="main-content" className="site-container section-space">
      <h1 className="page-title">The journal is temporarily unavailable.</h1>
      <p>Please try again shortly.</p>
      <button className="pill-button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
