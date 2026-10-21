# Sheet field map and import status

## Live source status

The declared source is workbook `1wC_EScBRSJOqfS3KFlFlargOlTNT65cOJOhDzEGQ-TE`, selected gid `1480331144`. The Sheet could not be fetched from this session, so headers, row count, worksheet title, formulas, stable keys, and actual values remain **not verified**. This file intentionally does not infer a column mapping.

## Required mapping once access is available

| Source evidence | Internal target | Transformation | Quarantine condition |
| --- | --- | --- | --- |
| Actual stable source key | `Company.sourceKey` / `Offer` provenance | Preserve exactly | Missing or duplicate key |
| Actual company identifier | `Company.displayName` | Trim and retain source value | Missing/ambiguous company |
| Actual opportunity row | `Offer` | One company may map to many offers | Cannot distinguish offers |
| Actual classification | `Offer.employmentClassification` | Map only verified W-2/1099 values | Unknown/contradictory |
| Actual pay + unit/basis | `Offer.payAmount`, `payUnit`, `payBasis` | Preserve unit and material conditions | Malformed or basis missing |
| Actual home time/area/experience | Typed offer fields | Normalize only documented values | Ambiguous or blank where publication requires it |

Import preview must report create/update/unchanged/conflict/quarantine counts, source hash, mapping version, changed fields, and whether the last known-good public catalog was retained. Empty, failed, malformed, or wrong-tab fetches must not erase the catalog. This is a contract and blocker record, not evidence of a successful live import.
