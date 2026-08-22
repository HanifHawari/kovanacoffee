import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { MAIN_WEBSITE_ROUTE, WHATSAPP_LINK } from "@/lib/routes";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent-light font-medium text-sm tracking-widest uppercase mb-4">
            Siap Menikmati Kopi Terbaik?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Kunjungi Website Kami untuk{" "}
            <span className="italic text-accent-light">Order & Reservasi</span>
          </h2>
          <p className="text-gray-light text-base md:text-lg leading-relaxed mb-10">
            Pesan kopi favorit Anda secara online, reservasi tempat untuk acara
            spesial, atau eksplor menu lengkap kami di website utama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={MAIN_WEBSITE_ROUTE}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97]"
            >
              Kunjungi Website Kami
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
