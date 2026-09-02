import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Ally Norton, PA-C & Dr. Marx",
  description:
    "Meet Allyson Norton, PA-C, and Medical Director David G. Marx, MD. Integrative and functional medicine for patients across Pennsylvania, focused on gut health, hormones, and root cause analysis.",
  keywords: [
    "whole health medicine",
    "Allyson Norton PA-C",
    "functional medicine specialist",
    "physician assistant integrative medicine",
    "root cause analysis",
    "gut health",
  ],
  openGraph: {
    title: "About Ally Norton, PA-C & Dr. Marx",
    description:
      "Meet Allyson Norton, PA-C, and Medical Director David G. Marx, MD. Integrative and functional medicine for patients across Pennsylvania, focused on gut health, hormones, and root cause analysis.",
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
