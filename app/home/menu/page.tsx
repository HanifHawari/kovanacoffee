"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu";
import MenuFilter from "@/components/main/MenuFilter";
import MenuCard from "@/components/main/MenuCard";
import PageHeader from "@/components/main/PageHeader";

const categories = ["all", "coffee", "non-coffee", "food", "snack"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader
        label="Menu Kami"
        title="Jelajahi Menu Kovana Coffee"
        description="Dari kopi specialty hingga pastry segar dan camilan lezat, temukan menu favorit Anda."
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <MenuFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-medium">
                Belum ada menu di kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
