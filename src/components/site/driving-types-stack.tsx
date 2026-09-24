import Image from "next/image";
import Link from "next/link";
import { DRIVING_TYPES, getJobsByType } from "@/lib/jobs";
import { FULL_APPLICATION_URL } from "@/lib/site";
import "./driving-types-motion.css";

const IMG = {
  otr: "https://images.unsplash.com/photo-1516319915504-015b432d407c?auto=format&fit=crop&w=1600&q=80",
  regional: "https://images.unsplash.com/photo-1531221510017-6f308b4d74c1?auto=format&fit=crop&w=1400&q=80",
  local: "https://images.unsplash.com/photo-1711322536126-07f362a48677?auto=format&fit=crop&w=1400&q=80",
};

const LANES = {
  OTR: {
    index: "01",
    title: "The Long Haul",
    shot: "OTR / Route I-80 / Night shift",
  },
  Regional: {
    index: "02",
    title: "The Loop",
    shot: "Regional / Shared footprint / Weekly rhythm",
  },
  Local: {
    index: "03",
    title: "The Day Lap",
    shot: "Local / Daily run / Home most nights",
  },
  Dedicated: {
    index: "04",
    title: "The Account",
    shot: "Dedicated / One customer / Repeatable load",
  },
} as const;

/* ---------- 01 / OTR - wide band, long route ---------- */

function LaneOtr({
  t,
  roles,
}: {
  t: (typeof DRIVING_TYPES)[number];
  roles: number;
}) {
  return (
    <section className="dt-row-otr relative overflow-clip bg-ink text-bone">
      <div className="grid w-full lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="dt-copy font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
            Lane {LANES.OTR.index} / {t.label}
          </p>
          <h3 className="mt-6 font-sans text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="dt-title">
              <span className="dt-title-line">The</span>
            </span>
            <span className="dt-title">
              <span className="dt-title-line">Long</span>
            </span>
            <span className="dt-title">
              <span className="dt-title-line">Haul</span>
            </span>
          </h3>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/75">{t.blurb}</p>

          <div className="mt-10 flex flex-wrap items-end gap-8">
            <div>
              <p className="font-sans text-5xl font-black tabular-nums text-bone">{roles}</p>
              <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-bone/45">
                Open roles
              </p>
            </div>
            <Link
              href={FULL_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-hazard px-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-hazard transition-colors hover:bg-hazard hover:text-ink"
            >
              See OTR roles
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="dt-clip relative min-h-[320px] overflow-clip lg:min-h-[560px]">
          <Image
            src={IMG.otr}
            alt="Highway at night, long exposure"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden />
          <p className="absolute bottom-4 left-4 z-10 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone/70 sm:left-6">
            {LANES.OTR.shot}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-10" aria-hidden="true">
        <svg viewBox="0 0 1200 60" className="w-full">
          <line x1="0" y1="30" x2="1200" y2="30" stroke="var(--color-bone)" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="0" y1="30" x2="1200" y2="30" stroke="var(--color-hazard)" strokeWidth="1.5" className="dt-route-otr" />
          <circle cx="0" cy="30" r="4" className="dt-node-otr" />
          <circle cx="600" cy="30" r="4" className="dt-node-otr" />
          <circle cx="1200" cy="30" r="4" className="dt-node-otr" />
        </svg>
        <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-bone/40">
          <span>Origin</span>
          <span>Midpoint</span>
          <span>Destination</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 / Regional - map loop, editorial split ---------- */

function LaneRegional({
  t,
  roles,
}: {
  t: (typeof DRIVING_TYPES)[number];
  roles: number;
}) {
  return (
    <section className="dt-row-reg border-y border-bone/15 bg-bone text-ink">
      <div className="mx-auto grid w-full max-w-7xl gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square min-h-[340px] border-b border-bone/15 bg-bone-deep lg:border-b-0 lg:border-r">
            <div className="absolute left-5 top-5 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-ink/45">
              Footprint / Planned route
            </div>
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full p-6" aria-hidden="true">
              <circle cx="70" cy="110" r="6" className="dt-node-reg" />
              <circle cx="240" cy="60" r="6" className="dt-node-reg" />
              <circle cx="330" cy="180" r="6" className="dt-node-reg" />
              <circle cx="180" cy="330" r="6" className="dt-node-reg" />
              <path
                d="M70 110 C 150 20, 280 20, 330 180 S 240 340, 180 330"
                fill="none"
                stroke="var(--color-hazard)"
                strokeWidth="4"
                strokeLinecap="round"
                className="dt-route-reg"
              />
              <line x1="70" y1="110" x2="180" y2="330" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
            <div className="absolute bottom-5 right-5 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-ink/45">
              Loop / home in the middle
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:order-2 lg:px-16 lg:py-24">
          <p className="dt-copy font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
            Lane {LANES.Regional.index} / {t.label}
          </p>
          <h3 className="mt-6 font-sans text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="dt-title">
              <span className="dt-title-line">The</span>
            </span>
            <span className="dt-title">
              <span className="dt-title-line">Loop</span>
            </span>
          </h3>
          <p className="dt-copy mt-8 max-w-md text-lg leading-relaxed text-ink/70">{t.blurb}</p>

          <div className="dt-copy mt-10 flex flex-wrap items-end gap-8 border-t border-ink/10 pt-8">
            <div>
              <p className="font-sans text-5xl font-black tabular-nums">{roles}</p>
              <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
                Open roles
              </p>
            </div>
            <Link
              href={FULL_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-ink px-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Ask about regional lanes
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 / Local - home-time rail ---------- */

function LaneLocal({
  t,
  roles,
}: {
  t: (typeof DRIVING_TYPES)[number];
  roles: number;
}) {
  return (
    <section className="dt-row-loc relative overflow-clip bg-ink text-bone">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="dt-copy font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
            Lane {LANES.Local.index} / {t.label}
          </p>
          <h3 className="mt-6 font-sans text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="dt-title">
              <span className="dt-title-line">The</span>
            </span>
            <span className="dt-title">
              <span className="dt-title-line">Day Lap</span>
            </span>
          </h3>
          <p className="dt-copy mt-8 max-w-md text-lg leading-relaxed text-bone/75">{t.blurb}</p>

          <div className="mt-10 flex flex-wrap items-end gap-8">
            <div>
              <p className="font-sans text-5xl font-black tabular-nums text-bone">{roles}</p>
              <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-bone/45">
                Open roles
              </p>
            </div>
            <Link
              href={FULL_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-bone/40 px-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              See local roles
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="dt-copy lg:justify-self-end">
          <div className="dt-clip relative min-h-[300px] w-full max-w-md overflow-clip lg:min-h-[420px]">
            <Image
              src={IMG.local}
              alt="A truck on a city street at night"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" aria-hidden />
            <p className="absolute bottom-4 left-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone/70">
              {LANES.Local.shot}
            </p>
          </div>

          <div className="mt-6 w-full max-w-md">
            <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone/45">
              <span>Out</span>
              <span>Shift</span>
              <span>Home</span>
            </div>
            <div className="relative mt-2 h-px bg-bone/20" style={{ containerType: "inline-size" }}>
              <div className="dt-rail-loc absolute inset-0 origin-left bg-hazard" />
              <span className="lap-travel absolute -left-1.5 -top-1 h-3 w-3 rounded-full bg-hazard" aria-hidden />
              <span className="lap-home absolute -right-1.5 -top-1 h-3 w-3 rounded-full bg-hazard" aria-hidden />
            </div>
            <div className="mt-3 flex items-center justify-between font-sans text-xl font-black uppercase tracking-tight">
              <span>06:00</span>
              <span className="text-hazard">Home most nights</span>
              <span>18:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 / Dedicated - sealed ring ---------- */

function LaneDedicated({
  t,
  roles,
}: {
  t: (typeof DRIVING_TYPES)[number];
  roles: number;
}) {
  return (
    <section className="dt-row-ded border-t border-bone/15 bg-bone text-ink">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:py-28">
        <p className="dt-copy font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
          Lane {LANES.Dedicated.index} / {t.label}
        </p>
        <h3 className="mt-6 font-sans text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="dt-title">
            <span className="dt-title-line">The</span>
          </span>
          <span className="dt-title">
            <span className="dt-title-line">Account</span>
          </span>
        </h3>

        <svg viewBox="0 0 240 240" className="mt-12 h-48 w-48 sm:h-56 sm:w-56" aria-hidden="true">
          <circle cx="120" cy="120" r="112" fill="none" stroke="var(--color-hazard)" strokeWidth="2.5" className="dt-ring-ded" />
          <circle cx="120" cy="120" r="94" fill="none" stroke="var(--color-ink)" strokeOpacity="0.2" strokeWidth="1" />
          <text
            x="120"
            y="128"
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontWeight="900"
            fontSize="34"
            fill="var(--color-ink)"
            className="dt-lock font-sans"
          >
            1:1
          </text>
        </svg>

        <p className="mt-10 max-w-lg text-lg leading-relaxed text-ink/70">{t.blurb}</p>

        <div className="mt-10 flex flex-wrap items-end justify-center gap-8">
          <div>
            <p className="font-sans text-5xl font-black tabular-nums">{roles}</p>
            <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
              Open roles
            </p>
          </div>
          <Link
            href={FULL_APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-ink px-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bone"
          >
            Talk about dedicated work
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- section header ---------- */

export function DrivingTypesStack() {
  return (
    <section aria-label="Driving types" className="dt-stack">
      <div className="border-b border-bone/15 bg-ink text-bone">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
              The four lanes
            </p>
            <h2 className="mt-6 font-sans text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              <span className="dt-title">
                <span className="dt-title-line">Four ways</span>
              </span>
              <span className="dt-title">
                <span className="dt-title-line">to work the road.</span>
              </span>
            </h2>
          </div>
          <div className="lg:justify-self-end lg:pb-3">
            <p className="max-w-sm text-lg leading-relaxed text-bone/65">
              OTR. Regional. Local. Dedicated. Four different relationships with the road, the
              miles, and home time. Pick the fit and take the next step.
            </p>
            <div className="mt-6 flex items-center gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-bone/40">
              <span>OTR</span>
              <span className="inline-block h-1 w-1 bg-hazard" aria-hidden />
              <span>Regional</span>
              <span className="inline-block h-1 w-1 bg-hazard" aria-hidden />
              <span>Local</span>
              <span className="inline-block h-1 w-1 bg-hazard" aria-hidden />
              <span>Dedicated</span>
            </div>
          </div>
        </div>
      </div>

      <LaneOtr t={DRIVING_TYPES[0]} roles={getJobsByType(DRIVING_TYPES[0].slug).length} />
      <LaneRegional t={DRIVING_TYPES[1]} roles={getJobsByType(DRIVING_TYPES[1].slug).length} />
      <LaneLocal t={DRIVING_TYPES[2]} roles={getJobsByType(DRIVING_TYPES[2].slug).length} />
      <LaneDedicated t={DRIVING_TYPES[3]} roles={getJobsByType(DRIVING_TYPES[3].slug).length} />
    </section>
  );
}