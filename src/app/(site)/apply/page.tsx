import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";
import { FULL_APPLICATION_URL } from "@/lib/site";

export default function ApplyPage() {
  return <ContentPage eyebrow="Choose your path" title="Start with the right application." intro="W-2 and 1099 are different journeys. TTI helps you understand which one fits the opportunity before you share sensitive information.">
    <div className="application-paths">
      <article className="application-path application-path-primary"><span className="application-path-code">W-2 / EXISTING APPLICATION</span><h2>Continue to the carrier’s application</h2><p>Use the existing driver application when a confirmed opportunity follows the W-2 path. This link starts a handoff; it is not a completed application or an offer.</p><a className="marketing-button marketing-button-primary" href={FULL_APPLICATION_URL}>Continue to W-2 application <span aria-hidden>↗</span></a></article>
      <article className="application-path"><span className="application-path-code">1099 / RECRUITER-ASSISTED</span><h2>Talk through the process first</h2><p>A recruiter explains the required information and next steps. This public site does not collect CDL or medical documents for 1099 intake.</p><Link className="marketing-button marketing-button-secondary" href="/contact?type=1099">Talk through 1099 work <span aria-hidden>↗</span></Link></article>
    </div>
    <div className="application-note"><strong>Not sure which path applies?</strong><span>Start with a recruiter conversation. TTI is the intermediary; the hiring carrier makes the final employment decision.</span><Link href="/contact">Ask a question →</Link></div>
  </ContentPage>;
}
