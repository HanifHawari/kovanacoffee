"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_LINK, PHONE } from "@/lib/routes";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Halo, saya *${form.name}*`,
      form.date ? `Tanggal kunjungan: ${form.date}` : "",
      form.guests ? `Jumlah orang: ${form.guests}` : "",
      form.message ? `\nPesan:\n${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    const waNumber = PHONE.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nama */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Nama <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Nama lengkap Anda"
          className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-charcoal placeholder:text-gray-medium/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all bg-white"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-charcoal mb-1.5">
          No. WhatsApp <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="0812-3456-7890"
          className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-charcoal placeholder:text-gray-medium/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all bg-white"
        />
      </div>

      {/* Date + Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1.5">
            Tanggal Kunjungan
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all bg-white"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-1.5">
            Jumlah Orang
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="50"
            value={form.guests}
            onChange={handleChange}
            placeholder="2"
            className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-charcoal placeholder:text-gray-medium/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all bg-white"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tulis pesan atau permintaan khusus di sini..."
          className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm text-charcoal placeholder:text-gray-medium/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all bg-white resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 active:scale-[0.97]"
      >
        <Send className="h-4 w-4" />
        Kirim via WhatsApp
      </button>

      <p className="text-gray-medium text-xs text-center">
        Form ini akan mengarahkan Anda ke WhatsApp dengan pesan yang sudah diisi otomatis.
      </p>
    </form>
  );
}
