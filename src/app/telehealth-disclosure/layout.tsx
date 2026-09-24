import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent",
  description:
    "Pulse Whole Health's telehealth informed consent: how virtual visits work, the benefits and limitations of telehealth, emergency protocols, and your rights as a Pennsylvania telehealth patient.",
  openGraph: {
    title: "Telehealth Informed Consent | Pulse Whole Health",
    description:
      "How virtual visits work at Pulse Whole Health, the benefits and limitations of telehealth, and your rights as a Pennsylvania telehealth patient.",
    url: "/telehealth-disclosure",
  },
  alternates: { canonical: "/telehealth-disclosure" },
};

export default function TelehealthDisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
