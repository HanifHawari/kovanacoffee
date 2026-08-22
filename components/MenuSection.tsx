import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/data/menu";
import { MAIN_WEBSITE_ROUTE } from "@/lib/routes";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Menu Unggulan
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Pilihan Favorit Kami
          </h2>
          <p className="text-gray-medium mt-4 max-w-md mx-auto">
            Dari kopi specialty hingga pastry segar, setiap sajian dibuat dengan
            bahan berkualitas dan penuh perhatian.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-charcoal/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent capitalize">
                    {item.category === "non-coffee"
                      ? "Non-Coffee"
                      : item.category === "food"
                      ? "Food"
                      : "Coffee"}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold text-sm">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={MAIN_WEBSITE_ROUTE}
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-7 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-white"
          >
            Lihat Menu Lengkap
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
