import { SITE, SITE_URL } from "@/lib/site";
import V3Home from "@/components/site/v3-home";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: SITE_URL,
  slogan: SITE.tagline,
};

const webJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function Home() {
  return (
    <>
      <V3Home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webJsonLd) }}
      />
    </>
  );
}