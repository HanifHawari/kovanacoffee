"use client";

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryLabels: Record<string, string> = {
  all: "Semua",
  coffee: "Coffee",
  "non-coffee": "Non-Coffee",
  food: "Food",
  snack: "Snack",
};

export default function MenuFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
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
  );
}
