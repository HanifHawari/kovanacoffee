import Image from "next/image";
import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
}

const categoryLabels: Record<string, string> = {
  coffee: "Coffee",
  "non-coffee": "Non-Coffee",
  food: "Food",
  snack: "Snack",
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-charcoal/8 transition-all duration-300 hover:-translate-y-1 border border-gray-light/30">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent">
            {categoryLabels[item.category] || item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            {item.name}
          </h3>
          <span className="text-accent font-semibold text-sm whitespace-nowrap ml-3">
            {item.price}
          </span>
        </div>
        <p className="text-gray-medium text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
