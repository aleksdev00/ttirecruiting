/*
 * SITE CONFIG -- shared values for metadata, canonical, sitemap, robots.
 * ASCII only (repo policy). Replace SITE_URL with the live domain before
 * public launch; it currently falls back to a placeholder.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ttirecruiting.com";

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