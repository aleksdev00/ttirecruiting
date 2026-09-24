/*
 * QUICK APPLY -- lead form configuration.
 * The Quick Apply form is a short lead/qualification form, NOT the full
 * application. Leads are delivered to TTI recruiting's email workflow.
 */

export const QUICK_APPLY_DESTINATION_EMAIL =
  process.env.QUICK_APPLY_TO_EMAIL ?? "tticdlrecruiting@gmail.com";