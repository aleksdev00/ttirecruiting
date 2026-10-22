import type { PublicOffer } from "./types";

export type PublicCatalogState =
  | { status: "available"; offers: PublicOffer[]; reviewedAt: string | null }
  | { status: "unavailable"; offers: []; reviewedAt: null; reason: "SOURCE_NOT_VERIFIED" | "CATALOG_NOT_CONFIGURED" };

/** Safe default until an approved catalog repository is connected. */
export function unavailablePublicCatalog(): PublicCatalogState {
  return { status: "unavailable", offers: [], reviewedAt: null, reason: "CATALOG_NOT_CONFIGURED" };
}
