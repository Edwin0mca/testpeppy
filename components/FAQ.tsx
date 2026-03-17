"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const userFaq = [
  {
    question: "What is the minimum amount required to start saving in gold?",
    answer: "You can start saving gold with Peppy Gold from as little as ₹100.",
  },
  {
    question: "What types of gold saving schemes are available on Peppy Gold?",
    answer:
      "We offer One-Time, Monthly, Anytime, and Product-Based Gold Saving Schemes designed to suit different saving patterns and life goals.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Peppy Gold maintains full transparency with zero hidden charges.",
  },
  {
    question: "Are there any platform charges for jewellers?",
    answer:
      "Peppy Gold offers flexible partnership options with transparent pricing models for jewellers.",
  },
];

const partnerFaq = [
  {
    question: "How do I become a partner?",
    answer:
      "You can apply through our partner onboarding process where our team will guide you through verification and integration.",
  },
  {
    question: "What are the benefits for partners?",
    answer:
      "Partners gain access to a large customer base, digital gold saving infrastructure, and marketing support.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No large setup cost. Our platform allows jewellers to onboard easily with minimal initial investment.",
  },
];

function FAQItem({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left hover:bg-gray-50 transition px-2 rounded"
      >
        <span className="text-gray-800 font-medium">{item.question}</span>
        {open ? (
          <Minus className="text-purple-600" size={18} />
        ) : (
          <Plus className="text-purple-600" size={18} />
        )}
      </button>

      {open && (
        <div className="pb-5 px-2">
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 py-24 px-6 pt-32">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-purple-600" size={34} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-purple-600">Frequently</span> Asked Questions
          </h2>

          <p className="text-gray-500 mt-3">
            Common Queries Solved, Quick Answers For Users
          </p>
        </div>

        {/* User FAQs */}
        <div className="bg-white rounded-xl shadow-sm mb-14 px-8 border border-gray-100">
          {userFaq.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>

        {/* Partner Section */}
        <h3 className="text-center text-gray-500 mb-6 font-medium">
          For Partners
        </h3>

        <div className="bg-white rounded-xl shadow-sm px-8 border border-gray-100">
          {partnerFaq.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}