export default function SiteLoading() {
  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-24 pt-16 sm:px-6 lg:px-10 lg:pt-20">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          The dispatch
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
          Loading<span className="text-signal-deep">.</span>
        </h1>
        <div className="mt-8 h-px w-full max-w-xs bg-ink/15">
          <div className="h-px w-1/3 animate-pulse bg-signal-deep" />
        </div>
      </div>
    </div>
  );
}