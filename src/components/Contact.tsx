'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Download, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission or mailto fallback
    setTimeout(() => {
      setStatus('success');
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                06 // Initiate Contact
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase">
              Get in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-emerald-400">
                Touch
              </span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light">
            Whether for technical advisory, health informatics systems design, research collaborations, or enterprise consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 relative group">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Direct Email
                </span>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold font-mono text-white hover:text-emerald-400 transition-colors block break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 relative group">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Phone / Mobile
                </span>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-base sm:text-lg font-bold font-mono text-white hover:text-emerald-400 transition-colors block"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location & Address */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Office & Residence
              </span>
              <p className="text-sm font-semibold text-white font-display">
                {personalInfo.address}
              </p>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Kathmandu, Nepal • Available for Remote & Onsite Missions
              </p>
            </div>

            {/* CV Direct Download Card */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-white font-display block">
                  Official Curriculum Vitae
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  Updated 2026 Edition (PDF)
                </span>
              </div>
              <a
                href={personalInfo.cvPath}
                download="Sunil_Parajuli_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-mono text-xs uppercase font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all shrink-0"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-neutral-400 font-light mb-8">
                Fill out the form below to reach Sunil directly.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <span className="text-emerald-400 font-bold font-display text-lg block">
                    Message Prepared!
                  </span>
                  <p className="text-xs text-neutral-300 font-mono">
                    Your email client has been opened to send this message to {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm placeholder-neutral-600 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organization.org"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm placeholder-neutral-600 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. openIMIS Modular Migration Advisory"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm placeholder-neutral-600 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your initiative, architecture inquiry, or project scope..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm placeholder-neutral-600 transition-colors font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-neutral-950 font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
