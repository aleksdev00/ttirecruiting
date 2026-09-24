import Link from "next/link";
import { BRAND } from "@/lib/jobs";
import { CONTACT_EMAIL } from "@/lib/site";

export function V3Footer() {
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
              CDL driver placement out of {BRAND.address.city}, {BRAND.address.state}. {BRAND.region}.
            </p>
          </div>

          <nav aria-label="Columns">
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/#quick-apply", label: "Quick apply" },
                { href: "/jobs", label: "Jobs" },
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
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
              Wire the yard
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink-muted">
              {BRAND.address.line1}
              <br />
              {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
            </address>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex min-h-11 items-center font-ledger text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-signal-deep"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
              Placard
            </p>
            <p className="mt-4 font-ledger text-xs leading-relaxed text-ink-muted">
              {BRAND.dot.split(" (placeholder")[0]}
              <br />
              {BRAND.mc.split(" (placeholder")[0]}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-faint">
              DOT and MC figures pending confirmation before publishing.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/15 pt-5 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {BRAND.name}. All rights reserved.</p>
          <p className="text-ink-faint">
            Pay, miles, home time, and DOT/MC figures shown here are
            placeholders pending verified hiring terms.
          </p>
        </div>
      </div>

      <div className="h-2 w-full bg-signal-deep" aria-hidden="true" />
    </footer>
  );
}