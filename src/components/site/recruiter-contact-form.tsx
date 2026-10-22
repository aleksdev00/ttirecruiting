"use client";

import { useState } from "react";
import { QuickApplyClientSchema, type QuickApplyClientValues } from "@/lib/quick-apply/schema";

const initialValues: QuickApplyClientValues = { firstName: "", lastName: "", phone: "", sap: "No", sapStatus: undefined, employmentPreference: "Company", payType: "W2", contactConsent: false };

export function RecruiterContactForm() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const update = (key: keyof QuickApplyClientValues, value: string | boolean) => setValues((current) => ({ ...current, [key]: value }));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = QuickApplyClientSchema.safeParse(values);
    if (!parsed.success) { setState("error"); setMessage(parsed.error.issues[0]?.message ?? "Check the highlighted details."); return; }
    setState("submitting"); setMessage("");
    try {
      const response = await fetch("/api/quick-apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, termsAccepted: true, privacyAccepted: true }) });
      const body = await response.json().catch(() => null) as { message?: string } | null;
      if (!response.ok) throw new Error(body?.message ?? "Your request could not be delivered.");
      setState("success"); setMessage("Your conversation request was saved for the next configured delivery step.");
    } catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "Network error. Try again."); }
  }

  return <form className="recruiter-form" onSubmit={submit} noValidate aria-describedby="recruiter-form-status"><div className="recruiter-form-grid"><label>First name<input required autoComplete="given-name" value={values.firstName} onChange={(event) => update("firstName", event.target.value)} /></label><label>Last name<input required autoComplete="family-name" value={values.lastName} onChange={(event) => update("lastName", event.target.value)} /></label></div><label>Phone number<input required inputMode="tel" autoComplete="tel" placeholder="(555) 555-5555" value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label><fieldset><legend>How do you want to work?</legend><div className="recruiter-choice-grid"><label><input type="radio" name="employment" checked={values.employmentPreference === "Company"} onChange={() => update("employmentPreference", "Company")} /> Company</label><label><input type="radio" name="employment" checked={values.employmentPreference === "Lease"} onChange={() => update("employmentPreference", "Lease")} /> Lease</label></div></fieldset><fieldset><legend>Which path are you asking about?</legend><div className="recruiter-choice-grid"><label><input type="radio" name="pay" checked={values.payType === "W2"} onChange={() => update("payType", "W2")} /> W-2</label><label><input type="radio" name="pay" checked={values.payType === "1099"} onChange={() => update("payType", "1099")} /> 1099</label></div></fieldset><label className="recruiter-checkbox"><input type="checkbox" checked={values.contactConsent} onChange={(event) => update("contactConsent", event.target.checked)} /> <span>I agree that TTI Recruiting may contact me about a potential driving opportunity. This is not a job offer or completed application.</span></label>{message ? <p id="recruiter-form-status" className={`recruiter-form-message recruiter-form-message-${state}`} role={state === "error" ? "alert" : "status"}>{message}</p> : <p id="recruiter-form-status" className="recruiter-form-help">Do not upload CDL or medical documents here.</p>}<button className="marketing-button marketing-button-primary" disabled={state === "submitting"} type="submit">{state === "submitting" ? "Sending…" : state === "success" ? "Request sent" : "Start the conversation"}</button></form>;
}
