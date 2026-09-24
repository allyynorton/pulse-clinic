import Link from "next/link";

/**
 * Booking is intentionally a link-out, not an embedded widget.
 *
 * The Practice Better booking iframe loads Practice Better's own Google Tag
 * Manager, GA4, and advertising tags (plus Meta, LinkedIn, Reddit, Bing and
 * others) onto this origin. Linking out in a new tab keeps all third-party
 * tracking off pulsewholehealth.com, which is a HIPAA compliance requirement
 * for this practice. Do not reintroduce the iframe embed.
 */
const BOOKING_URL =
  "https://my.practicebetter.io/#/696fc6840114e12df0a35929/bookings";

export default function ConsultBooking() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f2eb" }}>
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-8 sm:mb-10">
            <h1
              className="text-3xl sm:text-5xl mb-4"
              style={{ color: "#b8752f" }}
            >
              Book Your Consultation
            </h1>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto"
              style={{ color: "#5d6b57" }}
            >
              Ready to take the next step in your health journey? Booking with
              Pulse Whole Health is simple and secure.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-10 border border-cream shadow-lg">
            <h2
              className="text-2xl font-semibold mb-4 text-center"
              style={{ color: "#b8752f" }}
            >
              How it works
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-center max-w-2xl mx-auto"
              style={{ color: "#5d6b57" }}
            >
              When you click the button below, you&rsquo;ll be taken to our
              secure booking system (Practice Better), where you can view
              available appointment times, select the visit type that&rsquo;s
              right for you, and complete your booking. You&rsquo;ll receive a
              confirmation email with next steps for your intake.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg text-white text-lg font-semibold text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#a05a36" }}
              >
                Book Your Consultation &rarr;
              </a>
            </div>

            <p
              className="mt-6 text-sm text-center"
              style={{ color: "#8a9584" }}
            >
              Opens in a new tab.
            </p>
          </div>

          <p
            className="mt-8 text-center text-base"
            style={{ color: "#5d6b57" }}
          >
            Questions before booking? Please reach out via our{" "}
            <Link
              href="/About"
              className="underline hover:no-underline"
              style={{ color: "#b8752f" }}
            >
              About page
            </Link>{" "}
            or email us at contact@pulsewholehealth.com.
          </p>

          {/* Cash pay disclosure */}
          <div
            className="mt-8 p-4 rounded-lg text-center text-sm sm:text-base font-medium"
            style={{ backgroundColor: "rgba(184, 117, 47, 0.08)", color: "#5d6b57" }}
          >
            <p>
              Pulse Whole Health is a cash-pay practice and does not accept
              insurance. All fees are due at time of booking.
            </p>
          </div>

          {/* Supervisory disclosure */}
          <div
            className="mt-4 p-4 rounded-lg text-center text-xs sm:text-sm"
            style={{ backgroundColor: "rgba(93, 107, 87, 0.08)", color: "#5d6b57" }}
          >
            <p>
              Clinical services are provided by Allyson Norton, PA-C under the
              supervision of David G. Marx, M.D., Medical Director, pursuant to
              a Written Supervisory Agreement filed with the Pennsylvania State
              Board of Medicine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
