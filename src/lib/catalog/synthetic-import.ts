import type { ImportPreview, ImportRecordResult } from "./import-contract";
import { COMPANY_SHEET_SOURCE } from "./import-contract";

/** Development-only records used to exercise the import review contract. */
export const SYNTHETIC_IMPORT_RECORDS: ImportRecordResult[] = [
  { sourceRow: "fixture-001", action: "create", companyId: null, changedFields: ["displayName", "offers"], reason: "New synthetic development record." },
  { sourceRow: "fixture-002", action: "unchanged", companyId: "fixture-company-002", changedFields: [], reason: "Synthetic record matches the last imported snapshot." },
  { sourceRow: "fixture-003", action: "conflict", companyId: "fixture-company-003", changedFields: ["homeTime"], reason: "Synthetic source value differs from a local override." },
  { sourceRow: "fixture-004", action: "quarantine", companyId: null, changedFields: [], reason: "Synthetic record lacks enough information for safe mapping." },
];

export function createSyntheticImportPreview(): ImportPreview {
  return {
    sourceWorkbookId: COMPANY_SHEET_SOURCE.workbookId,
    sourceGid: COMPANY_SHEET_SOURCE.gid,
    sourceHash: "synthetic-fixture-only",
    mappingVersion: "fixture-v1",
    fetchedAt: "synthetic-development-time",
    records: SYNTHETIC_IMPORT_RECORDS,
    knownGoodCatalogRetained: true,
  };
}

export function summarizeImport(preview: ImportPreview) {
  return preview.records.reduce<Record<ImportRecordResult["action"], number>>((summary, record) => {
    summary[record.action] += 1;
    return summary;
  }, { create: 0, update: 0, unchanged: 0, conflict: 0, quarantine: 0 });
}
