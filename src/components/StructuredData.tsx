/**
 * Renders JSON-LD structured data for SEO. Use in layouts; pass page to get the right schemas.
 * All data is real and matches site content (no simulated data).
 */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pulsewholehealth.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allyson Norton",
  jobTitle: "Physician Assistant",
  description:
    "Board-Certified Physician Assistant and Functional Medicine Specialist who founded Pulse Whole Health. Combines evidence-based medications with functional medicine principles, with a focus on gut health and root cause analysis.",
  url: `${BASE_URL}/About`,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Pulse Whole Health",
    url: BASE_URL,
  },
};

function breadcrumbSchema(path: string, pathName: string) {
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: pathName,
      item: `${BASE_URL}${path}`,
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Integrative Care",
      description:
        "Blends conventional medicine with functional medicine to find the root cause of chronic conditions (e.g. diabetes, high blood pressure, obesity, gut issues) and create a treatment plan centered around natural solutions. Comprehensive patient-centered care including lifestyle, diet, exercise, environmental exposures, and genetics.",
      provider: { "@type": "MedicalOrganization", name: "Pulse Whole Health", url: BASE_URL },
    },
    {
      "@type": "Service",
      name: "Preventative Care",
      description:
        "Proactive health planning: analyze lifestyle habits including diet, exercise, and stressors to create a personalized wellness plan to prevent chronic disease and maintain optimal health. Includes personalized nutrition planning and custom workout planning with NASM Certified Personal Trainer support.",
      provider: { "@type": "MedicalOrganization", name: "Pulse Whole Health", url: BASE_URL },
    },
  ],
};

type PageType = "home" | "about" | "services" | "consult";

export default function StructuredData({ page }: { page: PageType }) {
  const schemas: object[] = [];

  switch (page) {
    case "home":
      break;
    case "about":
      schemas.push(personSchema, breadcrumbSchema("/About", "About Us"));
      break;
    case "services":
      schemas.push(servicesSchema, breadcrumbSchema("/services", "Our Services"));
      break;
    case "consult":
      schemas.push(breadcrumbSchema("/consult-booking", "Book a Consultation"));
      break;
    default:
      break;
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
