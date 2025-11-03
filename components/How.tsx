// How.tsx
import React from "react";
import { Radley } from "next/font/google";
import { Calendar, FileText, MapPin, CheckCircle, Stamp } from "lucide-react";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

type HowProps = {
  bookingUrl?: string; // optional URL to booking page
  className?: string;
  id?: string;
  onBook?: () => void; // optional callback if you prefer handling booking via JS
};

const steps = [
  {
    id: 1,
    title: "Schedule",
    description:
      "Book your appointment at a time that works best for you using our easy online scheduling page.",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Prepare",
    description:
      "Gather the necessary documents and a valid form of identification. You’ll receive a confirmation and reminder with details on what to bring.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Meet",
    description:
      "Meet with me at your selected location for a quick and professional notarization experience.",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Complete",
    description:
      "Your documents are officially notarized, sealed, and ready for immediate use.",
    icon: CheckCircle,
  },
];

export default function How({
  bookingUrl = "/book",
  className = "",
  id,
  onBook,
}: HowProps) {
  const handleBook = (e?: React.MouseEvent) => {
    if (onBook) {
      e?.preventDefault();
      onBook();
      return;
    }
    // default behavior: navigate to bookingUrl
    if (bookingUrl.startsWith("http")) {
      window.location.href = bookingUrl;
    } else {
      // in-app navigation fallback
      window.location.assign(bookingUrl);
    }
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-20 bg-gray-300 ${radleyFont.className}`}
    >
      <div className="container mx-auto px-6 lg:px-8 ">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 text-xl">
            Getting your documents notarized is simple and hassle-free with my
            streamlined process.
          </p>
          <div className="flex justify-center">
            <Stamp className="mt-8 size-20 text-sky-600" aria-hidden />
          </div>
          {/* <div className="mt-8 flex justify-center">
            <button
              onClick={handleBook}
              className="inline-flex items-center gap-3 rounded-lg bg-sky-600 px-5 py-3 text-white font-medium shadow hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              aria-label="Book Now"
            >
              Book Now
            </button>
          </div> */}
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.id}
                className="group relative rounded-2xl border-2 border-gray-100 bg-gray-50 p-6 shadow-sm transition-transform hover:-translate-y-1"
                aria-labelledby={`how-step-${s.id}-title`}
              >
                <div className="flex justify-center">
                  <div className="mb-8">
                    <Icon className="h-10 w-10 text-sky-600" aria-hidden />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="min-w-0">
                    <div className="flex justify-center">
                      <span className="inline-flex items-center text-sm font-semibold text-gray-700">
                        <span className="rounded-full bg-sky-600 px-4 py-2 text-md font-large text-white mr-2 text-center">
                          {s.id}
                        </span>
                        <h3
                          id={`how-step-${s.id}-title`}
                          className="text-base md:text-2xl font-semibold text-gray-900"
                        >
                          {s.title}
                        </h3>
                      </span>
                    </div>
                    <div className="">
                      <p className="mt-3 text-lg text-gray-600 text-center p-2">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              if (onBook) {
                e.preventDefault();
                onBook();
              }
            }}
            className="inline-flex items-center gap-3 rounded-md border border-sky-600 bg-white px-5 py-3 text-sky-700 font-medium shadow-sm hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Book Your Appointment
          </a>
        </div> */}
      </div>
    </section>
  );
}
