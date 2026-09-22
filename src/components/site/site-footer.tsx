import Link from "next/link";
import { BRAND } from "@/lib/jobs";

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/15 bg-ink py-12 text-bone">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-10">
        <p className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.24em]">
          <span className="flex h-4 w-1 -skew-x-12 bg-hazard" aria-hidden="true" />
          {BRAND.shortName}
        </p>
        <p className="text-xs uppercase tracking-[0.22em] text-bone/50">{BRAND.tagline}</p>
        <p className="text-xs text-bone/45">
          Placeholder dot line. {BRAND.dot} | {BRAND.mc}. Confirm DOT and MC numbers before publishing.
        </p>
        <nav className="mt-1 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.18em] text-bone/60">
          <Link className="transition-colors hover:text-bone" href="/jobs">Jobs</Link>
          <Link className="transition-colors hover:text-bone" href="/about">About</Link>
          <Link className="transition-colors hover:text-bone" href="/contact">Contact</Link>
          <Link className="transition-colors hover:text-bone" href="/privacy">Privacy</Link>
          <Link className="transition-colors hover:text-bone" href="/terms">Terms</Link>
        </nav>
        <p className="mt-2 text-xs text-bone/40">
          Copyright {BRAND.name}. All rights reserved. This site is a demo; hiring terms are placeholders.
        </p>
      </div>
    </footer>
  );
}