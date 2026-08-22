"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";

const categoryLabels: Record<string, string> = {
  all: "Semua",
  interior: "Interior",
  menu: "Menu",
  suasana: "Suasana",
};

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["all", ...Array.from(new Set(items.map((i) => i.category)))];

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-white text-gray-medium border border-gray-light hover:border-accent hover:text-accent"
            }`}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <div className="relative aspect-square">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
