import type { ImportRecordResult } from "./import-contract";

export type ConflictValue = {
  field: string;
  sourceValue: string | null;
  localValue: string | null;
  lastImportedValue: string | null;
};

export type ConflictResolution = "keep-local" | "use-source" | "quarantine";

export type ResolvedConflict = ConflictValue & {
  resolution: ConflictResolution;
};

/**
 * A source row disappearing or changing is not permission to erase a public
 * record. The import UI must make the choice explicit and preserve provenance.
 */
export function resolveConflict(
  conflict: ConflictValue,
  resolution: ConflictResolution,
): ResolvedConflict {
  return { ...conflict, resolution };
}

export function conflictReason(record: ImportRecordResult): string {
  if (record.action !== "conflict") return "No conflict requires review.";
  return record.reason || "Source and local catalog values differ.";
}
