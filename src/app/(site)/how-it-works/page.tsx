import { ContentPage } from "@/components/site/content-page";

const steps = [["01", "Tell us what fits", "Share the route, home-time, and employment questions that matter to you."], ["02", "Review the next step", "We explain whether the opportunity uses the existing W-2 application or a recruiter-assisted 1099 intake."], ["03", "Continue with clarity", "You choose whether to continue. The hiring carrier makes the final employment decision."]];

export default function HowItWorksPage() {
  return <ContentPage eyebrow="How it works" title="A clearer route from question to next step." intro="TTI helps drivers understand an opportunity before they commit to the wrong process. The goal is a useful handoff, not a rushed form."><div className="info-step-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</div><div className="info-callout"><strong>Recruiting is not employment.</strong><span>TTI can help explain the opportunity and route you to the right process. The carrier makes the final hiring decision.</span></div></ContentPage>;
}
