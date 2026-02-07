import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Services | Pulse Whole Health – Integrative & Preventative Care",
  description:
    "Explore integrative care, preventative care, and advanced lab testing at Pulse Whole Health. Chronic condition root cause analysis, functional medicine testing, and personalized wellness plans.",
  keywords: [
    "integrative care",
    "preventative care",
    "lab testing",
    "chronic condition root cause",
    "functional medicine testing",
    "personalized wellness plan",
  ],
  openGraph: {
    title: "Our Services | Pulse Whole Health – Integrative & Preventative Care",
    description:
      "Explore integrative care, preventative care, and advanced lab testing at Pulse Whole Health. Chronic condition root cause analysis and personalized wellness plans.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData page="services" />
      {children}
    </>
  );
}
