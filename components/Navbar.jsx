"use client";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Sunil Parajuli home"
        >
          sunil<span>.</span>
          <small>PARAJULI</small>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          id="main-navigation"
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[
            ["/", "Home"],
            ["/#expertise", "Expertise"],
            ["/#work", "Selected work"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
