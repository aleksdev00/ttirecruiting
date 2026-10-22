import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation with TTI Recruiting about your CDL recruiting path.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact | TTI Recruiting", description: "Start a conversation with TTI Recruiting about your CDL recruiting path.", url: `${SITE_URL}/contact`, type: "website" } };

export default function ContactPage() {
  return <ContentPage eyebrow="Talk with a recruiter" title="Bring your questions." intro="Tell us what kind of work you are considering. A contact request starts a conversation; it is not a completed job application.">
    <div className="contact-layout"><section className="contact-card contact-card-primary"><span className="marketing-label">Driver conversation</span><h2>Start with what fits your life.</h2><p>Share the route, home-time, experience, and application questions that matter to you. We’ll help identify the right next step.</p><Link className="marketing-button marketing-button-primary" href="/#finder-title">Start with the finder <span aria-hidden>↗</span></Link></section><section className="contact-card"><span className="marketing-label">Before you continue</span><h2>Know who is making the decision.</h2><p>TTI Recruiting is the intermediary, not the employing carrier. Any hiring details and final employment decision come from the relevant carrier.</p><div className="contact-links"><Link href="/jobs">Browse opportunities →</Link><Link href="/apply">See application paths →</Link></div></section></div>
  </ContentPage>;
}
