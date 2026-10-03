"use client";

import Link from "next/link";

const ALA_CARTE = [
  {
    name: "Initial Integrative Consult",
    price: "$300",
    meta: "60 minutes · telehealth",
    summary:
      "Your first visit, and the longest one. We go through your full health history, symptoms, diet, lifestyle, stress and goals together, without rushing, to find what is actually driving how you feel.",
    includes: [
      "Comprehensive health history review",
      "Root-cause assessment",
      "Personalized starting plan",
    ],
    highlight: null,
    credit: null,
    footnote: "Laboratory testing is ordered separately and billed by the lab.",
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    iconBg: "bg-green",
  },
  {
    name: "Follow-Up",
    price: "$175",
    meta: "30–45 minutes · telehealth",
    summary:
      "A continuing visit for established patients. We review lab results, track what is changing, and adjust the plan based on how your body is actually responding.",
    includes: [
      "Lab result review and interpretation",
      "Progress check-in",
      "Care plan adjustments",
    ],
    highlight: null,
    credit: null,
    footnote: null,
    iconPath:
      "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    iconBg: "bg-green",
  },
  {
    name: "Nutrition & Exercise Coaching",
    price: "$150",
    meta: "30 minutes · telehealth",
    summary:
      "The starting point for nutrition and exercise coaching. We assess your goals, review your health history, and build the personalized nutrition and training plan you will work from.",
    includes: [
      "Goal setting and health history review",
      "Personalized nutrition plan",
      "Personalized exercise programming",
    ],
    highlight: "NASM Certified Personal Trainer",
    credit:
      "Required before starting the Monthly Coaching Membership, and credited in full toward your first month.",
    footnote:
      "Exercise programming is a wellness service provided under a separate fitness agreement.",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconBg: "bg-orange",
  },
];

const COACHING_MEMBERSHIP = {
  name: "Monthly Coaching Membership",
  price: "$200",
  cadence: "per month",
  meta: "month to month · telehealth",
  summary:
    "Weekly asynchronous check-ins plus one live session each month for plan adjustments, for the stretch between visits when the plan has to survive real life.",
  includes: [
    "Weekly check-ins via secure messaging",
    "One live virtual session each month (30 minutes)",
    "Personalized exercise programming",
    "Nutrition and lifestyle coaching",
    "Food and exercise journals in the patient portal",
    "Ongoing accountability and support",
  ],
  highlight: "NASM Certified Personal Trainer",
  startHere:
    "All new members begin with a 30-minute Nutrition & Exercise Coaching session ($150) to assess goals, review health history, and build your personalized plan. That session fee is credited toward your first month of membership — so your first month is just $50, then $200 per month ongoing.",
  footnote:
    "Billed monthly, month to month, and you may cancel at any time with 30 days' notice. Exercise programming is a wellness service provided under a separate fitness agreement. This membership is coaching and does not include medical visits, prescriptions or laboratory testing.",
  url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings",
};

const CARE_PACKAGES = [
  {
    name: "Foundations Package",
    price: "$875",
    meta: "5 visits · valid 6 months",
    summary:
      "A prepaid integrative medicine package built around one in-depth initial consultation and a steady cadence of follow-up, delivered by telehealth.",
    includes: [
      "1 initial consultation (60 minutes)",
      "4 follow-up visits (30–45 minutes)",
      "Personalized care plan with ongoing adjustment",
      "Secure messaging with your provider through the patient portal",
    ],
    footnote: "Laboratory testing is billed separately.",
    url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?p=6a766e4af31a038b79615ee8",
  },
  {
    name: "Partnership Package",
    price: "$1,495",
    meta: "5 visits · valid 7 months",
    summary:
      "Everything in Foundations, plus the baseline lab work that makes root-cause analysis possible and direct access to your provider between visits.",
    includes: [
      "1 initial consultation (60 minutes)",
      "4 follow-up visits (30–45 minutes)",
      "Baseline laboratory panel covering 65 biomarkers",
      "Secure direct messaging with your provider for the full package term",
      "One 30-minute nutrition counseling session",
    ],
    footnote: null,
    url: "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?p=6a765bf6f77cbc1d9be1fec0",
  },
  {
    name: "Immersion Package",
    price: "$2,395",
    meta: "9 visits · valid 9 months",
    summary:
      "Our most comprehensive option, for patients who want sustained support across medicine, nutrition and movement over a longer arc of care.",
    includes: [
      "1 initial consultation (60 minutes)",
      "6 follow-up visits (30–45 minutes)",
      "2 dedicated nutrition counseling sessions (30 minutes each)",
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
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {ALA_CARTE.map((svc) => (
              <Link
                key={svc.name}
                href="/consult-booking"
                className="bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all hover:shadow-xl hover:ring-2 hover:ring-brown group animate-fade-in-up"
              >
                <div className={`w-16 h-16 ${svc.iconBg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={svc.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8752f' }}>{svc.name}</h3>
                <p className="text-3xl font-bold mb-1" style={{ color: '#5d6b57' }}>{svc.price}</p>
                <p className="text-sm mb-5" style={{ color: '#8a9584' }}>{svc.meta}</p>
                <p className="text-center mb-4" style={{ color: '#5d6b57' }}>
                  {svc.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-cream/50 w-full">
                  <p className="text-center mb-3 font-semibold" style={{ color: '#5d6b57' }}>
                    Includes:
                  </p>
                  <ul className="text-center space-y-2 mb-3 list-none" style={{ color: '#5d6b57' }}>
                    {svc.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {svc.highlight && (
                    <p className="text-center text-sm font-semibold" style={{ color: '#b8752f' }}>
                      {svc.highlight}
                    </p>
                  )}
                  {svc.credit && (
                    <p className="text-center text-sm font-semibold mt-3" style={{ color: '#a05a36' }}>
                      {svc.credit}
                    </p>
                  )}
                  {svc.footnote && (
                    <p className="text-center text-sm italic mt-3" style={{ color: '#8a9584' }}>
                      {svc.footnote}
                    </p>
                  )}
                </div>
                <div className="mt-auto pt-6">
                  <span
                    className="inline-flex items-center px-5 py-3 text-white rounded-lg font-medium transition-opacity group-hover:opacity-90"
                    style={{ backgroundColor: '#a05a36' }}
                  >
                    Book Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Monthly Coaching Membership */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#b8752f' }}>Monthly Coaching</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#5d6b57' }}>
              Nutrition and movement are not a one-visit problem. This is the ongoing version:
              a plan that gets adjusted every week, and a coach who is actually watching.
              Begin with a Nutrition & Exercise Coaching session, then continue month to month.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#b8752f' }}>
              {COACHING_MEMBERSHIP.name}
            </h3>
            <p className="text-3xl font-bold mb-1" style={{ color: '#5d6b57' }}>
              {COACHING_MEMBERSHIP.price}
              <span className="text-lg font-normal"> {COACHING_MEMBERSHIP.cadence}</span>
            </p>
            <p className="text-sm mb-5" style={{ color: '#8a9584' }}>
              {COACHING_MEMBERSHIP.meta}
            </p>
            <p className="mb-5" style={{ color: '#5d6b57' }}>
              {COACHING_MEMBERSHIP.summary}
            </p>
            <div className="pt-5 border-t border-cream/50">
              <p className="font-semibold mb-3" style={{ color: '#5d6b57' }}>
                Includes:
              </p>
              <ul className="space-y-2 list-none mb-5" style={{ color: '#5d6b57' }}>
                {COACHING_MEMBERSHIP.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold mb-5" style={{ color: '#b8752f' }}>
                {COACHING_MEMBERSHIP.highlight}
              </p>
              <div
                className="rounded-lg p-5 mb-5 border"
                style={{ backgroundColor: '#f5f2eb', borderColor: '#a05a36' }}
              >
                <p className="font-semibold mb-2" style={{ color: '#a05a36' }}>
                  Start here
                </p>
                <p style={{ color: '#5d6b57' }}>
                  {COACHING_MEMBERSHIP.startHere}
                </p>
              </div>
              <p className="text-sm italic mb-5" style={{ color: '#8a9584' }}>
                {COACHING_MEMBERSHIP.footnote}
              </p>
            </div>
            <div className="mt-auto pt-2">
              <a
                href={COACHING_MEMBERSHIP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-white rounded-lg font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#a05a36' }}
              >
                Book Your First Session →
              </a>
            </div>
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
