import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  CONTACT_EMAIL,
  SERVICE_STATE,
  SERVICE_STATE_CODE,
  ORGANIZATION_ID,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Integrative & Functional Medicine in Pennsylvania | Pulse Whole Health",
    template: "%s | Pulse Whole Health",
  },
  description:
    "Virtual integrative and functional medicine for patients across Pennsylvania. Allyson Norton, PA-C, finds the root cause of chronic gut, hormone, and metabolic concerns. Telehealth visits statewide. Book a consultation.",
  keywords: [
    "integrative medicine Pennsylvania",
    "functional medicine Pennsylvania",
    "telehealth Pennsylvania",
    "root cause medicine",
    "functional medicine near me",
    "gut health specialist Pennsylvania",
    "hormone imbalance treatment Pennsylvania",
    "virtual functional medicine",
    "Allyson Norton PA-C",
    "cash pay functional medicine",
    "holistic health Pennsylvania",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: "Integrative & Functional Medicine in Pennsylvania",
    description:
      "Virtual root-cause medicine for patients across Pennsylvania. Personalized care for gut, hormone, and metabolic health.",
    images: [
      {
        url: "/pulse-logo.png",
        width: 1200,
        height: 630,
        alt: "Pulse Whole Health Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrative & Functional Medicine in Pennsylvania",
    description:
      "Virtual root-cause medicine for patients across Pennsylvania.",
    images: ["/pulse-logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/pulse-logo.png",
    apple: "/pulse-logo.png",
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * MedicalClinic (a LocalBusiness subtype) rather than the generic
   * Organization, so search engines classify this as a healthcare provider.
   *
   * No streetAddress is published: this is a telehealth-only practice and the
   * physical address is deliberately kept private. addressRegion plus a State
   * areaServed is what ties the practice to Pennsylvania.
   */
  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    description:
      "Virtual integrative and functional medicine practice serving patients across Pennsylvania. Root-cause care for chronic gut, hormone, and metabolic conditions.",
    logo: `${SITE_URL}/pulse-logo.png`,
    image: `${SITE_URL}/pulse-logo.png`,
    email: CONTACT_EMAIL,
    medicalSpecialty: ["Integrative medicine", "Functional medicine", "Preventive medicine"],
    isAcceptingNewPatients: true,
    address: {
      "@type": "PostalAddress",
      addressRegion: SERVICE_STATE_CODE,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: SERVICE_STATE,
      alternateName: SERVICE_STATE_CODE,
    },
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Integrative Care",
        description:
          "Root-cause evaluation and treatment of chronic conditions including diabetes, high blood pressure, obesity, and gut disorders, blending conventional and functional medicine.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Preventative Care",
        description:
          "Proactive lifestyle, nutrition, and exercise planning to prevent chronic disease and maintain long-term health.",
      },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/consult-booking`,
      availableLanguage: { "@type": "Language", name: "English" },
      serviceLocation: {
        "@type": "VirtualLocation",
        name: "Secure telehealth visit",
        url: `${SITE_URL}/consult-booking`,
      },
    },
    paymentAccepted: "Credit Card, Debit Card, HSA, FSA",
    currenciesAccepted: "USD",
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      url: `${SITE_URL}/consult-booking`,
      contactType: "booking",
      areaServed: SERVICE_STATE_CODE,
      availableLanguage: "English",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };

  const breadcrumbHomeJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  const safeJsonLd = (obj: object) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(clinicJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbHomeJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
