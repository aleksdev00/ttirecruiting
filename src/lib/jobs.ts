/*
 * JOBS -- SINGLE SOURCE OF TRUTH
 * -----------------------------------------
 * Consolidated data layer for the jobs listing, quiz, and apply flow.
 * Replaces the corrupted/duplicated modules that used to live at:
 *   src/lib/mock-data.ts
 *   src/lib/jobs/seed.ts
 *   src/lib/employment/types.ts
 * Those three were byte-verified to have ZERO consumers anywhere in src
 * and were deleted after the content below was merged in here.
 *
 * PLACEHOLDER POLICY (MANDATORY BEFORE PUBLIC LAUNCH):
 * Every pay / benefit / home-time / equipment-age / orientation /
 * annual-miles / sign-on figure in this file is a PLACEHOLDER pulled
 * from the research blueprint so the UI, quiz matching, and apply flow
 * have realistic shape. NONE are confirmed hiring terms. Replace each
 * with verified figures from an approved source before going live.
 *
 * Testimonials are PLACEHOLDERS -- they are NOT real driver quotes and
 * must never ship as real.
 *
 * Imagery is Unsplash demo photography; swap for real photos.
 *
 * NOTE: keep this file purely ASCII. Non-ASCII characters (em/en dashes,
 * curly quotes, box-drawing glyphs) are the documented corruption vector
 * in this repo and repeatedly mangled by tooling. ASCII only, forever.
 */

export const BRAND = {
  name: "TTI Recruiting Inc.",
  shortName: "TTI",
  tagline: "Flatbed. Regional. Reliable.",
  est: "Family-owned since 1998 (placeholder - confirm founding year)",
  phone: "(555) 014-7755 (placeholder - confirm recruiting line)",
  email: "recruiting@ttirecruiting.com (placeholder - confirm inbox)",
  dot: "DOT #1234567 (placeholder - confirm)",
  mc: "MC #987654 (placeholder - confirm)",
  address: {
    line1: "2800 Freightway Drive",
    line2: "Building 7, Yard Entrance",
    city: "Kansas City",
    state: "MO",
    zip: "64161",
  },
  region: "Midwest + Southeast",
  hours: "Mon-Fri 7am-7pm CT, Sat 8am-12pm CT (placeholder - confirm)",
};

export type DrivingType = "OTR" | "Regional" | "Local" | "Dedicated";

export const DRIVING_TYPES = [
  { slug: "OTR", label: "OTR", blurb: "Long-haul routes across the country with predictable out-and-back freight." },
  { slug: "Regional", label: "Regional", blurb: "Shorter lanes within a set footprint so you can plan around home time." },
  { slug: "Local", label: "Local", blurb: "Daily work that gets you back home most nights near your terminal." },
  { slug: "Dedicated", label: "Dedicated", blurb: "Consistent freight for one account with a repeatable schedule." },
] as const;

export type EquipmentType =
  | "Flatbed"
  | "Reefer"
  | "Dry Van"
  | "Tanker"
  | "Box Truck";

export type HomeTimeType =
  | "Weekly"
  | "Bi-weekly"
  | "Semi-monthly"
  | "Monthly"
  | "Intermittent"
  | "Daily";

export type HomeTime = {
  type: HomeTimeType;
  days: number; // typical days at home per year (placeholder)
  label: string;
};

export type Pay = {
  cpm: number; // cents per mile (placeholder)
  weekly: number; // estimated weekly gross (placeholder)
  signOn: number; // sign-on bonus (placeholder)
  payTypeNote: string;
};

export type JobPosting = {
  slug: string;
  title: string;
  drivingType: DrivingType;
  equipment: EquipmentType;
  cdlClass: "A" | "B" | "C" | "Non-CDL";
  experience: number; // years (placeholder)
  homeTime: HomeTime;
  pay: Pay;
  annualMiles: string; // placeholder estimate
  hazmat: boolean;
  riderProgram: boolean;
  petProgram: boolean;
  orientation: string; // length + pay note (placeholder)
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  locationLabel: string;
  postingMeta: {
    validThrough: string; // placeholder ISO date
    employmentType: "FULL_TIME";
  };
};

export const JOBS: JobPosting[] = [
  {
    slug: "regional-flatbed-driver",
    title: "Regional Flatbed Driver",
    drivingType: "Regional",
    equipment: "Flatbed",
    cdlClass: "A",
    experience: 2,
    homeTime: {
      type: "Weekly",
      days: 156,
      label: "Home every weekend",
    },
    pay: {
      cpm: 0.68,
      weekly: 1820,
      signOn: 8000,
      payTypeNote: "CPM + tarp pay; sign-on placeholder",
    },
    annualMiles: "145,000-160,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: true,
    orientation: "4 days, paid (placeholder)",
    summary:
      "Run flatbed freight across a 10-state regional lane, home every weekend. Our core regional position.",
    responsibilities: [
      "Inspect and secure loads with tarps, straps, and chains",
      "Run a consistent 10-state regional lane",
      "Complete pre-trip and post-trip inspections",
      "Communicate with dispatch daily",
    ],
    requirements: [
      "Valid Class A CDL with 2+ years flatbed experience",
      "Clean MVR and current DOT medical card",
      "Able to tarp and secure flatbed freight (test required)",
    ],
    benefits: [
      "Home every weekend",
      "Detention pay and tarp pay (placeholder)",
      "Paid orientation (placeholder)",
      "Pet and rider program availability",
    ],
    locationLabel: "Kansas City, MO terminal",
    postingMeta: {
      validThrough: "2099-12-31",
      employmentType: "FULL_TIME",
    },
  },
];

export function getJobBySlug(slug: string): JobPosting | undefined {
  return JOBS.find((job) => job.slug === slug);
}

export function getJobsByType(
  drivingType: DrivingType
): JobPosting[] {
  return JOBS.filter((job) => job.drivingType === drivingType);
}

export const QUIZ_PATHS = {
  start: "/quiz/start",
  driving: "/quiz/driving",
  homeTime: "/quiz/home-time",
  equipment: "/quiz/equipment",
  cdl: "/quiz/cdl",
  results: "/quiz/results",
} as const;

// Repository seam (Supabase-ready). Swap the array for a client without
// touching call sites (see AGENTS.md data-layer plan).
export interface JobRepository {
  listJobs(): Promise<JobPosting[]>;
  getJobBySlug(slug: string): Promise<JobPosting | undefined>;
}

export const jobRepository: JobRepository = {
  async listJobs() {
    return JOBS;
  },
  async getJobBySlug(slug: string) {
    return getJobBySlug(slug);
  },
};