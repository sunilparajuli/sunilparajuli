# Sunil Parajuli - Personal Portfolio & Architecture Showcase

A bespoke, high-performance personal website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**, inspired by the bold, editorial brutalist aesthetic of Wix's "Creative CV (Edgy)" template.

Tailored for **Sunil Parajuli** — Solution Architect, Digital Health / Social Protection Specialist, and e-Governance Researcher.

---

## ✨ Key Highlights

- **Aesthetic**: Bold editorial typography, dark/light theme switcher, animated live ticker, interactive cards, and high-contrast styling.
- **Content Verified**: Sourced directly from Sunil Parajuli's official CV and academic records (e-Governance MS at NOU with 3.76 GPA, KU Computer Engineering, Berlin SAP Hackathon 2026, GDHF Nairobi 2025, SSF Nepal, GIZ, ILO, AeHIN Laos).
- **Interactive Deep-Dive**: Clickable project modals with architecture overviews, key results, and technology badges.
- **Embedded CV Download**: Pre-bundled `/Sunil_Parajuli_CV.pdf` with direct download triggers across the site.
- **Interactive Contact Form**: Working validation, direct mailto fallback, and one-click copy to clipboard for email & phone.
- **100% Vercel & Cloudflare Ready**: Instant static prerendering and zero build errors.

---

## 🚀 Local Development

```bash
# 1. Navigate to project
cd /Users/hisoka/php/sunil-portfolio

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel + Pointing Domain from Cloudflare

### Step 1: Deploy to Vercel
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sunil Parajuli portfolio website"
   # Create repo on GitHub and push:
   # git remote add origin https://github.com/YOUR_USERNAME/sunil-portfolio.git
   # git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New..."** -> **"Project"**.
3. Import your `sunil-portfolio` GitHub repository. Next.js will be detected automatically.
4. Click **Deploy**.

---

### Step 2: Point Domain from Cloudflare to Vercel

**Yes, you can easily point your domain from Cloudflare to Vercel!**

1. **Add Custom Domain in Vercel**:
   - In your Vercel Project dashboard, go to **Settings** > **Domains**.
   - Enter your domain (e.g., `sunilparajuli.com` and `www.sunilparajuli.com`).

2. **Add DNS Records in Cloudflare**:
   - Log into your **Cloudflare Dashboard** > Select your domain > Go to **DNS** > **Records**.
   - Add / Update the following records:

| Type | Name / Host | Target / IPv4 Address | Proxy Status (Cloudflare) |
| :--- | :--- | :--- | :--- |
| **A** | `@` (root) | `76.76.21.21` | **DNS Only (Grey Cloud)** *(recommended during setup)* |
| **CNAME** | `www` | `cname.vercel-dns.com` | **DNS Only (Grey Cloud)** *(recommended during setup)* |

3. **Cloudflare SSL/TLS Configuration**:
   - In Cloudflare, navigate to **SSL/TLS** tab.
   - Set encryption mode to **Full (Strict)**. *(This prevents infinite redirect loops between Cloudflare and Vercel)*.
   - Under **Edge Certificates**, enable **Always Use HTTPS**.

4. Once Vercel verifies the DNS records and issues the SSL certificate (usually within 1–5 minutes), your website will be live on your custom domain with global CDN acceleration and HTTPS!
