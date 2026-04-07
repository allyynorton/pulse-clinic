"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "intro",
    name: "Get to Know Each Other",
    duration: "15 min",
    price: "$10",
    description:
      "A casual conversation to see if we're a good fit. No pressure, just connection.",
    bookingUrl:
      "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?s=6970f96546010515beda9aa5",
  },
  {
    id: "integrative",
    name: "Integrative Care Consultation",
    duration: "1 hour",
    price: "$300",
    description:
      "A comprehensive deep-dive into your health history, labs, and goals with a personalized care plan.",
    bookingUrl:
      "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?s=6970f84846010515beda91b5",
  },
  {
    id: "preventative",
    name: "Initial Preventative Care Consultation",
    duration: "45 min",
    price: "$250",
    description:
      "Proactive health planning focused on prevention, screening, and long-term wellness.",
    bookingUrl:
      "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?s=6970faf646010515bedac7c4",
  },
  {
    id: "followup",
    name: "Follow Up Consultation",
    duration: "30 min",
    price: "$175",
    description:
      "Check in on your progress, review labs, and adjust your care plan as needed.",
    bookingUrl:
      "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings?s=6970fa1546010515bedab9e6",
  },
];

export default function ConsultBooking() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [showLaunchNotice, setShowLaunchNotice] = useState(true);

  useEffect(() => {
    if (!widgetContainerRef.current) return;

    // Inject the Practice Better widget using their official embed code
    widgetContainerRef.current.innerHTML = `
      <style>.better-inline-booking-widget{position:relative;overflow:hidden}.better-inline-booking-widget iframe{position:absolute;top:0;left:0;width:100%;height:100%}</style>
      <div class="better-inline-booking-widget" data-url="https://my.practicebetter.io" data-booking-page="" data-hash="696fc6840114e12df0a35929" data-theme="32a363" data-theme-accent="e74c3c" style="width:100%;max-width:700px;height:800px;margin:0 auto;" data-scrollbar-visible="false"></div>
    `;

    // Load the widget script
    const existingScript = document.querySelector(
      'script[src="https://cdn.practicebetter.io/assets/js/booking.widget.js"]'
    );
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.src = "https://cdn.practicebetter.io/assets/js/booking.widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Check if widget iframe actually rendered content after a delay
    const checkTimer = setTimeout(() => {
      const iframe = widgetContainerRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setWidgetLoaded(true));
        try {
          if (iframe.contentDocument?.body?.innerHTML) {
            setWidgetLoaded(true);
          }
        } catch {
          setTimeout(() => {
            if (iframe.offsetHeight > 50) {
              setWidgetLoaded(true);
            }
          }, 3000);
        }
      }
    }, 2000);

    return () => {
      clearTimeout(checkTimer);
      const s = document.querySelector(
        'script[src="https://cdn.practicebetter.io/assets/js/booking.widget.js"]'
      );
      if (s) s.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f5f2eb]"
      style={{ backgroundColor: "#f5f2eb" }}
    >
      {/* Pre-launch notice popup */}
      {showLaunchNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#b8752f' }}>
              Opening June 1st
            </h2>
            <p className="text-base sm:text-lg mb-6 leading-relaxed" style={{ color: '#5d6b57' }}>
              Pulse Whole Health officially opens on <strong>June 1, 2026</strong>. You are welcome to browse available appointment times and book your consultation now for any date on or after our opening day.
            </p>
            <button
              onClick={() => setShowLaunchNotice(false)}
              className="px-8 py-3 rounded-lg text-white font-semibold text-base transition-colors hover:opacity-90"
              style={{ backgroundColor: '#b8752f' }}
            >
              Got It
            </button>
          </div>
        </div>
      )}

      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className="text-3xl sm:text-5xl mb-4"
              style={{ color: "#b8752f" }}
            >
              Book Your Consult
            </h1>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto"
              style={{ color: "#5d6b57" }}
            >
              Ready to take the first step towards feeling better, moving
              better, and living better? Schedule your consult with Ally below!
            </p>
          </div>

          {/* Practice Better Embedded Widget (shows on production HTTPS) */}
          <div
            ref={widgetContainerRef}
            style={{ display: widgetLoaded ? "block" : "none" }}
            className="bg-white rounded-xl p-4 sm:p-8 shadow-lg"
          />

          {/* Fallback: Service cards with booking links (shows when widget can't load) */}
          {!widgetLoaded && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border-2 border-transparent hover:border-[#b8752f] transition-all"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex-1">
                        <h3
                          className="text-lg sm:text-xl font-semibold mb-1"
                          style={{ color: "#b8752f" }}
                        >
                          {service.name}
                        </h3>
                        <p
                          className="text-sm mb-2"
                          style={{ color: "#5d6b57" }}
                        >
                          {service.duration} &middot; {service.price}
                        </p>
                        <p className="text-sm sm:text-base" style={{ color: "#5d6b57" }}>
                          {service.description}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <a
                          href={service.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-5 py-2 rounded-lg text-white text-sm font-semibold text-center whitespace-nowrap transition-colors hover:opacity-90"
                          style={{ backgroundColor: "#b8752f" }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cash pay disclosure */}
          <div className="mt-8 p-4 rounded-lg text-center text-sm sm:text-base font-medium" style={{ backgroundColor: 'rgba(184, 117, 47, 0.08)', color: '#5d6b57' }}>
            <p>Pulse Whole Health is a cash-pay practice and does not accept insurance. All fees are due at time of booking.</p>
          </div>

          {/* Supervisory disclosure */}
          <div className="mt-4 p-4 rounded-lg text-center text-xs sm:text-sm" style={{ backgroundColor: 'rgba(93, 107, 87, 0.08)', color: '#5d6b57' }}>
            <p>Clinical services are provided by Allyson Norton, PA-C under the supervision of David G. Marx, M.D., Medical Director, pursuant to a Written Supervisory Agreement filed with the Pennsylvania State Board of Medicine.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
