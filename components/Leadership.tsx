"use client";

import { motion, Variants } from "framer-motion";

const boardOfDirectors = [
  { name: "Mr. Arun Pradeep", role: "Founder & CEO, Global" },
  { name: "Mr. Emmanuel Mani", role: "Co-Founder & CTO, Global" },
  { name: "Mr. Ravindran Subramaniam", role: "Co-Founder & Head of Client Engagements, USA" },
  { name: "Mrs. Tabitha Emmanuel", role: "Co-Founder & Head of Security & Compliances, Global" },
  { name: "Mr. Praveen Kumar", role: "Regional Head of Business Development, India" },
];

const advisoryBoard = [
  { name: "Mr. CR Venkatesh (CRV)", role: "Founder & CEO – Dot Com Infoway" },
  { name: "Mr. Sethuraman Sathappan", role: "COO (Retired) – Emirates NBD Bank, India" },
  { name: "Mrs. Ramadevi S", role: "Founder & CEO – Elangi Thanga Maaligai" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIXED (no TypeScript error)
    },
  },
};

export default function Leadership() {
  return (
    <section className="relative overflow-hidden py-32 px-6 bg-gradient-to-r from-[#6816EF] to-[#4a0fb3] text-white">
      <div className="relative max-w-6xl mx-auto space-y-28">

        {/* BOARD */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Board of Directors
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardOfDirectors.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/20 hover:bg-white/20 transition"
              >
                <h3 className="text-lg font-semibold mb-1">
                  {member.name}
                </h3>

                <p className="text-sm text-white/80">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ADVISORY */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Advisory Board
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {advisoryBoard.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/20 hover:bg-white/20 transition"
              >
                <h3 className="text-lg font-semibold mb-1">
                  {member.name}
                </h3>

                <p className="text-sm text-white/80">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
