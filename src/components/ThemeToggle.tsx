'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light-mode');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-white/10 hover:border-emerald-500/50 bg-neutral-900/50 text-neutral-300 hover:text-emerald-400 transition-colors backdrop-blur-md"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-neutral-800" />}
    </button>
  );
}
