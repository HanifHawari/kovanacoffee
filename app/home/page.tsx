import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedMenu from "@/components/main/FeaturedMenu";
import QuickInfoBar from "@/components/main/QuickInfoBar";
import { MENU_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE } from "@/lib/routes";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[500px]">
          <Image
            src="/images/hero.jpg"
            alt="Kovana Coffee"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <p className="text-accent-light font-medium text-sm tracking-widest uppercase mb-4">
                  ☕ Selamat Datang
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Kovana{" "}
                  <span className="italic text-cream">Coffee</span>
                </h1>
                <p className="text-gray-light text-base md:text-lg leading-relaxed mb-8 max-w-md">
                  Temukan menu lengkap, reservasi meja, dan nikmati pengalaman
                  kopi terbaik di Bandung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={MENU_ROUTE}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 active:scale-[0.97]"
                  >
                    Lihat Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={CONTACT_ROUTE}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                  >
                    Reservasi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <FeaturedMenu />

      {/* Highlight Section */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-charcoal/8 aspect-[4/3]">
                <Image
                  src="/images/about.jpg"
                  alt="Interior Kovana Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-white rounded-2xl -z-10" />
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
                Cerita Kami
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Lebih dari Sekadar{" "}
                <span className="italic text-accent">Secangkir Kopi</span>
              </h2>
              <p className="text-gray-medium leading-relaxed mb-6">
                Kovana Coffee lahir dari kecintaan terhadap kopi Nusantara. Kami
                memilih langsung biji kopi terbaik dari petani lokal, lalu
                mengolahnya dengan teknik roasting yang tepat untuk cita rasa
                yang kaya dan karakter yang unik.
              </p>
              <Link
                href={ABOUT_ROUTE}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dark transition-colors"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <QuickInfoBar />
    </>
  );
}
