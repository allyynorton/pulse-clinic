import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Book a Pennsylvania Telehealth Consultation",
  description:
    "Schedule a virtual functional medicine consult from anywhere in Pennsylvania. Cash-pay pricing shown up front, no insurance required. Book online today.",
  keywords: [
    "book consultation",
    "schedule consult",
    "virtual functional medicine consult",
    "integrative medicine appointment",
  ],
  openGraph: {
    title: "Book a Pennsylvania Telehealth Consultation",
    description:
      "Schedule a virtual functional medicine consult from anywhere in Pennsylvania.",
    url: "/consult-booking",
  },
  alternates: {
    canonical: "/consult-booking",
  },
};

export default function ConsultBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData page="consult" />
      {children}
    </>
  );
}
