import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pulsewholehealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pulse Whole Health – Integrative & Functional Medicine | Virtual Healthcare",
    template: "%s | Pulse Whole Health",
  },
  description:
    "Pulse Whole Health offers personalized integrative and functional medicine through virtual visits. Led by Allyson Norton, PA-C, we focus on root cause analysis and holistic wellness. Book your consultation today.",
  keywords: [
    "integrative medicine",
    "functional medicine",
    "virtual healthcare",
    "telemedicine",
    "root cause medicine",
    "holistic health",
    "patient-centered care",
    "Allyson Norton PA-C",
    "chronic disease treatment",
    "preventive care",
    "wellness consultation",
  ],
  authors: [{ name: "Pulse Whole Health" }],
  creator: "Pulse Whole Health",
  publisher: "Pulse Whole Health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pulse Whole Health",
    title: "Pulse Whole Health – Integrative & Functional Medicine",
    description:
      "Personalized integrative and functional medicine through virtual visits. Root cause analysis and holistic wellness.",
    images: [
      {
        url: "/pulse-logo.png",
        width: 1200,
        height: 630,
        alt: "Pulse Whole Health Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Whole Health – Integrative & Functional Medicine",
    description:
      "Personalized integrative and functional medicine through virtual visits.",
    images: ["/pulse-logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/pulse-logo.png",
    apple: "/pulse-logo.png",
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Pulse Whole Health",
    url: siteUrl,
    logo: `${siteUrl}/pulse-logo.png`,
    medicalSpecialty: ["Integrative medicine", "Functional medicine"],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
