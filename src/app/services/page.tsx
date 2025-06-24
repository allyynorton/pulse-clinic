"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const [open, setOpen] = useState<null | "functional" | "preventative">(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-pacifico text-brown mb-4">Our Services</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-12">
            At Pulse Clinic, we blend natural and conventional care to provide a holistic approach to your wellness. Explore our core offerings below.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Functional Care */}
            <div
              className={`bg-white rounded-xl p-8 border border-cream shadow-lg flex flex-col items-center cursor-pointer transition-all ${open === "functional" ? "ring-2 ring-brown" : "hover:shadow-xl"}`}
              onClick={() => setOpen(open === "functional" ? null : "functional")}
            >
              <div className="w-16 h-16 bg-green rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brown mb-2">Functional Care</h2>
              <p className="text-green mb-2">
                Personalized, root-cause medicine that looks at the whole person.
              </p>
              {open === "functional" && (
                <div className="mt-4 text-left w-full text-green animate-fade-in">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive health assessments and lab work</li>
                    <li>Root-cause analysis for chronic symptoms</li>
                    <li>Personalized treatment plans</li>
                    <li>Focus on nutrition, lifestyle, and environment</li>
                    <li>Ongoing support and follow-up</li>
                  </ul>
                </div>
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
              <p className="text-green mb-2">
                Proactive strategies and coaching to help you prevent illness and maintain optimal health.
              </p>
              {open === "preventative" && (
                <div className="mt-4 text-left w-full text-green animate-fade-in">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personalized wellness plans</li>
                    <li>Screenings and risk assessments</li>
                    <li>Guidance on nutrition, exercise, and stress reduction</li>
                    <li>Support for healthy habits and lifestyle changes</li>
                    <li>Education and empowerment for long-term health</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 