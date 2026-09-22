import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-10">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          404 / Lost
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
          Wrong exit,{" "}
          <span className="text-signal-deep">driver.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          That page pulled off the grid. Here is the way back to the terminal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}