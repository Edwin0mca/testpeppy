"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4
                 backdrop-blur-xl bg-black/30
                 border-b border-white/20
                 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
    >
      {/* ✨ Glossy Shine Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo/logo.png"
            alt="Peppy Gold"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-white font-bold text-xl tracking-wide">
            Peppy Gold
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          
          <Link
            href="/#home"
            className="text-white text-sm font-medium hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            href="/#why-peppy-gold"
            className="text-white text-sm font-medium hover:text-yellow-400 transition"
          >
            Why Peppy Gold
          </Link>

          <Link
            href="/#help"
            className="text-white text-sm font-medium hover:text-yellow-400 transition"
          >
            How It Helps
          </Link>

          <Link
            href="/FAQ"
            className="text-white text-sm font-medium hover:text-yellow-400 transition"
          >
            FAQ
          </Link>

          <Link
            href="/#partners"
            className="text-white text-sm font-medium hover:text-yellow-400 transition"
          >
            Partners
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.peppygold.user&pcampaignid=web_share"
          className="bg-[#6816EF] hover:bg-[#5a12d4] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-md"
        >
          Get Started
        </Link>

      </div>
    </motion.nav>
  );
}
