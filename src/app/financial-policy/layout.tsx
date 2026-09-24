import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Pay Financial Policy",
  description:
    "Pulse Whole Health's cash-pay financial policy: published fee schedule, accepted payment methods, insurance and superbills, refunds, and Good Faith Estimates.",
  openGraph: {
    title: "Cash Pay Financial Policy | Pulse Whole Health",
    description:
      "Published fee schedule, accepted payment methods, insurance and superbills, refunds, and Good Faith Estimates.",
    url: "/financial-policy",
  },
  alternates: { canonical: "/financial-policy" },
};

export default function FinancialPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
