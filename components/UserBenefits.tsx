"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "India’s First Gold Savings Aggregator",
  "Savings start at ₹100",
  "Compare & Choose from Trusted Jewellers",
  "Lock Price Today, Pay Later (Zero Interest)",
  "Save 40–50% on Wastage & Labour Costs",
  "One-Time, Anytime, Monthly Savings Options",
  "Natural 15–20% Appreciation Over Time",
  "100% Transparent, Secure, and Customer-Centric",
  "Empowering Families, Strengthening Futures",
];

export default function UserBenefits() {
  return (
    <section className="bg-[#4C148C] py-20 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-16">
          User benefits
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/userbenefits.png"
              alt="Gold Benefits"
              width={380}
              height={300}
              className="rounded-xl shadow-xl"
            />
          </motion.div>

          {/* Benefits List */}
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-yellow-400 mt-1" size={18} />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </motion.ul>

        </div>

      </div>
    </section>
  );
}