"use client";

import * as React from "react";
import Link from "next/link";
import {
  DRIVING_TYPES,
  JOBS,
  getJobsByType,
  type DrivingType,
} from "@/lib/jobs";

const LANES: {
  key: DrivingType;
  index: string;
  name: string;
  rhythm: string;
}[] = [
  {
    key: "OTR",
    index: "01",
    name: "The Long Haul",
    rhythm: "Long-haul / out-and-back freight",
  },
  {
    key: "Regional",
    index: "02",
    name: "The Loop",
    rhythm: "Home every weekend",
  },
  {
    key: "Local",
    index: "03",
    name: "The Day Lap",
    rhythm: "Home most nights",
  },
  {
    key: "Dedicated",
    index: "04",
    name: "The Account",
    rhythm: "Repeatable schedule",
  },
];

const PLATE_META: Record<DrivingType, { top: string; note: string }> = {
  OTR: { top: "Route I-80 / night shift", note: "Countrywide freight" },
  Regional: { top: "Shared footprint / weekly rhythm", note: "Plan around home time" },
  Local: { top: "Daily run / same yard", note: "Back most nights" },
  Dedicated: { top: "One account / repeatable load", note: "Consistent freight" },
};

function LaneGlyph({ lane }: { lane: (typeof LANES)[number] }) {
  const ink = "none";
  const amber = "var(--color-signal)";

  switch (lane.key) {
    case "OTR":
      return (
        <svg viewBox="0 0 200 80" className="h-auto w-full" aria-hidden="true">
          <line x1="10" y1="40" x2="190" y2="40" stroke="var(--color-paper)" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="10" y1="40" x2="190" y2="40" stroke={amber} strokeWidth="2" />
          <circle cx="10" cy="40" r="5" fill={amber} />
          <circle cx="100" cy="40" r="5" fill={ink} stroke={amber} strokeWidth="2" />
          <circle cx="190" cy="40" r="5" fill={amber} />
        </svg>
      );
    case "Regional":
      return (
        <svg viewBox="0 0 200 160" className="h-auto w-full" aria-hidden="true">
          <path
            d="M30 45 C 90 15, 150 15, 180 70 S 130 145, 60 135"
            fill="none"
            stroke="var(--color-paper)"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            d="M30 45 C 90 15, 150 15, 180 70 S 130 145, 60 135"
            fill="none"
            stroke={amber}
            strokeWidth="2"
          />
          <circle cx="30" cy="45" r="5" fill={amber} />
          <circle cx="180" cy="70" r="5" fill={ink} stroke={amber} strokeWidth="2" />
          <circle cx="60" cy="135" r="5" fill={ink} stroke={amber} strokeWidth="2" />
        </svg>
      );
    case "Local":
      return (
        <svg viewBox="0 0 200 80" className="h-auto w-full" aria-hidden="true">
          <line x1="15" y1="40" x2="185" y2="40" stroke={amber} strokeWidth="2" />
          <line x1="100" y1="40" x2="100" y2="70" stroke={amber} strokeWidth="2" />
          <line x1="15" y1="40" x2="15" y2="10" stroke="var(--color-paper)" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="185" y1="40" x2="185" y2="10" stroke="var(--color-paper)" strokeOpacity="0.4" strokeWidth="1" />
          <circle cx="15" cy="40" r="5" fill="var(--color-ink)" stroke={amber} strokeWidth="2" />
          <circle cx="100" cy="70" r="5" fill={amber} />
          <circle cx="185" cy="40" r="5" fill={amber} />
        </svg>
      );
    case "Dedicated":
      return (
        <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden="true">
          <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-paper)" strokeOpacity="0.25" strokeWidth="1" />
          <circle cx="100" cy="100" r="80" fill="none" stroke={amber} strokeWidth="2" />
          <text
            x="100"
            y="112"
            textAnchor="middle"
            fontFamily="var(--vd-display)"
            fontSize="44"
            fill={amber}
          >
            1:1
          </text>
        </svg>
      );
  }
}

export function V3Board() {
  const [active, setActive] = React.useState(0);
  const [resetKey, setResetKey] = React.useState(0);
  const lane = LANES[active];
  const blurb = DRIVING_TYPES.find((t) => t.slug === lane.key)?.blurb ?? "";
  const roles = getJobsByType(lane.key).length;
  const posting = JOBS.find((j) => j.drivingType === lane.key);

  const select = (i: number) => {
    setActive((prev) => {
      if (prev !== i) {
        setResetKey((k) => k + 1);
      }
      return i;
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % LANES.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + LANES.length) % LANES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = LANES.length - 1;
    else return;
    e.preventDefault();
    select(next);
  };

  return (
    <section className="v3-board border-b border-ink/15 bg-paper text-ink" aria-label="Driving lanes board">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="v3-word font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
              The board
            </p>
            <h2 className="v3-headline mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.86] tracking-tight">
              Choose your lane.
            </h2>
          </div>
          <p className="v3-word max-w-xs font-ledger text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-faint">
            Use the arrows to jump lanes. Each lane changes the rhythm of your week.
          </p>
        </div>

        <div
          className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          <div
            role="group"
            aria-label="Driving lane selector"
            onKeyDown={onKeyDown}
          >
            {LANES.map((l, i) => {
              const isActive = i === active;
              return (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={isActive}
                  className={
                    "group flex w-full flex-col gap-1 border-b border-ink/15 px-1 py-5 text-left transition-colors duration-200 sm:py-6 " +
                    (isActive
                      ? "bg-ink text-paper lg:px-5"
                      : "bg-transparent text-ink hover:bg-paper-deep lg:px-5")
                  }
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className={
                        "font-ledger text-[11px] font-semibold tracking-[0.2em] " +
                        (isActive ? "text-signal" : "text-ink-faint group-hover:text-signal-deep")
                      }
                    >
                      {l.index}
                    </span>
                    <span className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                      {l.name}
                    </span>
                    <span
                      className={
                        "ml-auto font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] " +
                        (isActive ? "text-paper/60" : "text-ink-faint")
                      }
                    >
                      {l.key}
                    </span>
                  </span>
                  <span
                    className={
                      "ml-8 hidden max-w-[34ch] font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] md:block " +
                      (isActive ? "text-paper/70" : "text-ink-faint")
                    }
                  >
                    {l.rhythm}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="v3-plate border border-ink/20 bg-ink p-6 text-paper sm:p-8 lg:p-10"
            aria-live="polite"
          >
            <span className="sr-only">
              Selected lane {active + 1} of {LANES.length}: {lane.key}.
            </span>
            <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.26em] text-paper">
                  Lane {lane.index} / {lane.key}
                </p>
                <p className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl">
                  {lane.name}
                </p>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/80">{blurb}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-paper/20 pt-6 font-ledger text-[11px] font-semibold uppercase tracking-[0.2em]">
                  <p>
                    <span className="mr-2 inline-block h-2 w-2 bg-signal" aria-hidden="true" />
                    Rhythm / {lane.rhythm}
                  </p>
                  <p className="text-paper/70">{PLATE_META[lane.key].top}</p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70">
                    On the board now
                    <span className="ml-3 font-display text-3xl text-paper">{roles}</span>
                    <span className="ml-2">open posting{roles === 1 ? "" : "s"}</span>
                  </p>
                  {posting ? (
                    <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70">
                      Now posted / {posting.title}
                    </p>
                  ) : null}
                </div>

                <p className="mt-6 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  Availability and terms are confirmed with the carrier before
                  anything moves.
                </p>

                <Link
                  href="#quick-apply"
                  className="group mt-10 inline-flex h-14 w-full items-center justify-center gap-3 bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep sm:w-auto"
                >
                  Talk recruiting about {lane.key}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>

              <div className="hidden h-fit w-44 border border-paper/25 p-5 text-signal sm:block">
                <div key={resetKey} className="v3-glyph">
                  <LaneGlyph lane={lane} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}