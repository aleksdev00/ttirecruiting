/* SITE MOBILE NAV - client sheet. ASCII only. */
"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/jobs";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteMobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <span className="text-lg leading-none">=</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-base">{BRAND.shortName}</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className="text-base font-medium text-ink-700 hover:text-hazard">
              {l.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-2 bg-hazard text-white hover:bg-hazard-strong">
            <Link href="/quiz" onClick={close}>Find Your Fit</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}