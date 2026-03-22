"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const consultingPartners = [
  {
    name: "Mr. Manirathinam",
    role: "CEO – Priyanka Bullion",
    logo: "/Tpartners/priyangabullion.png",
  },
  {
    name: "Mr. Anandan",
    role: "Founder & CEO – AGS Thangamaaligai",
    logo: "/Tpartners/ags.png",
  },
  {
    name: "Mr. Gunaseelan",
    role: "Founder & CEO – Shree Gokulam Jewellers",
    logo: "/Tpartners/gokulam.png",
  },
  {
    name: "Mr. Venkatesh (CRV)",
    role: "Founder & CEO – Dot Com Infoway (DCI)",
    logo: "/Tpartners/dci.png",
  },
];

const communicationPartners = [
  "/partner/myoperator.webp",
  "/partner/airtel.webp",
  "/partner/act.webp",
];

const marketingPartners = [
  "/partner/facebook.png",
  "/partner/instagram.png",
  "/partner/google.png",
  "/partner/dci.png",
];

/* NEW SECTIONS */

const technologyPartners = [
  "/partner/googleads.png",
  "/partner/meta.png",
  "/partner/teams.png",
  "/partner/mongodb.png",
];

const paymentPartners = [
  "/partner/razorpay.png",
  "/partner/paysmart.png",
];

const incubationPartners = [
  "/partner/thiagarajar.png",
  "/partner/solamalai.png",
];

export default function Partners() {
  return (
    <section id="partners" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Business Consulting Partners */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black"
        >
          Business <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Consulting Partners</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {consultingPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={60}
                height={60}
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {partner.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication Partners */}

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black"
        >
          Communication <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Partners</span>
        </motion.h2>

        <div className="flex justify-center gap-16 mb-24 flex-wrap">
          {communicationPartners.map((logo, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image src={logo} alt="partner" width={120} height={60} />
            </motion.div>
          ))}
        </div>

        {/* Marketing Partners */}

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black"
        >
        
        </motion.h2>

        <div className="flex justify-center gap-16 mb-24 flex-wrap">
          {marketingPartners.map((logo, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image src={logo} alt="partner" width={90} height={60} />
            </motion.div>
          ))}
        </div>

        {/* Technology Partners */}

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Technology <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Partners</span>
        </h2>

        <div className="flex justify-center gap-16 mb-24 flex-wrap">
          {technologyPartners.map((logo, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image src={logo} alt="tech partner" width={110} height={60} />
            </motion.div>
          ))}
        </div>

        {/* Payment Partner */}

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Payment <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Partner</span>
        </h2>

        <div className="flex justify-center gap-20 mb-24 flex-wrap">
          {paymentPartners.map((logo, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image src={logo} alt="payment partner" width={170} height={80} />
            </motion.div>
          ))}
        </div>

        {/* Incubation Collaboration */}

        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Incubation <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Collaboration</span>
        </h2>

        <div className="flex justify-center gap-20 flex-wrap">
          {incubationPartners.map((logo, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Image src={logo} alt="incubation partner" width={150} height={80} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}