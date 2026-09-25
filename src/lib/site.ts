/*
 * SITE CONFIG -- shared values for metadata, canonical, sitemap, robots.
 * ASCII only (repo policy). NEXT_PUBLIC_SITE_URL overrides the canonical
 * production domain; the fallback below is the live site domain.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ttirecruiting.us";

export const FULL_APPLICATION_URL =
  process.env.NEXT_PUBLIC_FULL_APPLICATION_URL ??
  process.env.NEXT_PUBLIC_APPLY_URL ??
  "https://apply.ttirecruiting.us";

export const CONTACT_EMAIL = "info@ttirecruiting.us";

export const SITE = {
  url: SITE_URL,
  name: "TTI Recruiting Inc.",
  tagline: "Flatbed. Regional. Reliable.",
  defaultTitle: "TTI Recruiting | Flatbed. Regional. Reliable.",
  description:
    "TTI Recruiting helps CDL drivers find trucking opportunities in the U.S. market. OTR, regional, local, and dedicated lanes across the Midwest.",
  keywords: [
    "CDL jobs",
    "truck driver jobs",
    "TTI Recruiting",
    "flatbed driver",
    "trucking opportunities",
  ],
};