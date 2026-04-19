"use client";

import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-orange mb-4 animate-fade-in-up" style={{ color: '#b8752f' }}>Our Services</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ color: '#5d6b57' }}>
            At Pulse Whole Health, we blend natural and conventional care to provide a holistic approach to your wellness. Explore our core offerings below.
          </p>
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

      {/* Root Cause Medicine Banner */}
      <Link href="/consult-booking" className="block">
        <section
          className="relative py-32 md:py-44 bg-cover bg-center cursor-pointer transition-all hover:brightness-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1584257274862-42aa4f6e5f55?w=1920&q=80&fit=crop)',
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
