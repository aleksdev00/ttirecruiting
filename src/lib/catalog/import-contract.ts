import type { Company, Offer } from "./types";

export type ImportRecordAction = "create" | "update" | "unchanged" | "conflict" | "quarantine";

export type ImportRecordResult = {
  sourceRow: string;
  action: ImportRecordAction;
  companyId: string | null;
  changedFields: string[];
  reason: string;
};

export type ImportPreview = {
  sourceWorkbookId: string;
  sourceGid: string;
  sourceHash: string;
  mappingVersion: string;
  fetchedAt: string;
  records: ImportRecordResult[];
  knownGoodCatalogRetained: boolean;
};

export type CatalogRepository = {
  listPublishedOffers(): Promise<Offer[]>;
  saveCompany(company: Company, expectedVersion: number | null): Promise<Company>;
  saveOffer(offer: Offer, expectedVersion: number | null): Promise<Offer>;
  previewImport(): Promise<ImportPreview>;
  applyImport(preview: ImportPreview): Promise<ImportPreview>;
};

export const COMPANY_SHEET_SOURCE = {
  workbookId: "1wC_EScBRSJOqfS3KFlFlargOlTNT65cOJOhDzEGQ-TE",
  gid: "1480331144",
  mode: "controlled-read-only-import",
  writebackAuthorized: false,
} as const;

