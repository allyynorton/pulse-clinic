"use client";

import Link from "next/link";
import Image from "next/image";
import { useContactPopup } from "@/components/Footer";

export default function About() {
  const { openPopup } = useContactPopup();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-cream text-brown pb-12 pt-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
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

            {/* Pulse Whole Health Roadmap */}
            <div className="mt-12 flex justify-center">
              <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-cream shadow-lg bg-white">
                <Image
                  src="/roadmap.png"
                  alt="Pulse Whole Health Roadmap - The Core, The Reignition, and The Optimization phases"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <div className="bg-white rounded-xl p-8 border border-cream space-y-8">
                <h2 className="text-3xl font-bold text-orange mb-8 text-center" style={{ color: '#b8752f' }}>Integrative Medicine FAQs</h2>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>What is integrative medicine?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Integrative medicine combines conventional medical care with evidence-based nutrition, lifestyle medicine, and targeted supplementation to treat the whole person—not just symptoms. The goal is to address root causes of chronic health concerns while supporting long-term wellness. It uses peer-reviewed research, clinical guidelines, and laboratory testing, alongside lifestyle and nutritional interventions to support safe and effective care.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>What training do integrative medicine PAs have?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    In addition to formal medical training and board certification, integrative PAs pursue advanced education in nutrition, hormone optimization, gut health, metabolic health, and longevity-focused care. Integrative PAs are able to order diagnostic testing, prescribe medications, and always work in conjunction with a collaborating physician.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>Can integrative medicine help with gut health issues?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Yes. Integrative medicine can help address bloating, IBS, reflux, food sensitivities, constipation, diarrhea, and chronic inflammation by identifying underlying contributors such as diet, microbiome imbalance, stress, or nutrient deficiencies.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>How is integrative weight loss different from traditional weight loss programs?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Integrative weight loss focuses on metabolic health, hormones, gut function, and inflammation rather than calorie restriction alone. The goal is sustainable fat loss and long-term health. When appropriate, FDA-approved weight loss medications may be prescribed as part of a comprehensive, medically supervised plan.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>Can integrative medicine help with hormone imbalance?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Yes. Hormone-related concerns such as fatigue, weight gain, low libido, mood changes, and sleep disruption may be evaluated using comprehensive lab testing and personalized treatment strategies. Treatment options may include lifestyle optimization, nutritional support, supplements, and prescription therapies when clinically appropriate, in collaboration with a supervising physician.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>Do you offer telemedicine visits in Pennsylvania?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Yes. Telemedicine appointments are available to patients located anywhere in Pennsylvania.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>Can lab work be done locally?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Yes. Lab testing can typically be completed at draw sites closest to you for convenience. Our labs are ordered through a third party company and you will be sent a lab draw kit that can be taken to any draw site for completion.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>What should I expect at my first integrative medicine visit?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Initial visits include a comprehensive review of symptoms, medical history, lifestyle factors, and goals. Appointments are longer than traditional care visits to allow for thorough evaluation and personalized planning.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-orange mb-3" style={{ color: '#b8752f' }}>How long does it take to see results?</h2>
                  <p className="text-green leading-relaxed" style={{ color: '#5d6b57' }}>
                    Some patients notice improvements within several weeks, while others require several months depending on the condition and complexity.
                  </p>
                </div>
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