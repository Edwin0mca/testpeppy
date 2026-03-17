"use client";

import { motion } from "framer-motion";

const coins = [
  { left: "10%", delay: 0, duration: 8 },
  { left: "25%", delay: 2, duration: 10 },
  { left: "40%", delay: 1, duration: 9 },
  { left: "60%", delay: 3, duration: 11 },
  { left: "75%", delay: 0.5, duration: 9 },
  { left: "90%", delay: 2.5, duration: 10 },
];

export default function GoldRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {coins.map((coin, i) => (
        <motion.img
          key={i}
          src="/coins/goldcoin.png"
          className="absolute opacity-70"
          style={{
            left: coin.left,
            width: "28px",
          }}
          initial={{ y: "-10vh", rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            rotate: 180,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: coin.duration,
            repeat: Infinity,
            delay: coin.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}