"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, QUIZ_PATHS } from "@/lib/jobs";
import { Button } from "@/components/ui/button";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-bone/15 bg-ink text-bone">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10" aria-label="Primary">
        <Link href="/" className="group flex items-baseline gap-4" aria-label={BRAND.name + " - home"}>
          <span className="flex h-5 w-1.5 -skew-x-12 bg-hazard" aria-hidden="true" />
          <span className="font-sans text-2xl font-black uppercase tracking-tight transition-colors group-hover:text-hazard">
            {BRAND.shortName}
          </span>
          <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-bone/45 sm:inline">
            Recruiting
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "relative font-mono text-xs font-bold uppercase tracking-[0.22em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-hazard after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 " +
                (pathname === l.href ? "text-hazard" : "text-bone/60 hover:text-bone")
              }
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="h-9 rounded-none px-5 font-sans text-xs font-black uppercase tracking-[0.18em] bg-hazard text-ink hover:bg-hazard-strong hover:text-ink"
          >
            <Link href={QUIZ_PATHS.start}>Find Your Fit</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center font-mono text-sm font-bold text-bone md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "X" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-bone/15 bg-ink px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={
                  "px-3 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] " +
                  (pathname === l.href ? "text-hazard" : "text-bone/75 hover:text-bone")
                }
              >
                {l.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 h-11 rounded-none px-5 font-sans text-xs font-black uppercase tracking-[0.18em] bg-hazard text-ink hover:bg-hazard-strong hover:text-ink"
            >
              <Link href={QUIZ_PATHS.start} onClick={() => setOpen(false)}>
                Find Your Fit
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}