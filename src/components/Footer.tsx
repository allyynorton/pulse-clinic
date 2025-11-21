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

  return (
    <footer className="bg-cream border-t border-cream/50 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
      </div>
    </footer>
  );
}

