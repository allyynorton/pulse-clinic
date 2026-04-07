"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";

// Create a context for managing the contact popup state
const ContactPopupContext = createContext<{
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export const useContactPopup = () => useContext(ContactPopupContext);

export function ContactPopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <ContactPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
      {/* Contact Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-brown hover:text-orange transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-orange mb-4" style={{ color: '#b8752f' }}>
              Contact Us
            </h2>
            <p className="text-green mb-6" style={{ color: '#5d6b57' }}>
              We&apos;d love to hear from you! Please reach out using the information below.
            </p>
            <div className="space-y-6 pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange mb-2" style={{ color: '#b8752f' }}>
                  Email
                </h3>
                <a
                  href="mailto:contact@pulsewholehealth.com"
                  className="text-green hover:text-orange transition-colors text-lg"
                  style={{ color: '#5d6b57' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#b8752f'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5d6b57'}
                >
                  contact@pulsewholehealth.com
                </a>
              </div>
              <div className="pt-4 border-t border-cream/50">
                <Link
                  href="/consult-booking"
                  onClick={closePopup}
                  className="block w-full px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  style={{ 
                    backgroundColor: '#a05a36',
                    display: 'block',
                    minHeight: '48px',
                    lineHeight: '1.5',
                    paddingTop: '12px',
                    paddingBottom: '12px'
                  }}
                >
                  Book a 15 Minute Consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContactPopupContext.Provider>
  );
}

export default function Footer() {
  const { openPopup } = useContactPopup();
  const [openDisclosure, setOpenDisclosure] = useState<string | null>(null);

  const toggleDisclosure = (id: string) => {
    setOpenDisclosure(openDisclosure === id ? null : id);
  };

  return (
    <footer className="bg-cream border-t border-cream/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-green text-sm" style={{ color: '#5d6b57' }}>
              © {new Date().getFullYear()} Pulse Whole Health. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openPopup}
              className="text-green hover:text-orange transition-colors text-sm font-medium"
              style={{ color: '#5d6b57' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b8752f'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d6b57'}
            >
              Contact
            </button>
            <Link
              href="/About"
              className="text-green hover:text-orange transition-colors text-sm font-medium"
              style={{ color: '#5d6b57' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b8752f'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d6b57'}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-green hover:text-orange transition-colors text-sm font-medium"
              style={{ color: '#5d6b57' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b8752f'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d6b57'}
            >
              Services
            </Link>
            <Link
              href="/consult-booking"
              className="text-green hover:text-orange transition-colors text-sm font-medium"
              style={{ color: '#5d6b57' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b8752f'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d6b57'}
            >
              Book Consult
            </Link>
          </div>
        </div>

        {/* Disclosure Links */}
        <div className="border-t border-cream/50 pt-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm" style={{ color: '#5d6b57' }}>
            <button onClick={() => toggleDisclosure('privacy')} className="underline hover:no-underline cursor-pointer">
              Notice of Privacy Practices
            </button>
            <span className="hidden sm:inline">|</span>
            <button onClick={() => toggleDisclosure('telehealth')} className="underline hover:no-underline cursor-pointer">
              Telehealth Disclosure
            </button>
            <span className="hidden sm:inline">|</span>
            <button onClick={() => toggleDisclosure('cashpay')} className="underline hover:no-underline cursor-pointer">
              Cash Pay Disclosure
            </button>
          </div>

          {/* Expandable Disclosures */}
          {openDisclosure === 'privacy' && (
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 text-xs sm:text-sm leading-relaxed" style={{ color: '#5d6b57' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#b8752f' }}>Notice of Privacy Practices</h4>
              <p className="mb-2">Pulse Whole Health I, P.C. is committed to protecting your health information. We follow all applicable federal and state privacy laws, including HIPAA (Health Insurance Portability and Accountability Act). Your protected health information (PHI) will be used only for treatment, payment, and healthcare operations unless you provide written authorization or as otherwise permitted by law.</p>
              <p className="mb-2">You have the right to request restrictions on how your PHI is used, to receive confidential communications, to inspect and obtain copies of your health records, to request amendments, and to receive an accounting of disclosures.</p>
              <p>For questions about our privacy practices or to request a full copy of our Notice of Privacy Practices, please contact us at contact@pulsewholehealth.com.</p>
            </div>
          )}

          {openDisclosure === 'telehealth' && (
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 text-xs sm:text-sm leading-relaxed" style={{ color: '#5d6b57' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#b8752f' }}>Telehealth Disclosure</h4>
              <p className="mb-2">Pulse Whole Health provides healthcare services via telehealth (audio and/or video communication technology). Telehealth is not a substitute for in-person emergency care. If you are experiencing a medical emergency, call 911 immediately.</p>
              <p className="mb-2">By scheduling a telehealth appointment, you acknowledge that: telehealth involves electronic communication of personal health information; technical difficulties may occur; your provider may determine that telehealth is not appropriate for your condition and may recommend an in-person visit.</p>
              <p>Telehealth services are currently available to patients located in the state of Pennsylvania. Clinical services are provided by Allyson Norton, PA-C under the supervision of David G. Marx, M.D., Medical Director.</p>
            </div>
          )}

          {openDisclosure === 'cashpay' && (
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 text-xs sm:text-sm leading-relaxed" style={{ color: '#5d6b57' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#b8752f' }}>Cash Pay Disclosure</h4>
              <p className="mb-2">Pulse Whole Health is a cash-pay (direct-pay) practice. We do not accept or bill insurance. Payment is due at the time of service. We accept major credit cards, debit cards, and HSA/FSA cards.</p>
              <p className="mb-2">Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges for scheduled services. You may request a Good Faith Estimate before your appointment.</p>
              <p>If you receive a bill that is at least $400 more than your Good Faith Estimate, you may dispute the bill. For questions or to request a Good Faith Estimate, contact us at contact@pulsewholehealth.com.</p>
            </div>
          )}

          {/* Corporate Compliance */}
          <div className="text-center text-xs mt-4" style={{ color: '#8a9584' }}>
            <p>Pulse Whole Health I, P.C. is a Pennsylvania Professional Corporation. Medical Director: David G. Marx, M.D.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

