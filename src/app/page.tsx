'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-emerald-400 selection:text-neutral-950">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
