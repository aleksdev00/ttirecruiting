import Link from "next/link";

type ContentPageProps = { eyebrow: string; title: string; intro: string; children: React.ReactNode };

export function ContentPage({ eyebrow, title, intro, children }: ContentPageProps) {
  return <main className="marketing-content-page"><div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20"><Link href="/" className="text-sm font-semibold text-[var(--m-blue)]">← Back to TTI Recruiting</Link><p className="mt-10 font-[var(--vd-ledger)] text-xs uppercase tracking-[0.2em] text-[var(--m-blue)]">{eyebrow}</p><h1 className="mt-4 max-w-4xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--m-muted)]">{intro}</p><div className="mt-12 max-w-4xl space-y-8">{children}</div></div></main>;
}
