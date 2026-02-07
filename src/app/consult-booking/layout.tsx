import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Book a Consultation | Pulse Whole Health",
  description:
    "Schedule your virtual functional medicine consult or integrative medicine appointment with Pulse Whole Health. Book a consultation today.",
  keywords: [
    "book consultation",
    "schedule consult",
    "virtual functional medicine consult",
    "integrative medicine appointment",
  ],
  openGraph: {
    title: "Book a Consultation | Pulse Whole Health",
    description:
      "Schedule your virtual functional medicine consult or integrative medicine appointment with Pulse Whole Health.",
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
