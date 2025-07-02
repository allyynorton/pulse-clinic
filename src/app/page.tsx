import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      {/* Hero Section */}
      <section className="relative text-brown pb-12 pt-16" style={{ backgroundColor: '#f5f2eb' }}>
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <Image
            src="/pulse-logo.png"
            alt="Pulse Clinic Logo Large"
            width={380}
            height={380}
            className="mb-6"
            priority
          />
          <div className="text-xl md:text-2xl text-brown mb-4">Blending natural and conventional care for a more holistic approach to wellness.</div>
          <p className="text-xl text-green max-w-4xl mx-auto mb-8">
            At Pulse we strongly believe that no one should receive cookie cutter healthcare because everyone is unique in their own way. We all have different exposures, genetics, lifestyle habits, etc. which is why it is important to have a unique and individualized approach to treatment. Focusing on finding the root causes of disease allows us to develop a personalized treatment plan that can give you the most natural solution to your symptoms and prevent future illness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/About"
              className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-semibold bg-white hover:bg-brown hover:text-white transition-colors text-center"
            >
              About
            </Link>
            <Link 
              href="/services"
              className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-semibold bg-white hover:bg-brown hover:text-white transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brown mb-6">Why Choose Pulse Clinic?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brown">Experienced Medical Provider</h3>
                    <p className="text-green">Ally is a board-certified physician assistant with 4 years of experience in urgent care/family medicine and a strong passion for integrative medicine.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brown">Healthcare from the Comfort of Your Home</h3>
                    <p className="text-green">Experience expert care and support through our secure telemedicine platform—no travel required.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-brown" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-brown">Patient-Centered Care</h3>
                    <p className="text-green">Personalized treatment plans that prioritize your health goals by finding the root cause of illness.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-cream">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brown mb-4">Join Our Community</h3>
                <p className="text-green mb-6">
                  Become part of our growing family of satisfied patients who trust us with their healthcare needs.
                </p>
                <Link 
                  href="/contact"
                  className="bg-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange transition-colors"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-green">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 text-green max-w-2xl mx-auto">
            Schedule your consult today and experience the difference that personalized, professional healthcare can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consult-booking"
              className="bg-white text-brown px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Book Your Consult
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-brown px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
