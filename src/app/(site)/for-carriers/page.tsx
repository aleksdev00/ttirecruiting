import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";

export default function ForCarriersPage() {
  return <ContentPage eyebrow="For carriers" title="Discuss recruiting support." intro="This page is for carrier conversations, not driver applications. Share a business inquiry and identify your role clearly."><div className="carrier-card"><span className="marketing-label">Carrier conversation</span><h2>Keep the conversation specific.</h2><p>We are keeping carrier-specific claims, partner lists, and performance numbers private until they are approved and current. Start with the kind of recruiting support you want to discuss.</p><Link className="marketing-button marketing-button-primary" href="/contact?type=carrier">Contact TTI <span aria-hidden>↗</span></Link></div></ContentPage>;
}
