import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/data/menu";
import { MENU_ROUTE } from "@/lib/routes";

export default function FeaturedMenu() {
  const featured = menuItems.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Menu Unggulan
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Pilihan Favorit Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group bg-cream/40 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-charcoal/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold text-sm">{item.price}</span>
                </div>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={MENU_ROUTE}
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-7 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-white"
          >
            Lihat Semua Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
