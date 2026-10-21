import { ContentPage } from "@/components/site/content-page";

const questions = [
  ["Is TTI the hiring carrier?", "No. TTI Recruiting helps with recruiting and the next step. The hiring carrier makes the final employment decision."],
  ["Is a contact request an application?", "No. It is a request for a conversation. A completed application happens only in the authoritative application process."],
  ["How does the 1099 path work?", "A recruiter-assisted intake explains the process and required information. This public site does not collect CDL or medical documents."],
  ["What if I do not see a match?", "The catalog may be empty or not yet refreshed. Contact a recruiter rather than assuming that no current option exists."],
];

export default function FaqPage() {
  return <ContentPage eyebrow="Questions" title="The answers before you apply." intro="If your situation is specific, contact a recruiter so the next step can be explained accurately.">
    <div className="space-y-3">{questions.map(([question, answer]) => <details key={question} className="border-b border-[var(--ink)]/15 py-5"><summary className="cursor-pointer text-lg font-bold">{question}</summary><p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">{answer}</p></details>)}</div>
  </ContentPage>;
}

