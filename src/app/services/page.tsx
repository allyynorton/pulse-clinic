"use client";

import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-orange mb-4 animate-fade-in-up" style={{ color: '#b8752f' }}>Our Services</h1>
          <p className="text-xl text-green max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ color: '#5d6b57' }}>
            At Pulse Clinic, we blend natural and conventional care to provide a holistic approach to your wellness. Explore our core offerings below.
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
                <ul className="text-green text-center space-y-2 mb-3" style={{ color: '#5d6b57' }}>
                  <li>• Personalized Nutrition Planning</li>
                  <li>• Custom Workout Planning</li>
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

      {/* Laboratory Testing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange mb-4" style={{ color: '#b8752f' }}>How We Discover the Root Cause</h2>
            <p className="text-xl text-green max-w-3xl mx-auto" style={{ color: '#5d6b57' }}>
              Advanced laboratory testing reveals what standard panels miss. Here&apos;s what we test and what it tells us about your health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comprehensive Metabolic Panel */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Comprehensive Metabolic Panel</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Kidney function, liver health, blood sugar regulation, electrolyte balance, and protein levels.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Shows us if your body is processing nutrients correctly and if organ function is optimal.</p>
            </div>

            {/* Complete Blood Count */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Complete Blood Count</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Red and white blood cell counts, hemoglobin, hematocrit, and platelet levels.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Identifies anemia, inflammation, infection, and immune system function.</p>
            </div>

            {/* Thyroid Panel */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Comprehensive Thyroid Panel</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: TSH, T3, T4, reverse T3, and thyroid antibodies.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Explains fatigue, weight changes, mood issues, and metabolism problems. Standard testing often misses subtle thyroid dysfunction.</p>
            </div>

            {/* Hormone Panel */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Hormone & Adrenal Function</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Cortisol patterns, DHEA, sex hormones (estrogen, progesterone, testosterone), and adrenal function.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Uncovers stress response issues, hormone imbalances, and why you might feel constantly fatigued or anxious.</p>
            </div>

            {/* Stool Analysis */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Comprehensive Stool Analysis</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Gut microbiome composition, beneficial and harmful bacteria, yeast overgrowth, parasites, digestive enzymes, and inflammation markers.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Shows us why you have digestive issues, bloating, or food intolerances. The gut is the foundation of health.</p>
            </div>

            {/* Food Sensitivity Testing */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Food Sensitivity & Intolerance</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: IgG and IgA reactions to common foods, identifying hidden triggers for inflammation and symptoms.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Explains chronic inflammation, joint pain, headaches, skin issues, and digestive problems you couldn&apos;t pinpoint.</p>
            </div>

            {/* Nutrient Testing */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Nutrient & Vitamin Levels</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Vitamin D, B12, folate, iron, magnesium, zinc, and other essential nutrients.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Shows deficiencies that cause fatigue, brain fog, poor immune function, and slow healing—even if you eat well.</p>
            </div>

            {/* Inflammatory Markers */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Inflammatory Markers</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: C-reactive protein (CRP), homocysteine, and other markers of chronic inflammation.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Identifies hidden inflammation driving heart disease, diabetes, autoimmune conditions, and chronic pain.</p>
            </div>

            {/* Organic Acids Test */}
            <div className="bg-cream rounded-xl p-6 border border-cream/50">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange" style={{ color: '#b8752f' }}>Organic Acids Test</h3>
              <p className="text-green mb-3" style={{ color: '#5d6b57' }}>Reveals: Metabolic function, energy production, neurotransmitter metabolism, detoxification pathways, and yeast/bacterial overgrowth.</p>
              <p className="text-sm text-green/80" style={{ color: '#5d6b57' }}>Shows us how well your cells are producing energy and processing toxins—key to understanding fatigue and brain fog.</p>
            </div>
          </div>

          <div className="mt-12 bg-cream rounded-xl p-8 border-2 border-brown/20">
            <h3 className="text-2xl font-bold text-orange mb-4 text-center" style={{ color: '#b8752f' }}>Why This Matters</h3>
            <p className="text-lg text-green text-center max-w-4xl mx-auto leading-relaxed" style={{ color: '#5d6b57' }}>
              Standard lab panels are essential for diagnosing and monitoring many conditions. Functional medicine testing complements these by revealing imbalances and dysfunctions that might be contributing to recurring symptoms. When we understand the why—the root cause—we can create a comprehensive treatment plan that addresses both immediate symptoms with appropriate medications and underlying factors that may be causing issues to recur. This integrated approach helps you feel better now while working to prevent problems from happening again.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
