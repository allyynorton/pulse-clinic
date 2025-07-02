"use client";

import { useState } from "react";

export default function Services() {
  const [open, setOpen] = useState<null | "functional" | "preventative">(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-brown mb-4">Our Services</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-12">
            At Pulse Clinic, we blend natural and conventional care to provide a holistic approach to your wellness. Explore our core offerings below.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Integrative Care */}
            <div
              className={`bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all ${open === "functional" ? "ring-2 ring-brown" : "hover:shadow-xl"}`}
              onClick={() => setOpen(open === "functional" ? null : "functional")}
            >
              <div className="w-16 h-16 bg-green rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brown mb-2">Integrative Care</h2>
              {open === "functional" && (
                <p className="text-green mb-2">
                  This service is for patients who are looking to heal a chronic condition (ie. diabetes, high blood pressure, obesity, gut issues etc.) Integrative care blends conventional medicine with functional medicine to finding the root cause of the condition and a treatment plan centered around natural solutions. We dive into lifestyle habits, diet, exercise, environmental exposures, genetic predisposition, etc. to provide comprehensive patient-center care
                </p>
              )}
            </div>
            {/* Preventative Care */}
            <div
              className={`bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all ${open === "preventative" ? "ring-2 ring-brown" : "hover:shadow-xl"}`}
              onClick={() => setOpen(open === "preventative" ? null : "preventative")}
            >
              <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brown mb-2">Preventative Care</h2>
              {open === "preventative" && (
                <div className="mt-4 text-left w-full text-green animate-fade-in">
                  <p className="text-center">
                    This service is for patients who are looking to be proactive about their health. We will analyze current lifestyle habits including diet, exercise, stressors, etc to create a personalized wellness plan that will help prevent chronic disease and maintain optimal health. This plan gives the patient the education and empowerment to take their long-term health into their own hands.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 