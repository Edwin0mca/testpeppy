"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

function GoldCoin({ size = 28 }: { size?: number }) {
  const id = useMemo(() => `cg${Math.random().toString(36).slice(2, 7)}`, []);
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" fill={`url(#${id})`} stroke="#b8860b" strokeWidth="2" />
      <circle cx="20" cy="20" r="13" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4" />
      <text x="20" y="25" textAnchor="middle" fill="#8B6914" fontSize="14" fontWeight="bold">₹</text>
      <defs>
        <radialGradient id={id} cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#fff4a3" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </radialGradient>
      </defs>
    </svg>
  );
}

interface CoinData {
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    setCoins(
      Array.from({ length: 12 }, () => ({
        left: Math.random() * 94 + 3,
        size: 20 + Math.random() * 16,
        duration: 5 + Math.random() * 4,
        delay: Math.random() * 7,
      }))
    );
  }, []);

  return (
    <div className="relative">
      {/* White background behind the triangle cut */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-white z-0" />

      <section
        className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />

        {/* Dark overlay — matches screenshot darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/80" />

        {/* Falling Coins */}
        {coins.map((c, i) => (
          <motion.div
            key={i}
            className="absolute top-0 pointer-events-none"
            style={{ left: `${c.left}%` }}
            animate={{
              y: ["-60px", "110vh"],
              opacity: [0, 0.85, 0.85, 0],
              rotateY: [0, 720],
            }}
            transition={{
              duration: c.duration,
              repeat: Infinity,
              delay: c.delay,
              ease: "linear",
            }}
          >
            <GoldCoin size={c.size} />
          </motion.div>
        ))}

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Secure Your Future with the <br />
            Best Gold Saving Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg mb-8"
          >
            Access Peppy Gold anytime, anywhere through our web app to explore
            gold savings, live rates, exclusive schemes, offers, and exciting
            gifts all in one place.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.peppygold.user&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#6816EF] px-8 py-3 rounded-xl text-white font-semibold text-base shadow-lg shadow-purple-700/40 hover:bg-[#5a12d4] transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </div>
  );
}
