import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | Pulse Whole Health – Integrative & Functional Medicine",
  description:
    "Learn about Pulse Whole Health and whole health medicine. Allyson Norton, PA-C, combines modern and holistic care, with a focus on gut health and root cause analysis.",
  keywords: [
    "whole health medicine",
    "Allyson Norton PA-C",
    "functional medicine specialist",
    "physician assistant integrative medicine",
    "root cause analysis",
    "gut health",
  ],
  openGraph: {
    title: "About Us | Pulse Whole Health – Integrative & Functional Medicine",
    description:
      "Learn about Pulse Whole Health and whole health medicine. Allyson Norton, PA-C, combines modern and holistic care, with a focus on gut health and root cause analysis.",
    url: "/About",
  },
  alternates: {
    canonical: "/About",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData page="about" />
      {children}
    </>
  );
}
