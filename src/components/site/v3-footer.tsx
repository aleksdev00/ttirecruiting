"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/brand";

export function V3Footer() {
  const pathname = usePathname();

  if (["/", "/jobs", "/apply", "/faq", "/for-carriers", "/how-it-works"].includes(pathname) || pathname.startsWith("/jobs/")) {
    return null;
  }

  return (
    <footer className="border-t border-ink/15 bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="flex items-baseline gap-3">
              <span className="block h-4 w-2 bg-signal-deep" aria-hidden="true" />
              <span className="font-display text-3xl uppercase leading-none">
                {BRAND.shortName}
              </span>
            </p>
            <p className="mt-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-faint">
              {BRAND.tagline}
            </p>
            <p className="mt-6 max-w-[26ch] text-sm leading-relaxed text-ink-muted">
              CDL driver recruiting and matching conversations for drivers exploring their next opportunity.
            </p>
          </div>

          <nav aria-label="Columns">
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/#quick-apply", label: "Quick apply" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 items-center font-ledger text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-signal-deep"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">Recruiting flow</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Quick Apply, recruiter review, contact, matching discussion, then
              the full application when appropriate.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/15 pt-5 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {BRAND.name}. All rights reserved.</p>
          <p className="text-ink-faint">
            TTI Recruiting is not the employing carrier. Hiring details come
            from the relevant carrier after a verified match.
          </p>
        </div>
      </div>

      <div className="h-2 w-full bg-signal-deep" aria-hidden="true" />
    </footer>
  );
}
