"use client";

import { ContactPopupProvider } from "./Footer";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ContactPopupProvider>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </ContactPopupProvider>
  );
}

