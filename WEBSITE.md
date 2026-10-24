# Website maintenance

This is a Next.js portfolio with static content, ready for GitHub → Vercel deployment. No database or admin login is required.

## Edit content

- `data/profile.js`: introduction, expertise, experience, education, and contact details.
- `json/data.json`: project descriptions, categories, dates, and technologies.
- `public/Sunil_Parajuli_CV.pdf`: downloadable CV.
- `app/(root)/page.jsx`: homepage composition.
- `app/globals.css`: responsive visual design.

The design reinterprets the Steve portfolio template by Colorlib in React: prominent banner, category filters, selected work, about section, and contact footer. Geometric artwork is original CSS; no template stock portraits are presented as Sunil. Design reference: https://technext.github.io/steve/index.html

## Run and deploy

Use Node.js 22. Run `npm ci`, then `npm run dev`. Run `npm run build` before pushing. Import this repository into Vercel with the Next.js preset; the build command is `npm run build`. No database environment variables are needed. Contact links open the visitor’s email or phone application. The legacy contact API is unused by the new pages.

All content changes are made in the repository and become visible after the connected Vercel deployment succeeds. Admin editing and a database are deferred.

## Search engine metadata

`lib/seo.js` centralizes page titles, descriptions, canonical URLs, and sharing cards. `app/sitemap.js` includes the homepage, about page, project listing, and every visible project. `app/robots.js` advertises the sitemap. Both are generated during the build.

The production origin defaults to `https://sunilparajuli.com`. Set `NEXT_PUBLIC_SITE_URL` in Vercel to your preferred production origin if different, then redeploy. All canonical and sitemap URLs use that origin. After deployment, verify ownership in Google Search Console and submit `/sitemap.xml`; this repository does not perform Search Console verification or guarantee indexing.
