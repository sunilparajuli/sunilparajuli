"use client";
export default function Error({ reset }) {
  return (
    <main id="main-content" className="site-container section-space">
      <h1 className="page-title">Unable to open the editorial desk.</h1>
      <p>
        Please check the database connection and CA certificate, then try again.
      </p>
      <button className="pill-button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
