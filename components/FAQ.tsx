"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah Kovana Coffee buka setiap hari?",
    answer:
      "Ya, kami buka setiap hari. Senin - Jumat pukul 08:00 - 22:00, Sabtu 09:00 - 23:00, dan Minggu 09:00 - 21:00.",
  },
  {
    question: "Apakah tersedia wifi dan colokan listrik?",
    answer:
      "Tentu! Kami menyediakan wifi kecepatan tinggi dan banyak colokan listrik di setiap meja. Cocok banget buat kerja remote atau ngerjain tugas.",
  },
  {
    question: "Bisa reservasi tempat untuk acara?",
    answer:
      "Bisa! Hubungi kami via WhatsApp untuk reservasi meja atau booking tempat untuk gathering, meeting, atau acara kecil lainnya.",
  },
  {
    question: "Apakah ada menu non-coffee?",
    answer:
      "Ada banyak! Kami punya Thai Tea, Green Thai Tea, Lemon Tea, Peach Tea, Apple Soda, Melon Squash, dan berbagai mocktail.",
  },
  {
    question: "Di mana lokasi Kovana Coffee?",
    answer:
      "Kami berlokasi di B2 No, Jl. Beruang Raya No.2, Jayamukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17550.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4">
              Pertanyaan yang{" "}
              <span className="italic text-accent">Sering Ditanyakan</span>
            </h2>
            <p className="text-gray-medium leading-relaxed">
              Punya pertanyaan lain? Jangan ragu untuk menghubungi kami via
              WhatsApp atau datang langsung ke lokasi.
            </p>
          </div>

          {/* Right, accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 ${
                  openIndex === index
                    ? "border-accent/30 bg-cream/50 shadow-sm"
                    : "border-gray-light/60 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-charcoal text-sm pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-medium flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-medium text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
