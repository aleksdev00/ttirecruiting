"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function V3SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const menuId = "v3-menu";
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const prevActive = document.activeElement as HTMLElement | null;
    (
      document
        .getElementById(menuId)
        ?.querySelector("a[href]") as HTMLElement | null
    )?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (panelRef.current?.contains(e.target as Node)) return;
      if (toggleRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      if (prevActive?.isConnected) prevActive.focus();
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper text-ink">
      <nav
        className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-3"
          aria-label={BRAND.name + " - home"}
        >
          <span className="block h-4 w-2 bg-signal-deep" aria-hidden="true" />
          <span className="font-display text-2xl uppercase leading-none tracking-tight">
            {BRAND.shortName}
          </span>
          <span className="hidden font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint sm:inline">
            Recruiting
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "font-ledger text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors hover:text-signal-deep " +
                (isActive(l.href, pathname)
                  ? "text-signal-deep"
                  : "text-ink-faint")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          ref={toggleRef}
          className="flex h-11 w-11 items-center justify-center font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "X" : "Menu"}
        </button>

        <div className="v3-progress" aria-hidden="true" />
      </nav>

      {open && (
        <div
          id={menuId}
          ref={panelRef}
          className="border-t border-ink/15 bg-paper px-4 pb-6 pt-2 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={
                  "px-3 py-3 font-ledger text-sm font-semibold uppercase tracking-[0.2em] " +
                  (isActive(l.href, pathname)
                    ? "text-signal-deep"
                    : "text-ink-muted hover:text-ink")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
