"use client";

import { Radley } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <Image
        src="/notary-jrome.jpg"
        alt="Notary services background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className={`${radleyFont.className} relative z-10`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <motion.div
              className="p-6 bg-white/80 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">General Notary</h3>
              <p className="text-xl">
                Certified notarizations for documents, affidavits, and
                agreements. Included but not limited to: Will, Trust, Power of
                Attorney, and Deed of Trust.
              </p>
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="p-6 bg-white/80 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Mobile/Remote Notary
              </h3>
              <p className="text-xl">
                Commissioned in Washtenaw County and serving surrounding areas.
                Offering convenient on-site or secure online notarizations
                tailored to your schedule.
              </p>
            </motion.div>

            {/* Bottom Card (spans both columns, centered) */}
            <motion.div
              className="p-6 bg-white/80 rounded-xl shadow hover:shadow-lg transition md:col-span-2 md:w-1/2 md:mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">Printing</h3>
              <p className="text-xl">
                High-quality printing for business cards, flyers, brochures, and
                more. We use premium materials and advanced equipment to deliver
                professional results that showcase your brand.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
