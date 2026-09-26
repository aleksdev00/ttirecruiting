export const BRAND = {
  name: "TTI Recruiting",
  shortName: "TTI",
  tagline: "Flatbed. Regional. Reliable.",
} as const;

export const DRIVING_TYPES = [
  {
    slug: "OTR",
    label: "OTR",
    blurb: "Long-haul routes across the country with predictable out-and-back freight.",
  },
  {
    slug: "Regional",
    label: "Regional",
    blurb: "Shorter lanes within a set footprint so you can plan around home time.",
  },
  {
    slug: "Local",
    label: "Local",
    blurb: "Daily work that gets you back home most nights near your terminal.",
  },
  {
    slug: "Dedicated",
    label: "Dedicated",
    blurb: "Consistent freight for one account with a repeatable schedule.",
  },
] as const;
