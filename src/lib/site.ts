/*
 * SITE CONFIG -- shared values for metadata, canonical, sitemap, robots.
 * ASCII only (repo policy). NEXT_PUBLIC_SITE_URL overrides the canonical
 * production domain; the fallback below is the deployment-safe site domain.
 */

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL =
  configuredSiteUrl || "https://ttirecruiting.vercel.app";

export const FULL_APPLICATION_URL =
  process.env.NEXT_PUBLIC_FULL_APPLICATION_URL ??
  process.env.NEXT_PUBLIC_APPLY_URL ??
  "https://apply.ttirecruiting.us";

export const SITE = {
  url: SITE_URL,
  name: "TTI Recruiting",
  tagline: "Flatbed. Regional. Reliable.",
  defaultTitle: "TTI Recruiting | Flatbed. Regional. Reliable.",
  description:
    "TTI Recruiting helps CDL drivers connect with recruiting opportunities in the U.S. market. OTR, regional, local, and dedicated lanes across the Midwest.",
  keywords: [
    "CDL recruiting",
    "truck driver recruiting",
    "TTI Recruiting",
    "flatbed driver",
    "trucking opportunities",
  ],
};
