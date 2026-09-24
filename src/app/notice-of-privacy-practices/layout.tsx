import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices",
  description:
    "How Pulse Whole Health may use and disclose your Protected Health Information under HIPAA, and your rights regarding that information.",
  openGraph: {
    title: "Notice of Privacy Practices | Pulse Whole Health",
    description:
      "How Pulse Whole Health may use and disclose your Protected Health Information under HIPAA, and your rights regarding that information.",
    url: "/notice-of-privacy-practices",
  },
  alternates: {
    canonical: "/notice-of-privacy-practices",
  },
};

export default function NoticeOfPrivacyPracticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
