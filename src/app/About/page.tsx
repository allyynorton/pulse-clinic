"use client";

import Link from "next/link";
import { useContactPopup } from "@/components/Footer";

export default function About() {
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-cream text-brown pb-12 pt-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl text-orange mb-6" style={{ color: '#b8752f' }}>About Pulse Whole Health</h1>
          
          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Our Mission</h2>
            <p className="text-xl text-green leading-relaxed mb-6" style={{ color: '#5d6b57' }}>
              At Pulse Whole Health, we blend modern medicine with holistic approaches to best suit each patient&apos;s unique needs. We believe in using the full spectrum of healthcare—from evidence-based medications to functional medicine principles—to provide comprehensive, personalized care that addresses both immediate symptoms and long-term wellness.
            </p>
            <p className="text-xl text-green leading-relaxed" style={{ color: '#5d6b57' }}>
              Our mission is to deliver patient-centered care that looks at the whole person, not just isolated symptoms. We combine the precision of modern medicine with the depth of holistic health practices, creating treatment plans that work with your body&apos;s natural healing processes to achieve optimal health and prevent future health complications.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Bio Content */}
            <div className="prose prose-lg text-green space-y-6" style={{ color: '#5d6b57' }}>
              <h2 className="text-3xl font-bold text-orange mb-6 text-center" style={{ color: '#b8752f' }}>What is Whole Health Medicine?</h2>
              
              <p className="text-xl leading-relaxed" style={{ color: '#5d6b57' }}>
                Whole health medicine, also known as functional or integrative medicine, views your body as an interconnected system where everything is related. Unlike traditional approaches that often focus on individual symptoms or organs, whole health medicine looks at how all the systems in your body work together and how they influence each other.
              </p>
              
              <p className="text-xl leading-relaxed" style={{ color: '#5d6b57' }}>
                <strong className="text-orange" style={{ color: '#b8752f' }}>The Foundation: Gut Health</strong><br />
                At Pulse, we place a strong emphasis on gut health because it&apos;s the foundation of your overall wellness. Your gut is home to trillions of bacteria that play crucial roles in digestion, immune function, mood regulation, and even how your body processes nutrients. When your gut microbiome is balanced, you feel energetic, digest food well, and your immune system functions optimally. But when there&apos;s an imbalance—too much harmful bacteria, not enough beneficial bacteria, or gut lining issues—it can contribute to a wide range of health problems, from digestive issues and fatigue to inflammation, autoimmune conditions, and even mental health challenges.
              </p>
              
              <p className="text-xl leading-relaxed" style={{ color: '#5d6b57' }}>
                <strong className="text-orange" style={{ color: '#b8752f' }}>The Connection Between Systems</strong><br />
                Whole health medicine recognizes that your systems don&apos;t work in isolation. For example, chronic stress doesn&apos;t just affect your mood—it impacts your gut health, which can affect your immune system, which can influence inflammation throughout your body. Hormonal imbalances might be related to gut health, nutrient deficiencies, or chronic inflammation. Thyroid issues might be connected to nutrient absorption problems in your gut. By understanding these connections, we can address the root cause of your symptoms rather than just treating them in isolation.
              </p>
              
              <p className="text-xl leading-relaxed" style={{ color: '#5d6b57' }}>
                <strong className="text-orange" style={{ color: '#b8752f' }}>The Role of Nutrition & Lifestyle</strong><br />
                What you eat, how you sleep, how you manage stress, and your physical activity all influence your body&apos;s ability to function optimally. Food sensitivities might be causing inflammation that contributes to joint pain or skin issues. Nutrient deficiencies might be causing fatigue or brain fog. Sleep problems might be affecting hormone production and gut health. We look at all of these factors to understand the full picture of your health.
              </p>
              
              <p className="text-xl leading-relaxed" style={{ color: '#5d6b57' }}>
                <strong className="text-orange" style={{ color: '#b8752f' }}>An Integrated Approach: Blending Modern & Holistic Medicine</strong><br />
                At Pulse Whole Health, we blend modern medicine with holistic approaches to best suit each patient&apos;s unique needs. We use evidence-based medications when appropriate—they&apos;re valuable tools that have saved countless lives and provide crucial symptom relief. At the same time, we investigate what might be contributing to recurring health issues using holistic principles. We use advanced laboratory testing to look at gut health, hormone function, nutrient levels, inflammation markers, and more. We consider your lifestyle, environment, genetics, and nutrition. Then we create a comprehensive, personalized plan that combines the best of both approaches—addressing immediate symptoms with modern medicine when needed, while also working on underlying factors through holistic practices. This integrated approach ensures we&apos;re treating the whole person in the way that best suits their individual needs.
              </p>
            </div>

            {/* About Ally */}
            <div className="mt-12 bg-white rounded-xl p-8 border border-cream">
              <h3 className="text-2xl font-semibold text-orange mb-6" style={{ color: '#b8752f' }}>Meet Your Provider</h3>
              <div className="prose prose-lg text-green" style={{ color: '#5d6b57' }}>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  Allyson Norton, PA-C, is a Board-Certified Physician Assistant and Functional Medicine Specialist who founded Pulse Whole Health with a passion for blending modern medicine with holistic approaches. With a Master of Physician Assistant Studies from the University of Florida (2019) and completed courses with A4M (American Academy of Anti-Aging Medicine), Ally brings both clinical expertise and a deep understanding of whole health principles to her practice.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  With four years of experience in urgent care, Ally has witnessed firsthand how conventional medicine excels at managing acute symptoms, but also recognized the need to address the underlying factors that contribute to recurring health issues. This experience, combined with her background as a NASM Certified Personal Trainer since 2018, has shaped her integrated approach to patient care.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  At Pulse Whole Health, Ally combines evidence-based medications with functional medicine principles to create personalized treatment plans that address both immediate symptoms and long-term wellness. Her commitment to finding the root cause of health concerns, particularly focusing on gut health as the foundation of overall wellness, helps patients achieve sustainable improvements in their health.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#5d6b57' }}>
                  Beyond the clinic, Ally is an avid outdoors person who loves hiking and spending time in nature. Her passion for fitness and wellness extends to her personal life, where she enjoys staying active and spending time with her dogs. This personal commitment to an active, healthy lifestyle informs her approach to patient care, as she understands firsthand the importance of balancing physical activity, nature, and wellness in achieving optimal health.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-12 bg-white rounded-xl p-8 border border-cream">
              <h3 className="text-2xl font-semibold text-orange mb-6" style={{ color: '#b8752f' }}>Professional Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange" style={{ color: '#b8752f' }}>Master of Physician Assistant Studies (MPAS)</h4>
                    <p className="text-green" style={{ color: '#5d6b57' }}>University of Florida, 2019</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange" style={{ color: '#b8752f' }}>Board Certified Physician Assistant</h4>
                    <p className="text-green" style={{ color: '#5d6b57' }}>Licensed Healthcare Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange" style={{ color: '#b8752f' }}>Certified Personal Trainer</h4>
                    <p className="text-green" style={{ color: '#5d6b57' }}>NASM Certified since 2018</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange" style={{ color: '#b8752f' }}>A4M Courses Completed</h4>
                    <p className="text-green" style={{ color: '#5d6b57' }}>American Academy of Anti-Aging Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Wellness Transformation</h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Experience the difference that personalized, evidence-based functional medicine can make in your health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consult-booking"
              className="bg-white text-brown px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Schedule Consultation
            </Link>
            <button
              onClick={openPopup}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown transition-colors"
            >
              Contact Practice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 