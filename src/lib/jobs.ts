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
  {
    slug: "otr-flatbed-driver",
    title: "OTR Flatbed Driver",
    drivingType: "OTR",
    equipment: "Flatbed",
    cdlClass: "A",
    experience: 3,
    homeTime: {
      type: "Bi-weekly",
      days: 104,
      label: "Home every other weekend",
    },
    pay: {
      cpm: 0.71,
      weekly: 1950,
      signOn: 9000,
      payTypeNote: "CPM + tarp pay; sign-on placeholder",
    },
    annualMiles: "160,000-180,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: true,
    orientation: "5 days, paid (placeholder)",
    summary:
      "Long-haul flatbed freight across the lower 48 with a predictable out-and-back rhythm.",
    responsibilities: [
      "Secure and tarp oversize flatbed loads for long-haul runs",
      "Plan routes and log hours across state lines",
      "Complete pre-trip and post-trip inspections",
      "Report freight status to dispatch at each stop",
    ],
    requirements: [
      "Valid Class A CDL with 3+ years OTR flatbed experience",
      "Clean MVR and current DOT medical card",
      "Comfortable tarping and chaining in all weather",
    ],
    benefits: [
      "Long-haul miles",
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
  {
    slug: "regional-reefer-driver",
    title: "Regional Reefer Driver",
    drivingType: "Regional",
    equipment: "Reefer",
    cdlClass: "A",
    experience: 2,
    homeTime: {
      type: "Weekly",
      days: 156,
      label: "Home every weekend",
    },
    pay: {
      cpm: 0.64,
      weekly: 1740,
      signOn: 7500,
      payTypeNote: "CPM; sign-on placeholder",
    },
    annualMiles: "140,000-155,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: true,
    orientation: "4 days, paid (placeholder)",
    summary:
      "Temperature-controlled regional freight on a set footprint, home every weekend.",
    responsibilities: [
      "Run reefer loads on a consistent regional lane",
      "Monitor temperature settings and document status",
      "Complete pre-trip and post-trip inspections",
      "Coordinate appointments with dispatch daily",
    ],
    requirements: [
      "Valid Class A CDL with 2+ years driving experience",
      "Clean MVR and current DOT medical card",
      "Experience with temperature-controlled freight preferred",
    ],
    benefits: [
      "Home every weekend",
      "Detention pay (placeholder)",
      "Paid orientation (placeholder)",
      "Pet and rider program availability",
    ],
    locationLabel: "Kansas City, MO terminal",
    postingMeta: {
      validThrough: "2099-12-31",
      employmentType: "FULL_TIME",
    },
  },
  {
    slug: "local-dry-van-driver",
    title: "Local Dry Van Driver",
    drivingType: "Local",
    equipment: "Dry Van",
    cdlClass: "A",
    experience: 1,
    homeTime: {
      type: "Daily",
      days: 250,
      label: "Home most nights",
    },
    pay: {
      cpm: 0.55,
      weekly: 1450,
      signOn: 4000,
      payTypeNote: "Hourly + stops; sign-on placeholder",
    },
    annualMiles: "80,000-95,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: false,
    orientation: "3 days, paid (placeholder)",
    summary:
      "Daily dry van work out of the same yard, back most nights near the terminal.",
    responsibilities: [
      "Run same-day dry van routes from the terminal",
      "Perform pre-trip and post-trip inspections",
      "Manage delivery appointments and paperwork",
      "Report issues to dispatch before end of shift",
    ],
    requirements: [
      "Valid Class A CDL with 1+ year driving experience",
      "Clean MVR and current DOT medical card",
      "Comfortable with daily home time and local stops",
    ],
    benefits: [
      "Home most nights",
      "Stop pay (placeholder)",
      "Paid orientation (placeholder)",
      "Consistent home schedule",
    ],
    locationLabel: "Kansas City, MO terminal",
    postingMeta: {
      validThrough: "2099-12-31",
      employmentType: "FULL_TIME",
    },
  },
  {
    slug: "dedicated-tanker-driver",
    title: "Dedicated Tanker Driver",
    drivingType: "Dedicated",
    equipment: "Tanker",
    cdlClass: "A",
    experience: 4,
    homeTime: {
      type: "Weekly",
      days: 156,
      label: "Home every weekend",
    },
    pay: {
      cpm: 0.73,
      weekly: 2010,
      signOn: 10000,
      payTypeNote: "CPM; sign-on placeholder",
    },
    annualMiles: "120,000-135,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: false,
    orientation: "5 days, paid (placeholder)",
    summary:
      "Repeatable freight for one account with a steady weekly schedule and a fixed terminal.",
    responsibilities: [
      "Run the same account on a repeatable schedule",
      "Perform pre-trip and post-trip inspections",
      "Maintain accurate load documentation",
      "Coordinate with the same dispatch contact daily",
    ],
    requirements: [
      "Valid Class A CDL with 4+ years driving experience",
      "Clean MVR and current DOT medical card",
      "Tanker endorsement required or willingness to obtain",
    ],
    benefits: [
      "Consistent account and schedule",
      "Detention pay (placeholder)",
      "Paid orientation (placeholder)",
      "Predictable home time",
    ],
    locationLabel: "Kansas City, MO terminal",
    postingMeta: {
      validThrough: "2099-12-31",
      employmentType: "FULL_TIME",
    },
  },
  {
    slug: "otree-dry-van-driver",
    title: "OTR Dry Van Driver",
    drivingType: "OTR",
    equipment: "Dry Van",
    cdlClass: "A",
    experience: 2,
    homeTime: {
      type: "Bi-weekly",
      days: 104,
      label: "Home every other weekend",
    },
    pay: {
      cpm: 0.66,
      weekly: 1870,
      signOn: 8500,
      payTypeNote: "CPM; sign-on placeholder",
    },
    annualMiles: "155,000-175,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: true,
    orientation: "4 days, paid (placeholder)",
    summary:
      "Coast-to-coast dry van freight with a steady out-and-back rhythm across the country.",
    responsibilities: [
      "Run coast-to-coast dry van freight",
      "Plan routes and manage hours of service",
      "Complete pre-trip and post-trip inspections",
      "Report freight status to dispatch each stop",
    ],
    requirements: [
      "Valid Class A CDL with 2+ years OTR experience",
      "Clean MVR and current DOT medical card",
      "Comfortable with long-haul schedule",
    ],
    benefits: [
      "Long-haul miles",
      "Detention pay (placeholder)",
      "Paid orientation (placeholder)",
      "Pet and rider program availability",
    ],
    locationLabel: "Kansas City, MO terminal",
    postingMeta: {
      validThrough: "2099-12-31",
      employmentType: "FULL_TIME",
    },
  },
  {
    slug: "local-box-truck-driver",
    title: "Local Box Truck Driver",
    drivingType: "Local",
    equipment: "Box Truck",
    cdlClass: "B",
    experience: 1,
    homeTime: {
      type: "Daily",
      days: 250,
      label: "Home most nights",
    },
    pay: {
      cpm: 0.5,
      weekly: 1380,
      signOn: 3500,
      payTypeNote: "Hourly + stops; sign-on placeholder",
    },
    annualMiles: "60,000-75,000 (placeholder)",
    hazmat: false,
    riderProgram: false,
    petProgram: false,
    orientation: "2 days, paid (placeholder)",
    summary:
      "Daytime box truck deliveries near the terminal, home most nights.",
    responsibilities: [
      "Run daytime box truck delivery routes",
      "Complete vehicle inspections each shift",
      "Manage delivery windows and customer handoffs",
      "Log stops and report completion to dispatch",
    ],
    requirements: [
      "Valid Class B CDL with 1+ year driving experience",
      "Clean MVR and current medical card",
      "Comfortable with daytime local deliveries",
    ],
    benefits: [
      "Home most nights",
      "Stop pay (placeholder)",
      "Paid orientation (placeholder)",
      "Consistent daytime schedule",
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

export const EQUIPMENT_OPTIONS = [
  "Flatbed",
  "Reefer",
  "Dry Van",
  "Tanker",
  "Box Truck",
] as const satisfies EquipmentType[];

export type JobFilters = {
  drivingType?: DrivingType;
  equipment?: EquipmentType;
  query?: string;
};

export function filterJobs(filters: JobFilters): JobPosting[] {
  const q = filters.query?.trim().toLowerCase() ?? "";
  return JOBS.filter((job) => {
    if (filters.drivingType && job.drivingType !== filters.drivingType) {
      return false;
    }
    if (filters.equipment && job.equipment !== filters.equipment) {
      return false;
    }
    if (q) {
      const haystack =
        [job.title, job.summary, job.locationLabel, job.equipment]
          .join(" ")
          .toLowerCase();
      if (!haystack.includes(q)) {
        return false;
      }
    }
    return true;
  });
}

export const QUIZ_PATHS = {
  start: "/find-your-fit",
  driving: "/find-your-fit/driving",
  homeTime: "/find-your-fit/home-time",
  equipment: "/find-your-fit/equipment",
  cdl: "/find-your-fit/cdl",
  results: "/find-your-fit/results",
} as const;

// Repository seam (Supabase-ready). Swap the array for a client without
// touching call sites (see AGENTS.md data-layer plan).
export interface JobRepository {
  listJobs(): Promise<JobPosting[]>;
  searchJobs(filters: JobFilters): Promise<JobPosting[]>;
  getJobBySlug(slug: string): Promise<JobPosting | undefined>;
}

export const jobRepository: JobRepository = {
  async listJobs() {
    return JOBS;
  },
  async searchJobs(filters) {
    return filterJobs(filters);
  },
  async getJobBySlug(slug: string) {
    return getJobBySlug(slug);
  },
};