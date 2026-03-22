"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "AGS Thangamaaligai", logo: "/Tpartners/ags.png" },
  { name: "BG Jewellery", logo: "/Tpartners/bg.png" },
  { name: "Garudaa Gold Palace", logo: "/Tpartners/garuda.png" },
  { name: "Gokulam Jewellery", logo: "/Tpartners/gokulam.png" },
  { name: "Kamalam Jewellery", logo: "/Tpartners/kamalam.png" },
  { name: "OM Jewellery", logo: "/Tpartners/om.png" },
  { name: "Priyanga Bullion", logo: "/Tpartners/priyangabullion.png" },
  { name: "SKTM Jewellery", logo: "/Tpartners/sktm.png" },
  { name: "Thaksha Jewellery", logo: "/Tpartners/thaksha.png" },
];

export default function TrustedPartners() {
  return (
    <section
      id="partners"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black"
        >
          Our Trusted <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">Partners</span>
        </motion.h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-16">
          Grow your business with a powerful, easy-to-use tool.
        </p>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={110}
                height={70}
                
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}