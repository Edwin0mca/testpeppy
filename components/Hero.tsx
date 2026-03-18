"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [coins, setCoins] = useState<number[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: 8 }, () => Math.random() * 100);
    setCoins(positions);
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Gold Vault"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gold coins */}
      {coins.map((left, i) => (
        <motion.img
          key={i}
          src="/Coins/goldcoin.png"
          className="absolute w-7 opacity-80"
          style={{ left: `${left}%` }}
          initial={{ y: -200, rotate: 0, opacity: 0 }}
          animate={{ y: "120vh", rotate: 360, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Secure Your Future with the <br /> Best Gold Saving Platform
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 text-lg">
          Access Peppy Gold anytime, anywhere through our web app to explore
          gold savings, live rates, exclusive schemes, offers, and exciting
          gifts all in one place.
        </p>

        {/* ✅ Correct Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.peppygold.user&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#6816EF] px-8 py-3 rounded-xl text-white font-semibold hover:bg-[#5a12d4] transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
