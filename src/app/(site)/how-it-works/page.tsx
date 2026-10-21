import { ContentPage } from "@/components/site/content-page";

const steps = [
  ["01", "Tell us what fits", "Share the route, home-time, and employment questions that matter to you."],
  ["02", "Review the next step", "We explain whether the opportunity uses the existing W-2 application or a recruiter-assisted 1099 intake."],
  ["03", "Continue with clarity", "You choose whether to continue. The hiring carrier makes the final employment decision."],
];

export default function HowItWorksPage() {
  return <ContentPage eyebrow="The process" title="A clear route from question to next step." intro="TTI Recruiting helps drivers understand an opportunity before they commit to the wrong process.">
    <div className="grid gap-5 md:grid-cols-3">{steps.map(([number, title, copy]) => <article key={number} className="border-t-4 border-[var(--signal-deep)] bg-white/60 p-6"><span className="font-[var(--vd-ledger)] text-xs text-[var(--signal-deep)]">{number}</span><h2 className="mt-6 text-2xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[var(--ink-muted)]">{copy}</p></article>)}</div>
  </ContentPage>;
}

