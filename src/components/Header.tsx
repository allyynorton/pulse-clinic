'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useContactPopup } from "./Footer";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openPopup } = useContactPopup();

  return (
    <header className="bg-cream shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo on the left */}
          <Link href="/" className="flex items-end group gap-3">
            <Image
              src="/pulse-logo.png"
              alt="Pulse Clinic Logo"
              width={70}
              height={70}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-brown-dark font-semibold text-xl hidden sm:block" style={{ marginBottom: '12px', transform: 'translateY(8px)' }}>Whole Health</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
            >
              Home
            </Link>
            <Link 
              href="/About" 
              className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
            >
              Services
            </Link>
            <Link 
              href="/consult-booking" 
              className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
            >
              Book Consult
            </Link>
            <button
              onClick={openPopup}
              className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-brown hover:text-brown-dark hover:bg-white/60 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream/50 bg-white/80 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/About" 
                className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/consult-booking" 
                className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consult
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openPopup();
                }}
                className="border-2 border-brown text-brown px-4 py-2 rounded-lg font-semibold bg-white hover:-translate-y-1 transition-transform duration-200 w-full text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 