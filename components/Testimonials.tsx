"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  message: string;
  name: string;
};

const userTestimonials: Testimonial[] = [
  {
    message:
      "Best and most trusted app for investing in gold. A safe and reliable platform for all gold savings.",
    name: "Jaya Sri",
  },
  {
    message:
      "This app really good and easy to use... lots of offers and rewards in it.",
    name: "Emmaniel Emmon",
  },
  {
    message:
      "Best and most trusted app for investing in gold. A safe and reliable platform for all gold savings.",
    name: "Jaya Sri",
  },
];

const partnerTestimonials: Testimonial[] = [
  {
    message:
      "An absolutely fantastic platform, perfectly suited for the new generation of jewellers and investors!",
    name: "Garudaa Gold Palace Pvt Ltd",
  },
  {
    message:
      "An excellent platform for jewellers to trade profitably without investing a single penny.",
    name: "AGS Thangamaaligai",
  },
  {
    message:
      "Best and most trusted platform for gold investments and jewellery schemes.",
    name: "Jaya Sri",
  },
];

function Carousel({ data }: { data: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative">

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Quote className="text-gray-400 mb-3" />

            {/* Stars */}
            <div className="flex gap-1 mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-600 text-sm mb-5">
              "{item.message}"
            </p>

            <h4 className="font-semibold text-gray-800">
              {item.name}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* NAVIGATION */}
      <button
        onClick={prev}
        className="absolute right-12 -top-12 bg-white border p-2 rounded-full shadow"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-0 -top-12 bg-white border p-2 rounded-full shadow"
      >
        <ChevronRight size={18} />
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-100">

      <div className="max-w-6xl mx-auto space-y-24">

        {/* USERS */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Loved by <span className="text-purple-600">Users</span>
          </h2>

          <Carousel data={userTestimonials} />
        </div>

        {/* PARTNERS */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Partner Say <span className="text-purple-600">About Peppy Gold</span>
          </h2>

          <Carousel data={partnerTestimonials} />
        </div>

      </div>

    </section>
  );
}