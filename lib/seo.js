import { profile } from "@/data/profile";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sunilparajuli.com").origin;
export const siteTitle = "Sunil Parajuli — Social Security & Social Protection Professional";
export const siteDescription = "Sunil Parajuli, social security and social protection professional in Nepal. Explore work in health insurance, openIMIS, and digital public infrastructure.";
export const absoluteUrl = (path = "/") => new URL(path, `${siteUrl}/`).href;

export function pageMetadata(title, description, path) {
  const fullTitle = path === "/" ? siteTitle : `${title} | Sunil Parajuli`;
  return {
    title: path === "/" ? { absolute: siteTitle } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website", locale: "en_US", siteName: "Sunil Parajuli",
      title: fullTitle, description, url: absoluteUrl(path),
      images: [{ url: absoluteUrl(profile.photo), width: 400, height: 400, alt: profile.name }],
    },
    twitter: {
      card: "summary", title: fullTitle, description,
      images: [{ url: absoluteUrl(profile.photo), alt: profile.name }],
    },
  };
}
