/**
 * Renders JSON-LD structured data for SEO. Use in layouts; pass page to get the
 * right schemas. All data is real and matches visible site content.
 */
import { FAQS } from "@/lib/faqs";
import {
  SITE_URL,
  SERVICE_STATE,
  SERVICE_STATE_CODE,
  ORGANIZATION_ID,
} from "@/lib/site";

const allysonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allyson Norton",
  honorificSuffix: "PA-C",
  jobTitle: "Physician Assistant",
  description:
    "Board-certified Physician Assistant and Integrative Medicine specialist who founded Pulse Whole Health. Combines evidence-based medicine with functional medicine principles, focusing on gut health, hormone health, and root cause analysis for patients across Pennsylvania.",
  url: `${SITE_URL}/About`,
  knowsAbout: [
    "Integrative medicine",
    "Functional medicine",
    "Gut health",
    "Hormone health",
    "Metabolic health",
    "Preventive medicine",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `${SERVICE_STATE} Physician Assistant License MA065203`,
      recognizedBy: {
        "@type": "Organization",
        name: "Pennsylvania State Board of Medicine",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Physician Assistant Studies",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Florida" },
    },
  ],
  worksFor: { "@id": ORGANIZATION_ID },
};

const marxSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "David G. Marx, MD",
  honorificPrefix: "Dr.",
  jobTitle: "Medical Director",
  description:
    "Medical Director of Pulse Whole Health, providing physician oversight and collaboration in support of Allyson Norton, PA-C. More than 30 years of experience in Family and Emergency Medicine with advanced training in Integrative and Functional Medicine.",
  url: `${SITE_URL}/About`,
  image: `${SITE_URL}/Dr Marx.png`,
  medicalSpecialty: [
    "Emergency medicine",
    "Family medicine",
    "Integrative medicine",
    "Functional medicine",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: `Licensed Physician, Commonwealth of ${SERVICE_STATE}`,
    recognizedBy: {
      "@type": "Organization",
      name: "Pennsylvania State Board of Medicine",
    },
  },
  worksFor: { "@id": ORGANIZATION_ID },
};

/** Built from the same FAQ source the About page renders, so the two cannot drift. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function breadcrumbSchema(path: string, pathName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pathName, item: `${SITE_URL}${path}` },
    ],
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
        "Blends conventional medicine with functional medicine to find the root cause of chronic conditions such as diabetes, high blood pressure, obesity, and gut issues, and to build a treatment plan centered on natural solutions. Includes lifestyle, diet, exercise, environmental exposure, and genetic evaluation.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "State", name: SERVICE_STATE, alternateName: SERVICE_STATE_CODE },
    },
    {
      "@type": "Service",
      name: "Preventative Care",
      description:
        "Proactive health planning: analysis of lifestyle habits including diet, exercise, and stressors to create a personalized wellness plan that prevents chronic disease. Includes nutrition education and custom workout planning with NASM Certified Personal Trainer support.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "State", name: SERVICE_STATE, alternateName: SERVICE_STATE_CODE },
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
      schemas.push(
        allysonSchema,
        marxSchema,
        faqSchema,
        breadcrumbSchema("/About", "About Us")
      );
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
