export type EmploymentClassification = "W2" | "1099" | "unknown";
export type PublicationStatus = "draft" | "published" | "unpublished" | "archived";

export type Company = {
  id: string;
  displayName: string;
  status: PublicationStatus;
  sourceKey: string | null;
  sourceVersion: string | null;
  archiveSuppressed: boolean;
  version: number;
  updatedAt: string;
};

export type Offer = {
  id: string;
  companyId: string;
  slug: string;
  role: string;
  driverType: string;
  employmentClassification: EmploymentClassification;
  hiringArea: string | null;
  payAmount: number | null;
  payUnit: string | null;
  payBasis: string | null;
  homeTime: string | null;
  minimumExperienceMonths: number | null;
  trailer: string | null;
  materialConditions: string[];
  status: PublicationStatus;
  reviewedAt: string | null;
  nextReviewAt: string | null;
  version: number;
};

export type PublicOffer = Pick<
  Offer,
  | "id"
  | "companyId"
  | "slug"
  | "role"
  | "driverType"
  | "employmentClassification"
  | "hiringArea"
  | "payAmount"
  | "payUnit"
  | "payBasis"
  | "homeTime"
  | "minimumExperienceMonths"
  | "trailer"
  | "materialConditions"
  | "reviewedAt"
  | "nextReviewAt"
>;

export function toPublicOffer(offer: Offer): PublicOffer | null {
  if (offer.status !== "published") return null;

  return {
    id: offer.id,
    companyId: offer.companyId,
    slug: offer.slug,
    role: offer.role,
    driverType: offer.driverType,
    employmentClassification: offer.employmentClassification,
    hiringArea: offer.hiringArea,
    payAmount: offer.payAmount,
    payUnit: offer.payUnit,
    payBasis: offer.payBasis,
    homeTime: offer.homeTime,
    minimumExperienceMonths: offer.minimumExperienceMonths,
    trailer: offer.trailer,
    materialConditions: offer.materialConditions,
    reviewedAt: offer.reviewedAt,
    nextReviewAt: offer.nextReviewAt,
  };
}

