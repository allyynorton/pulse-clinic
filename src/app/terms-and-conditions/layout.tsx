import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing telehealth services from Pulse Whole Health: services provided, eligibility, fees and refunds, cancellation policy, and governing law.",
  openGraph: {
    title: "Terms and Conditions | Pulse Whole Health",
    description:
      "Terms governing telehealth services from Pulse Whole Health: services, eligibility, fees, refunds, and governing law.",
    url: "/terms-and-conditions",
  },
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
