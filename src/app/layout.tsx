import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pulseclinic.com'),
  title: {
    default: "Pulse Clinic - Integrative & Functional Medicine | Virtual Healthcare",
    template: "%s | Pulse Clinic"
  },
  description: "Pulse Clinic offers personalized integrative and functional medicine through virtual visits. Led by Allyson Norton, PA-C, we focus on root cause analysis and holistic wellness. Book your consultation today.",
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
    "wellness consultation"
  ],
  authors: [{ name: "Pulse Clinic" }],
  creator: "Pulse Clinic",
  publisher: "Pulse Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pulse Clinic",
    title: "Pulse Clinic - Integrative & Functional Medicine",
    description: "Personalized integrative and functional medicine through virtual visits. Root cause analysis and holistic wellness.",
    images: [
      {
        url: "/pulse-logo.png",
        width: 1200,
        height: 630,
        alt: "Pulse Clinic Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Clinic - Integrative & Functional Medicine",
    description: "Personalized integrative and functional medicine through virtual visits.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
