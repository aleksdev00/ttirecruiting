"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, DRIVING_TYPES, getJobsByType } from "@/lib/jobs";

type TypeCard = {
  slug: string;
  label: string;
  blurb: string;
  jobs: unknown[];
};

export function DrivingTypesStack() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [active, setActive] = React.useState<string>(DRIVING_TYPES[0]?.slug ?? "");
  const reduce = useReducedMotion();
  const setActivePaused = React.useCallback((i: number) => setActive(DRIVING_TYPES[i]?.slug ?? ""), []);

  React.useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
  }, [reduce]);

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hazard">Driving types</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-charcoal sm:text-4xl">
            Four ways to work the road. Pick the one that fits your life.
          </h2>
        </div>
      </div>

      <div>
        {DRIVING_TYPES.map((t, i) => {
          const jobs = getJobsByType(t.slug);
          return (
            <div
              key={t.slug}
              onMouseEnter={() => setActivePaused(i)}
              onFocus={() => setActivePaused(i)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-charcoal/25 ring-1 ring-white/40 transition-colors hover:ring-hazard/60 focus-within:ring-hazard/60"
            >
              ...
            </div>
          );
        })}
      </div>
    </section>
  );
}
