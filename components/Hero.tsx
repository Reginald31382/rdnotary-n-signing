"use client";

import { Radley } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white mt-8 pt-30 md:pt-40 text-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h1
          className={`text-6xl md:text-7xl font-bold mb-4 ${radleyFont.className}`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          R|D Notary & Signing
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className={`text-xl md:text-2xl mb-6 ${radleyFont.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Professional Notary Services You Can Trust
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => router.push("/schedule")}
          className="inline-block bg-blue-600 text-white px-6 py-3 mb-8 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Signing
        </motion.button>

        <p className="mb-4">
          Licensed and Commissioned By the State of Michigan & National Notary
          Association
        </p>
      </div>
    </section>
  );
}
