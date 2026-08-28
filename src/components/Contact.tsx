'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Mail, Copy, Check, Send, Download, MapPin, Phone, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // bot trap
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch message. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please use direct email below.');
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Website Architecture Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        
        {/* Top Header */}
        <div className="mb-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-[.18em] text-accent font-semibold">
            Have a meaningful problem?
          </p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl">
            Let&apos;s build what matters.
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Direct Email
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 text-lg sm:text-xl font-medium hover:border-accent hover:text-accent transition-colors break-all"
                >
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="size-4 text-accent" />
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1.5 border border-primary-foreground/20 text-xs font-mono hover:border-accent transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
                </button>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Mobile / WhatsApp
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-base text-primary-foreground hover:text-accent transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1.5 border border-primary-foreground/20 text-xs font-mono hover:border-accent transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
                </button>
              </div>
            </div>

            <div className="border-t border-primary-foreground/15 pt-6 space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Base of Operations
              </p>
              <p className="text-sm font-medium text-primary-foreground flex items-center gap-1.5">
                <MapPin className="size-4 text-accent shrink-0" />
                {personalInfo.address}
              </p>
              <p className="text-xs text-muted-foreground">
                Kathmandu, Nepal · Available for Global Technical Missions & Remote Architecture
              </p>
            </div>

            <div className="border-t border-primary-foreground/15 pt-6 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.cvPath}
                download="Sunil_Parajuli_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent-hover transition-colors"
              >
                <Download className="size-3.5" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-background/5 border border-primary-foreground/15 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-medium text-primary-foreground">
                Send an architectural inquiry
              </h3>
              <span className="font-mono text-[10px] uppercase text-accent bg-accent/10 border border-accent/30 px-2 py-0.5">
                Direct Delivery
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 font-mono">
              Inquiries are routed directly to Sunil Parajuli&apos;s verified inbox.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-accent/15 border border-accent text-center space-y-3 font-mono text-xs animate-in fade-in duration-300">
                <div className="flex items-center justify-center">
                  <div className="size-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Check className="size-5" />
                  </div>
                </div>
                <span className="text-accent font-bold block text-sm">Message Dispatched Successfully!</span>
                <p className="text-primary-foreground max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Sunil will review your inquiry and get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 bg-primary text-primary-foreground border border-primary-foreground/20 hover:border-accent text-[11px] uppercase tracking-wider font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot Bot Trap (Hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-xs font-mono flex items-start gap-2.5 text-red-200">
                    <AlertCircle className="size-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-semibold block">{errorMessage}</span>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="underline hover:text-white"
                      >
                        Click here to send via your email app instead &rarr;
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jennifer Vance"
                      className="w-full px-3.5 py-2.5 bg-primary border border-primary-foreground/20 focus:border-accent focus:outline-none text-primary-foreground text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jennifer@organization.org"
                      className="w-full px-3.5 py-2.5 bg-primary border border-primary-foreground/20 focus:border-accent focus:outline-none text-primary-foreground text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. openIMIS Modular Migration Advisory"
                    className="w-full px-3.5 py-2.5 bg-primary border border-primary-foreground/20 focus:border-accent focus:outline-none text-primary-foreground text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your initiative, health informatics scope, or architecture inquiry..."
                    className="w-full px-3.5 py-2.5 bg-primary border border-primary-foreground/20 focus:border-accent focus:outline-none text-primary-foreground text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 text-accent-foreground font-mono text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="size-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
