import Link from "next/link";
import { BRAND } from "@/lib/brand";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function ContentPage({ eyebrow, title, intro, children }: ContentPageProps) {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="border-b border-[var(--ink)]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="font-[var(--vd-display)] text-xl tracking-wide" aria-label="TTI Recruiting home">
            {BRAND.name}
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold" aria-label="Primary navigation">
            <Link href="/jobs" className="hover:text-[var(--signal-deep)]">Jobs</Link>
            <Link href="/how-it-works" className="hidden sm:inline hover:text-[var(--signal-deep)]">How it works</Link>
            <Link href="/contact" className="rounded-full bg-[var(--signal-deep)] px-4 py-2 text-white hover:bg-[var(--hazard-strong)]">Talk with a recruiter</Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <Link href="/" className="text-sm font-semibold text-[var(--ink-muted)] hover:text-[var(--signal-deep)]">← Back to TTI Recruiting</Link>
        <p className="mt-10 font-[var(--vd-ledger)] text-xs uppercase tracking-[0.2em] text-[var(--signal-deep)]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-[var(--vd-display)] text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">{intro}</p>
        <div className="mt-12 max-w-4xl space-y-8">{children}</div>
      </div>
      <footer className="border-t border-[var(--ink)]/15 px-5 py-8 text-sm text-[var(--ink-muted)] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>{BRAND.name} · {BRAND.tagline}</span>
          <div className="flex gap-4"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div>
        </div>
      </footer>
    </main>
  );
}
