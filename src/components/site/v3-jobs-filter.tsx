"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { DRIVING_TYPES, EQUIPMENT_OPTIONS } from "@/lib/jobs";

export function JobsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [type, setType] = React.useState(searchParams.get("type") ?? "");
  const [eq, setEq] = React.useState(searchParams.get("eq") ?? "");
  const [q, setQ] = React.useState(searchParams.get("q") ?? "");

  const update = (patch: { type?: string; eq?: string; q?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    const next = { ...{ type, eq, q }, ...patch };
    for (const [key, value] of Object.entries(next)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const reset = () => {
    setType("");
    setEq("");
    setQ("");
    router.replace(pathname, { scroll: false });
  };

  const hasActive =
    Boolean(type) || Boolean(eq) || Boolean(q);

  return (
    <div className="border-y border-ink/20 bg-paper-deep">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-end gap-4 px-4 py-5 sm:px-6 lg:px-10">
        <label className="flex flex-col gap-1.5">
          <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
            Lane
          </span>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              update({ type: e.target.value });
            }}
            className="h-10 min-w-40 border border-ink/30 bg-paper px-3 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink"
          >
            <option value="">All lanes</option>
            {DRIVING_TYPES.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
            Equipment
          </span>
          <select
            value={eq}
            onChange={(e) => {
              setEq(e.target.value);
              update({ eq: e.target.value });
            }}
            className="h-10 min-w-40 border border-ink/30 bg-paper px-3 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink"
          >
            <option value="">All equipment</option>
            {EQUIPMENT_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="jobs-q"
            className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint"
          >
            Search
          </label>
          <div className="flex h-10 border border-ink/30 bg-paper">
            <input
              id="jobs-q"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onBlur={() => update({ q })}
              onKeyDown={(e) => {
                if (e.key === "Enter") update({ q });
              }}
              placeholder="Keywords..."
              className="w-full min-w-40 bg-transparent px-3 font-ledger text-xs font-semibold uppercase tracking-[0.18em] text-ink placeholder:text-ink-faint"
            />
            <button
              type="button"
              onClick={() => update({ q })}
              className="border-l border-ink/30 px-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Go
            </button>
          </div>
        </div>

        {hasActive ? (
          <button
            type="button"
            onClick={reset}
            className="h-10 px-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-signal-deep transition-colors hover:text-ink"
          >
            Clear filters
          </button>
        ) : null}
      </div>
    </div>
  );
}