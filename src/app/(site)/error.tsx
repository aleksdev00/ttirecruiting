"use client";

export default function SiteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-16 sm:px-6 lg:px-10 lg:pt-20">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          Dispatch fault
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
          That page is{" "}
          <span className="text-signal-deep">down.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Something went wrong while loading this page. Try again, or head
          back to safety.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-12 items-center justify-center bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
