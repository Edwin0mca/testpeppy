"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Start Saving Gold with Confidence",
    points: [
      "At Peppy Gold, trust is the heart of everything we do.",
      "Our secure gold saving platform ensures a smooth and rewarding journey — helping you turn every small saving into a lifetime of golden security.",
      "Whether you're starting today or planning for tomorrow, Peppy Gold is your trusted partner for effortless gold savings.",
      "Create your account in minutes with a quick and secure KYC process.",
    ],
    image: "/piggy.png",
    alt: "Piggy bank with coins",
  },
  {
    title: "Smart Solutions to Grow Your Gold Savings",
    points: [
      "Load your wallet using UPI",
      "Use net banking with ease",
      "Pay with debit or credit cards",
      "Zero hassle and instant loading",
    ],
    image: "/graph.png",
    alt: "Growth graph visualization",
  },
  {
    title: "Boost Your Gold Saving Success",
    points: [
      "Smart Saving Analytics: Get clear insights into your saving patterns and optimize your growth.",
      "Milestone Rewards: Celebrate important saving achievements with exclusive bonuses.",
      "Automated Savings: Set up recurring deposits to build your gold portfolio effortlessly.",
    ],
    image: "/graph1.png",
    alt: "Financial growth chart",
  },
];

export default function GoldenSteps() {
  return (
    
    <section id="help" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enrich Your Future in <span className="text-purple-600">3 Golden Steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Text */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <ul className="space-y-4">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-white"
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
    
  );
}