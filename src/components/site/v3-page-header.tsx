import type { ReactNode } from "react";

export function V3PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-10 sm:px-6 lg:px-10 lg:pt-14">
      <div className="flex items-center justify-between border-y border-ink/20 py-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
        <p>The Dispatch</p>
        <p className="hidden sm:inline">Hiring desk</p>
        <p>Kansas City, MO</p>
      </div>
      <p className="mt-8 font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
        {kicker}
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{lede}</p>
      ) : null}
    </div>
  );
}