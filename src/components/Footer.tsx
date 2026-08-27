'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '../data/portfolioData';
import { Clock } from 'lucide-react';

export default function Footer() {
  const [kathmanduTime, setKathmanduTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKathmanduTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border bg-background py-8 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-6 lg:px-10">
        
        {/* Left: Copyright & Title */}
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-foreground">SP<span className="text-accent">.</span></span>
          <span>© {new Date().getFullYear()} Sunil Parajuli</span>
        </div>

        {/* Middle: Kathmandu live clock */}
        {kathmanduTime && (
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <Clock className="size-3 text-accent" />
            <span>Kathmandu (NPT): {kathmanduTime}</span>
          </div>
        )}

        {/* Right: Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a
            href={personalInfo.cvPath}
            download="Sunil_Parajuli_CV.pdf"
            className="hover:text-accent transition-colors"
          >
            CV (PDF)
          </a>
          <a href="#top" className="hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
