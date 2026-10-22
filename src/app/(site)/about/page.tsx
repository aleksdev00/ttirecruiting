import type { Metadata } from "next";
import { ContentPage } from "@/components/site/content-page";

export const metadata: Metadata = { title: "About", description: "Learn how TTI Recruiting helps CDL drivers understand their next opportunity.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <ContentPage eyebrow="About TTI" title="Recruiting with the driver in mind." intro="TTI Recruiting helps CDL-A drivers have clearer conversations about route, home time, experience, and the right application path."><div className="about-grid"><section><span className="marketing-label">What we do</span><h2>We make the handoff easier to understand.</h2><p>We listen for the kind of work you want, explain the opportunity as it is currently verified, and help you take the next step without confusing a contact request with a completed application.</p></section><section className="about-facts"><div><strong>Recruiter</strong><span>TTI helps coordinate the conversation.</span></div><div><strong>Carrier</strong><span>The hiring carrier makes the final decision.</span></div><div><strong>Driver</strong><span>You choose whether the path fits.</span></div></section></div><div className="info-callout"><strong>Accuracy over urgency.</strong><span>When a job detail is not verified, we keep it out of the public catalog.</span></div></ContentPage>;
}
