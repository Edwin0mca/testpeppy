"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, IndianRupee, Headset } from "lucide-react";

const features = [
  {
    title: "Secure Payments & Trusted Jewellers",
    description:
      "Save and redeem your gold safely through your gold safety through verified jewelers.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Saving Options",
    description: "Choose One-Time, Monthly, Anytime, or Product-based schemes.",
    icon: Wallet,
  },
  {
    title: "Zero Platform Fees",
    description: "No hidden charges, invest 100% of your money.",
    icon: IndianRupee,
  },
  {
    title: "24/7 Support & Guidance",
    description: "Friendly support team ready to assist whenever you need.",
    icon: Headset,
  },
];

export default function WhyPeppyGold() {
  return (
    <section id="why-peppy-gold"className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Peppy Gold?
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}