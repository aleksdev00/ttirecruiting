import Link from "next/link";

export default function SiteNotFound() {
  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-16 sm:px-6 lg:px-10 lg:pt-20">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          404 / Lost
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
          Wrong exit,{" "}
          <span className="text-signal-deep">driver.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          That page pulled off the grid. Here is the way back to the terminal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="inline-flex h-12 items-center justify-center border border-ink/40 px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Open lanes
          </Link>
        </div>
      </div>
    </div>
  );
}