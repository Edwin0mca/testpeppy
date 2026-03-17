"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-700 to-purple-500 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Our Certifications & Recognitions
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Startup India Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-gray-700 rounded-2xl p-8 shadow-lg text-center"
          >
            <Image
              src="/certifications/startupuindia-certificate.jpg"
              alt="Startup India Certificate"
              width={320}
              height={200}
              className="mx-auto mb-6 rounded"
            />

            <h3 className="font-semibold text-lg mb-3">
              StartupIndia Recognition
            </h3>

            <p className="text-sm leading-relaxed">
              Peppy Gold Technologies Private Limited is officially recognized
              by StartupIndia, validating our innovative approach to digital
              gold savings and our commitment to transforming the traditional
              gold investment ecosystem.
            </p>
          </motion.div>

          {/* DUNS Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-gray-700 rounded-2xl p-8 shadow-lg text-center"
          >

            <div className="flex justify-center items-center gap-6 mb-6">

              <Image
                src="/certifications/DUNS.jpeg"
                alt="DUNS Certificate"
                width={150}
                height={180}
                className="rounded"
              />

              <Image
                src="/certifications/PEPPY-GOLD-TECHNOLOGIES-PVT-LTD-QR-Code.jpg"
                alt="DUNS QR Code"
                width={110}
                height={110}
                className="rounded"
              />

            </div>

            <h3 className="font-semibold text-lg mb-3">
              D–U–N–S® Registration
            </h3>

            <p className="text-sm leading-relaxed">
              We are registered with Dun & Bradstreet under D–U–N–S® Number
              <span className="font-semibold"> 77–267–8924</span>. This
              registration confirms our verified global business identity and
              strengthens trust among customers, partners, and stakeholders
              worldwide.
            </p>

          </motion.div>

        </div>
      </div>

    </section>
  );
}