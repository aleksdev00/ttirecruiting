import { randomBytes } from "node:crypto";

const SUFFIX_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

function formatSubmissionDate(now: Date): string {
  return now.toISOString().slice(0, 10).replaceAll("-", "");
}

function randomSuffix(): string {
  let value = randomBytes(4).readUInt32BE(0);
  let suffix = "";
  for (let index = 0; index < 4; index += 1) {
    suffix += SUFFIX_ALPHABET[value & 31];
    value >>>= 5;
  }
  return suffix;
}

export function generateQuickApplySubmissionId(
  now: Date = new Date(),
): string {
  return `QA-${formatSubmissionDate(now)}-${randomSuffix()}`;
}