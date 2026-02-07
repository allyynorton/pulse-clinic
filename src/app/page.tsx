"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      {/* Hero Section */}
      <section className="relative text-brown pb-8 pt-8" style={{ backgroundColor: '#f5f2eb' }}>
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <video
            src="/Video_Generation_Ready.mp4"
            autoPlay
            muted
            playsInline
            className={`mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ width: '380px', height: '380px', objectFit: 'cover', objectPosition: 'center' }}
          />
          <h1 className={`text-4xl font-bold mb-6 text-orange transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ color: '#b8752f' }}>
            Ready to Take Control of Your Health?
          </h1>
          <div className={`text-xl md:text-2xl text-brown mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Blending natural and conventional care for a more holistic approach to wellness.
          </div>
          <p className={`text-xl text-green max-w-4xl mx-auto mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ color: '#5d6b57' }}>
            At Pulse we strongly believe that no one should receive cookie cutter healthcare because everyone is unique in their own way. We all have different exposures, genetics, lifestyle habits, etc. which is why it is important to have a unique and individualized approach to treatment. Focusing on finding the root causes of disease allows us to develop a personalized treatment plan that can give you the most natural solution to your symptoms and prevent future illness.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s' }}>
            <Link 
              href="/About"
              className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              About
            </Link>
            <Link 
              href="/services"
              className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              Our Services
            </Link>
            <Link 
              href="/consult-booking"
              className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200 text-center"
            >
              Book Your Consult
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-8 pb-12 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-orange mb-6 -mt-4" style={{ color: '#b8752f' }}>Why Choose Pulse Whole Health?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 transition-all duration-500 hover:translate-x-2">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange">Experienced Medical Provider</h3>
                    <p className="text-green" style={{ color: '#5d6b57' }}>Ally is a board-certified physician assistant with expertise in urgent care and family medicine, and a strong passion for integrative medicine.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 transition-all duration-500 hover:translate-x-2">
                  <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange">Virtual Visits from Your Home</h3>
                    <p className="text-green" style={{ color: '#5d6b57' }}>Experience expert care and support through convenient virtual visits from your home—no travel required. Our secure telemedicine platform brings quality healthcare directly to you.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 transition-all duration-500 hover:translate-x-2">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange">Patient-Centered Care</h3>
                    <p className="text-green" style={{ color: '#5d6b57' }}>Personalized treatment plans that prioritize your health goals by finding the root cause of illness.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 transition-all duration-500 hover:translate-x-2">
                  <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange">Committed to Your Long-Term Health</h3>
                    <p className="text-green" style={{ color: '#5d6b57' }}>We are deeply committed to your long-term health and wellness. Our approach focuses on sustainable, preventive care that empowers you to achieve lasting vitality and well-being throughout your life.</p>
                  </div>
                </div>
              </div>

              {/* What You'll Get Section */}
              <div className="mt-8 bg-white rounded-2xl p-6 border border-cream shadow-lg">
                <h4 className="text-xl font-bold text-orange mb-4">What You&apos;ll Get:</h4>
                <ul className="space-y-3 text-green" style={{ color: '#5d6b57' }}>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold text-lg">•</span>
                    <span>A personalized assessment of your health concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold text-lg">•</span>
                    <span>Understanding of root cause analysis approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold text-lg">•</span>
                    <span>Customized treatment plan recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange font-bold text-lg">•</span>
                    <span>Information on next steps for your wellness journey</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-cream shadow-lg overflow-hidden animate-fade-in-up transition-all duration-500 hover:shadow-xl">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-xl overflow-hidden mb-4 group">
                  {imageError ? (
                    <div className="w-full h-full bg-gradient-to-br from-orange/20 to-green/20 flex items-center justify-center transition-all duration-300">
                      <div className="text-center p-4">
                        <svg className="w-16 h-16 text-brown mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-brown text-sm font-medium">Add photo: ally-norton.jpg</p>
                        <p className="text-green text-xs mt-2">Place in public folder</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src="/Ally Norton.png"
                      alt="Allyson Norton, PA-C - Pulse Clinic Founder and Medical Provider"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={() => setImageError(true)}
                      priority={false}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-orange mb-2">Allyson Norton, PA-C</h3>
                  <p className="text-green text-sm mb-4">
                    Founder & Medical Provider
                  </p>
                  <Link 
                    href="/About"
                    className="inline-block bg-brown text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange transition-colors text-sm"
                  >
                    Learn More About Ally
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
