"use client";

import Link from "next/link";

const CARE_PACKAGES = [
  {
    name: "Foundations Package",
    price: "$795",
    meta: "5 visits · valid 6 months",
    summary:
      "A prepaid integrative medicine package built around one in-depth initial consultation and a steady cadence of follow-up, delivered by telehealth.",
    includes: [
      "1 initial consultation (60 minutes)",
      "4 follow-up visits (30–45 minutes)",
      "Personalized care plan with ongoing adjustment",
    ],
    footnote: "Laboratory testing is billed separately.",
    url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?p=6a766e4af31a038b79615ee8",
  },
  {
    name: "Partnership Package",
    price: "$1,395",
    meta: "5 visits · valid 7 months",
    summary:
      "Everything in Foundations, plus the baseline lab work that makes root-cause analysis possible and direct access to your provider between visits.",
    includes: [
      "1 initial consultation (60 minutes)",
      "4 follow-up visits (30–45 minutes)",
      "Baseline laboratory panel covering 65 biomarkers",
      "Secure direct messaging with your provider for the full package term",
      "Nutrition guidance integrated into visits and messaging",
    ],
    footnote: null,
    url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?p=6a765bf6f77cbc1d9be1fec0",
  },
  {
    name: "Immersion Package",
    price: "$1,995",
    meta: "9 visits · valid 9 months",
    summary:
      "Our most comprehensive option, for patients who want sustained support across medicine, nutrition and movement over a longer arc of care.",
    includes: [
      "1 initial consultation (60 minutes)",
      "6 follow-up visits (30–45 minutes)",
      "2 dedicated nutrition coaching sessions (30 minutes each)",
      "Baseline laboratory panel covering 65 biomarkers",
      "Secure direct messaging with your provider for the full package term",
      "Tailored online exercise program with instructional form videos, updated at each follow-up",
      "Priority scheduling",
    ],
    footnote:
      "The exercise program is a wellness service provided under a separate fitness agreement.",
    url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?p=6a766270f77cbc1d9be243aa",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-orange mb-4 animate-fade-in-up" style={{ color: '#b8752f' }}>Our Services</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ color: '#5d6b57' }}>
            At Pulse Whole Health, we blend natural and conventional care to provide a holistic approach to your wellness. Explore our core offerings below.
          </p>
          <h2 className="text-4xl mb-8" style={{ color: '#b8752f' }}>À La Carte Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Integrative Care */}
            <Link 
              href="/consult-booking"
              className="bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-brown group animate-fade-in-up"
            >
              <div className="w-16 h-16 bg-green rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-orange mb-4" style={{ color: '#b8752f' }}>Integrative Care</h2>
              <p className="text-green text-center mb-4" style={{ color: '#5d6b57' }}>
                This service is for patients who are looking to heal a chronic condition (ie. diabetes, high blood pressure, obesity, gut issues etc.) Integrative care blends conventional medicine with functional medicine to finding the root cause of the condition and a treatment plan centered around natural solutions. We dive into lifestyle habits, diet, exercise, environmental exposures, genetic predisposition, etc. to provide comprehensive patient-center care
              </p>
              <div className="mt-4 pt-4 border-t border-cream/50 w-full">
                <p className="text-green text-center mb-3 font-semibold" style={{ color: '#5d6b57' }}>
                  Includes:
                </p>
                <ul className="text-green text-center space-y-2 mb-3 list-none" style={{ color: '#5d6b57' }}>
                  <li>In-Depth Consultation</li>
                  <li>Advanced Lab Testing</li>
                  <li>Personalized Care Plans with Ongoing Follow Up</li>
                </ul>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center px-4 py-2 bg-brown text-white rounded-lg font-medium hover:bg-orange transition-colors">
                  Book Consultation →
                </span>
              </div>
            </Link>
            {/* Preventative Care */}
            <Link 
              href="/consult-booking"
              className="bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-brown group animate-fade-in-up"
            >
              <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-orange mb-4" style={{ color: '#b8752f' }}>Preventative Care</h2>
              <p className="text-green text-center mb-4" style={{ color: '#5d6b57' }}>
                This service is for patients who are looking to be proactive about their health. We will analyze current lifestyle habits including diet, exercise, stressors, etc to create a personalized wellness plan that will help prevent chronic disease and maintain optimal health. This plan gives the patient the education and empowerment to take their long-term health into their own hands.
              </p>
              <div className="mt-4 pt-4 border-t border-cream/50 w-full">
                <p className="text-green text-center mb-3 font-semibold" style={{ color: '#5d6b57' }}>
                  Includes:
                </p>
                <ul className="text-green text-center space-y-2 mb-3 list-none" style={{ color: '#5d6b57' }}>
                  <li>Nutrition Education</li>
                  <li>Custom Workout Planning</li>
                </ul>
                <p className="text-orange text-center text-sm font-semibold" style={{ color: '#b8752f' }}>
                  NASM Certified Personal Trainer
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center px-4 py-2 bg-brown text-white rounded-lg font-medium hover:bg-orange transition-colors">
                  Book Consultation →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Packages */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#b8752f' }}>Packages</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#5d6b57' }}>
              Root-cause work takes more than one visit. These prepaid packages bundle your
              initial consultation with ongoing follow-up so the plan has time to work. All
              visits are delivered by telehealth to patients anywhere in Pennsylvania.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {CARE_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col animate-fade-in-up"
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8752f' }}>
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold mb-1" style={{ color: '#5d6b57' }}>
                  {pkg.price}
                </p>
                <p className="text-sm mb-5" style={{ color: '#8a9584' }}>
                  {pkg.meta}
                </p>
                <p className="mb-5" style={{ color: '#5d6b57' }}>
                  {pkg.summary}
                </p>
                <div className="pt-5 border-t border-cream/50">
                  <p className="font-semibold mb-3" style={{ color: '#5d6b57' }}>
                    Includes:
                  </p>
                  <ul className="space-y-2 list-none mb-5" style={{ color: '#5d6b57' }}>
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {pkg.footnote && (
                    <p className="text-sm italic mb-5" style={{ color: '#8a9584' }}>
                      {pkg.footnote}
                    </p>
                  )}
                </div>
                <div className="mt-auto pt-2">
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 text-white rounded-lg font-medium transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#a05a36' }}
                  >
                    Purchase Package →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-10 max-w-3xl mx-auto" style={{ color: '#8a9584' }}>
            Packages are paid in full at enrollment and are governed by a Care Package Agreement
            signed at that time. Prescription medications, compounded medications, nutritional
            supplements, and any laboratory testing beyond an included baseline panel are billed
            separately. See our{' '}
            <Link href="/financial-policy" className="underline" style={{ color: '#b8752f' }}>
              Financial Policy
            </Link>{' '}
            for full terms.
          </p>
        </div>
      </section>

      {/* Root Cause Medicine Banner */}
      <Link href="/consult-booking" className="block">
        <section
          className="relative py-32 md:py-44 bg-cover bg-center cursor-pointer transition-all hover:brightness-110"
          style={{
            backgroundImage: 'url(/root-cause-medicine-banner.jpg)',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }} />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Come See What Root Cause Medicine Is All About
            </h2>
            <div className="mt-8">
              <span className="inline-flex items-center px-8 py-4 bg-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ color: '#b8752f' }}>
                Book Your Consultation →
              </span>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
}
