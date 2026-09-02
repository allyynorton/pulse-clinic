"use client";

import Link from "next/link";
import Image from "next/image";
import { useContactPopup } from "@/components/Footer";
import TreatmentJourney from "@/components/TreatmentJourney";
import { FAQS } from "@/lib/faqs";

export default function About() {
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-cream text-brown pb-12 pt-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-8 max-w-3xl" style={{ color: '#b8752f' }}>
            Integrative &amp; Functional Medicine for Patients Across Pennsylvania
          </h1>
          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-8 w-full px-4">
            <div className="bg-white rounded-xl p-8 border border-cream">
              <h2 className="text-3xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Our Mission</h2>
              <p className="text-xl text-green leading-relaxed mb-6" style={{ color: '#5d6b57' }}>
                At Pulse Whole Health, we blend conventional and functional approaches to best suit the unique needs of each patient. We believe in using the full spectrum of healthcare to provide comprehensive, personalized care that addresses both immediate symptoms and long-term health and wellness.
              </p>
              <p className="text-xl text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                Our mission is to deliver patient-centered care that looks at the whole person, not just isolated symptoms. We create treatment plans that work with your body&apos;s natural healing process to achieve optimal health and prevent future health complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="pt-8 pb-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Provider photo */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden border border-cream shadow-lg">
                <Image
                  src="/Ally Norton.png"
                  alt="Ally Norton, PA-C - Integrative Medicine Specialist at Pulse Whole Health"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 28rem"
                />
              </div>
            </div>

            {/* About Ally */}
            <div className="mt-12 bg-white rounded-xl p-8 border border-cream">
              <h3 className="text-2xl font-semibold text-orange mb-6" style={{ color: '#b8752f' }}>Meet Your Provider</h3>
              <div className="prose prose-lg text-green" style={{ color: '#5d6b57' }}>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  My name is Ally Norton and I am a board certified Physician Assistant and Integrative Medicine specialist. I earned my Master of Physician Assistant Studies from the University of Florida in 2021 and completed gastroenterology and endocrinology education through A4M.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  The idea for Pulse Whole Health came after 4+ years of working in urgent care and witnessing patients struggle with chronic conditions yet feeling powerless to help them heal. I have seen the amazing things that conventional medicine can do, however, I have also seen its limitations in healing chronic conditions. There is so much more that goes into treating a patient than just their body system. Things like environmental exposures, traumas, diet, lifestyle, family life, movement etc. all play a crucial role in complete healing. These experiences combined with 8 years of being a certified personal trainer have shown me how much more there is to medicine and how we can truly change patients&apos; lives.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  At Pulse Whole Health, I am committed to finding the root cause of health concerns, particularly focusing on gut and hormone health, as the foundation of overall wellness. I practice in conjunction with a collaborating physician in accordance with Pennsylvania medical regulations. My goal is to help patients achieve sustainable improvements in their health and to educate my patients so that they can implement these changes long term.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#5d6b57' }}>
                  Beyond the clinic, I enjoy spending time with my partner outdoors including hiking, skiing, camping, and just being with nature. We have two, very active, rescue dogs that we take with us on as many adventures as we can. I always enjoy a good book or puzzle when I can squeeze it into a busy schedule. I have a personal commitment to an active, healthy lifestyle which has truly shaped my approach to patient care, as I understand firsthand the importance of balancing physical activity, nature, and wellness in achieving optimal health.
                </p>
              </div>
            </div>

            {/* Medical Director */}
            <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-cream">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#b8752f' }}>Medical Director</h3>
              <div className="mb-6 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden border border-cream shadow-lg">
                  <Image
                    src="/Dr Marx.png"
                    alt="David G. Marx, MD - Medical Director at Pulse Whole Health"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24rem"
                  />
                </div>
              </div>
              <div className="prose prose-lg" style={{ color: '#5d6b57' }}>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#5d6b57' }}>
                  David G. Marx, MD serves as Medical Director for Pulse Whole Health, providing physician oversight and collaboration in support of Allyson Norton, PA-C, and the clinical team. With more than 30 years of experience in Family and Emergency Medicine and advanced training in Integrative and Functional Medicine, Dr. Marx helps ensure that patients receive safe, evidence-based, and personalized care. Working alongside Allyson, he supports the practice&apos;s commitment to identifying the root causes of illness while empowering patients to achieve lasting health and wellness.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#5d6b57' }}>
                  Pulse Whole Health I, P.C. is owned and operated under the medical direction of David G. Marx, M.D., a licensed physician in the Commonwealth of Pennsylvania. Dr. Marx serves as Medical Director and provides clinical oversight and supervision of all patient care services in accordance with Pennsylvania law.
                </p>
              </div>
            </div>

            {/* Treatment Journey */}
            <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-cream">
              <TreatmentJourney />
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <div className="bg-white rounded-xl p-8 border border-cream space-y-8">
                <h2 className="text-3xl font-bold text-orange mb-8 text-center" style={{ color: '#b8752f' }}>Integrative Medicine FAQs</h2>
                {FAQS.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>{faq.question}</h3>
                    <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Credentials & Licensure */}
            <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-cream">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#b8752f' }}>Credentials &amp; Licensure</h3>
              <div className="space-y-3 text-base sm:text-lg" style={{ color: '#5d6b57' }}>
                <p><strong>Allyson L. Norton, PA-C</strong></p>
                <p>Pennsylvania PA License: MA065203</p>
                <p>Master of Physician Assistant Studies, University of Florida (2021)</p>
                <p>NASM Certified Personal Trainer (2018)</p>
                <p>Advanced Education in Gastroenterology &amp; Endocrinology through A4M</p>
              </div>
              <div className="mt-6 pt-4 border-t border-cream/50 text-sm" style={{ color: '#8a9584' }}>
                <p>Clinical services are provided by Allyson Norton, PA-C under the supervision of David G. Marx, M.D., Medical Director, pursuant to a Written Supervisory Agreement filed with the Pennsylvania State Board of Medicine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#b8752f' }}>Begin Your Wellness Transformation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#b8752f' }}>
            Experience the difference that personalized, root-cause, integrative medicine can make in your health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consult-booking"
              className="border-2 px-8 py-3 rounded-lg font-semibold bg-transparent hover:bg-white transition-all duration-200 text-center"
              style={{ borderColor: '#5d6b57', color: '#5d6b57' }}
            >
              Schedule Consultation
            </Link>
            <button
              onClick={openPopup}
              className="border-2 px-8 py-3 rounded-lg font-semibold bg-transparent hover:bg-white transition-all duration-200 text-center"
              style={{ borderColor: '#5d6b57', color: '#5d6b57' }}
            >
              Contact Practice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 
