import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pulse Whole Health collects, uses, and protects information gathered through our website. Read our website privacy policy.",
  openGraph: {
    title: "Privacy Policy | Pulse Whole Health",
    description:
      "How Pulse Whole Health collects, uses, and protects information gathered through our website.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
