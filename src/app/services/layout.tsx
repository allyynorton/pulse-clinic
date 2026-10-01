import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Integrative Medicine & Wellness Coaching in Pennsylvania",
  description:
    "Integrative medicine, nutrition and exercise coaching, and advanced lab testing by telehealth anywhere in Pennsylvania. Root cause analysis for chronic conditions and personalized wellness plans.",
  keywords: [
    "integrative medicine",
    "functional medicine testing",
    "nutrition coaching",
    "exercise programming",
    "preventative care",
    "lab testing",
    "chronic condition root cause",
    "personalized wellness plan",
  ],
  openGraph: {
    title: "Integrative Medicine & Wellness Coaching in Pennsylvania",
    description:
      "Integrative medicine, nutrition and exercise coaching, and advanced lab testing by telehealth anywhere in Pennsylvania.",
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
