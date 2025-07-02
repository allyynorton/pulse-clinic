import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-cream text-brown pb-12 pt-16">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl text-brown mb-4">About Allyson Norton, PA-C</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-8">
            Board-Certified Physician Assistant & Functional Medicine Specialist
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio Content */}
            <div>
              <div className="prose prose-lg text-green space-y-6 text-center">
                <p className="text-xl leading-relaxed">
                  I have always had a strong belief in functional medicine and finding the &quot;why&quot; behind illness. After 4 years of dedicated practice in urgent care, I have grown more and more uncomfortable with the way conventional medicine approaches and treats illness. Providing band-aid treatments for patients symptoms, rather than finding the root cause, perpetuates and sometimes exacerbates disease states. Let&apos;s switch the mindset from defensive medicine to offensive medicine.
                </p>
                <p className="text-xl leading-relaxed">
                  This is where the idea for Pulse came into play. Creating an integrative environment that joins both conventional medicine and functional medicine to treat patients. My goal is to deliver patient-centered care in order to find a natural solution to chronic disease. The focus of pulse is on gut health and healing in order to help with weight loss and treat other conditions such as diabetes, high blood pressure, and GI conditions.
                  Through a comprehensive evaluation I employ a systematic approach that investigates lifestyle factors, nutritional patterns, physical activity levels, environmental exposures, and other fundamental determinants of health to identify and address the root causes of disease.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-12 bg-white rounded-xl p-8 border border-cream">
                <h3 className="text-2xl font-semibold text-brown mb-6">Professional Credentials</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Master of Physician Assistant Studies (MPAS)</h4>
                      <p className="text-green">University of Florida, 2019</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Board Certified Physician Assistant</h4>
                      <p className="text-green">Licensed Healthcare Professional</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Certified Personal Trainer</h4>
                      <p className="text-green">NASM Certified since 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="space-y-8">
              {/* Philosophy Card */}
              <div className="bg-white rounded-2xl p-8 border border-cream">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brown mb-4">Clinic Mission</h3>
                  <p className="text-green leading-relaxed">
                    My mission is to deliver evidence-based, patient-centered care to find the root cause of chronic health issues. By looking at the patient as a whole, considering lifestyle habits, exercise, diet, genetic predispositions, and environmental factors, we can create a sustainable plan to treat current health concerns and prevent future health complications.
                  </p>
                </div>
              </div>

              {/* Personal Interests */}
              <div className="bg-white border border-cream rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-brown mb-6">Beyond the Clinic</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Avid Athlete</h4>
                      <p className="text-green">Committed to physical fitness and performance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Outdoor Enthusiast</h4>
                      <p className="text-green">Passionate about nature and outdoor activities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown">Dog Lover</h4>
                      <p className="text-green">Devoted to my canine companions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brown mb-4">Clinical Approach</h2>
            <p className="text-xl text-green max-w-3xl mx-auto">
              A comprehensive methodology that integrates evidence-based medicine with functional health principles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown">Holistic Assessment</h3>
              <p className="text-green">Comprehensive evaluation of physical, mental, and lifestyle factors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown">Root Cause Analysis</h3>
              <p className="text-green">Systematic investigation of underlying health determinants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown">Lifestyle Medicine</h3>
              <p className="text-green">Evidence-based interventions targeting nutrition, exercise, and environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown">Preventive Strategy</h3>
              <p className="text-green">Proactive health optimization and disease prevention protocols</p>
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
              href="/appointment-booking"
              className="bg-white text-brown px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown transition-colors"
            >
              Contact Practice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 