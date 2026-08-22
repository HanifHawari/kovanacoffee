export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "interior" | "menu" | "suasana";
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/foto1.jpg",
    alt: "Ruang makan Kovana Coffee, nyaman dan aesthetic",
    category: "interior",
  },
  {
    id: 2,
    src: "/images/foto2.jpg",
    alt: "Bar kopi Kovana, biji kopi pilihan Gayo Harmony",
    category: "interior",
  },
  {
    id: 3,
    src: "/images/foto3.jpg",
    alt: "Barista Kovana sedang menyeduh kopi",
    category: "suasana",
  },
  {
    id: 4,
    src: "/images/foto4.jpg",
    alt: "Menu board Kovana Coffee",
    category: "menu",
  },
  {
    id: 5,
    src: "/images/hero.jpg",
    alt: "Suasana hangat di Kovana Coffee",
    category: "suasana",
  },
  {
    id: 6,
    src: "/images/about.jpg",
    alt: "Interior cozy Kovana Coffee",
    category: "interior",
  },
  {
    id: 7,
    src: "/images/menu-cappuccino.jpg",
    alt: "Cappuccino dengan latte art",
    category: "menu",
  },
  {
    id: 8,
    src: "/images/menu-matcha.jpg",
    alt: "Matcha latte segar",
    category: "menu",
  },
];
