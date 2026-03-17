"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    type: "General Inquiry / Support",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-gray-50 py-24 px-6 pt-32 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Please use the form below to contact our team.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button className="w-full bg-[#6816EF] text-white py-3 rounded-lg">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}