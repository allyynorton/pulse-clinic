'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#f7f4ef] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24 py-2">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/pulse-logo.png"
              alt="Pulse Clinic Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/About" 
              className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/consult-booking" 
              className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
            >
              Book Consult
            </Link>
            <Link 
              href="/contact" 
              className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-[#a05a36] hover:text-[#7a8b74] hover:bg-[#f7f4ef]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden py-4 border-t border-[#e5e1d8] bg-[#f7f4ef]">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/About" 
                className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/consult-booking" 
                className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consult
              </Link>
              <Link 
                href="/contact" 
                className="text-[#7a8b74] hover:text-[#a05a36] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 