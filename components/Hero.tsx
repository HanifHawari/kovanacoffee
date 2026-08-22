import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MAIN_WEBSITE_ROUTE } from "@/lib/routes";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              ☕ Specialty Coffee Shop
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Kopi Pilihan,{" "}
              <span className="italic text-accent">Suasana Nyaman</span>
            </h1>
            <p className="text-gray-medium text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Nikmati kopi specialty terbaik dari biji pilihan Nusantara, diseduh
              dengan penuh cinta di tempat yang nyaman untuk bekerja maupun
              bersantai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={MAIN_WEBSITE_ROUTE}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 active:scale-[0.97]"
              >
                Kunjungi Website Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-light px-7 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-accent hover:text-accent hover:bg-white"
              >
                Tentang Kami
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10 aspect-[4/3]">
              <Image
                src="/images/hero.jpg"
                alt="Kovana Coffee, suasana coffee shop yang nyaman"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
