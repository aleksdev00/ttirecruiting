/*
 * APPLICATIONS -- repository seam + domain types for the apply flow.
 * -----------------------------------------
 * Kept entirely decoupled from UI. The UI submits a validated
 * ApplicationSubmission via applicationRepository.submit(). The default
 * implementation is a placeholder (dev) adapter that logs the submission
 * and returns a reference; swap for Supabase without touching call sites.
 *
 * ASCII only (repo policy).
 */

import type { ApplyFormValues } from "@/lib/apply-schema";

export type ApplicationSubmission = {
  jobSlug: string;
  payload: ApplyFormValues;
  submittedAt: string;
};

export interface ApplicationRepository {
  submit(input: Omit<ApplicationSubmission, "submittedAt">): Promise<{ id: string; received: boolean }>;
  listRecent(limit?: number): Promise<ApplicationSubmission[]>;
}

const STORE_KEY = "tti.applications";

function readStore(): ApplicationSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    return raw ? (JSON.parse(raw) as ApplicationSubmission[]) : [];
  } catch {
    return [];
  }
}

function persistStore(entries: ApplicationSubmission[]) {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(entries));
  } catch {
    // ignore quota/private-mode write failures
  }
}

/**
 * Default placeholder repository. Runs in the browser and persists to
 * localStorage so the flow is fully functional in the demo. Confirmed
 * consents are recorded alongside the submission.
 *
 * NOTE (pre-launch): this is NOT a real submission backend. Replace with
 * a server/client that writes to a verified CRM or database before any
 * real driver data flows through.
 */
export const applicationRepository: ApplicationRepository = {
  async submit(input) {
    const entries = readStore();
    const stamp = new Date().toISOString();
    const record: ApplicationSubmission = { ...input, submittedAt: stamp };
    const id = `APP-${Date.now().toString(36).toUpperCase()}`;
    persistStore([...entries, record]);
    return { id, received: true };
  },
  async listRecent(limit = 20) {
    return readStore().slice(-limit).reverse();
  },
};