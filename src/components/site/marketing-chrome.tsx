"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MarketingChrome() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return <>
    <header className="marketing-header"><Link className="marketing-brand" href="/" aria-label="TTI Recruiting home"><span className="marketing-brand-mark">TTI</span><span className="marketing-brand-name">Recruiting</span></Link><nav className="marketing-nav" aria-label="Main navigation"><Link href="/jobs">Find a job</Link><Link href="/how-it-works">How it works</Link><Link href="/faq">Questions</Link><Link className="marketing-nav-action" href="/contact">Talk with a recruiter <span aria-hidden>↗</span></Link></nav><details className="marketing-mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation"><Link href="/jobs">Find a job</Link><Link href="/how-it-works">How it works</Link><Link href="/faq">Questions</Link><Link href="/contact">Talk with a recruiter</Link></nav></details></header>
    <footer className="marketing-footer"><div><Link className="marketing-brand" href="/"><span className="marketing-brand-mark">TTI</span><span className="marketing-brand-name">Recruiting</span></Link><p>Clearer recruiting conversations for CDL-A drivers.</p></div><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/for-carriers">For carriers</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav><p className="marketing-footer-note">TTI Recruiting is not the employing carrier.</p></footer>
  </>;
}
