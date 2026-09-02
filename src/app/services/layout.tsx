import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Integrative & Preventative Care in Pennsylvania",
  description:
    "Integrative care, preventative care, and advanced lab testing by telehealth anywhere in Pennsylvania. Root cause analysis for chronic conditions and personalized wellness plans.",
  keywords: [
    "integrative care",
    "preventative care",
    "lab testing",
    "chronic condition root cause",
    "functional medicine testing",
    "personalized wellness plan",
  ],
  openGraph: {
    title: "Integrative & Preventative Care in Pennsylvania",
    description:
      "Integrative care, preventative care, and advanced lab testing by telehealth anywhere in Pennsylvania.",
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
