export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: "coffee" | "non-coffee" | "food" | "snack";
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    price: "Rp 32.000",
    description: "Espresso dengan steamed milk dan foam lembut, disajikan dengan latte art.",
    image: "/images/menu-cappuccino.jpg",
    category: "coffee",
  },
  {
    id: 2,
    name: "Matcha Latte",
    price: "Rp 35.000",
    description: "Matcha premium Jepang dengan susu segar, creamy dan earthy.",
    image: "/images/menu-matcha.jpg",
    category: "non-coffee",
  },
  {
    id: 3,
    name: "Iced Caramel Latte",
    price: "Rp 38.000",
    description: "Espresso dingin dengan susu, sirup karamel, dan whipped cream.",
    image: "/images/menu-iced-caramel.jpg",
    category: "coffee",
  },
  {
    id: 4,
    name: "Butter Croissant",
    price: "Rp 28.000",
    description: "Croissant renyah berlapis-lapis dengan butter Prancis premium.",
    image: "/images/menu-cappuccino.jpg",
    category: "food",
  },
  {
    id: 5,
    name: "Avocado Toast",
    price: "Rp 42.000",
    description: "Roti sourdough panggang dengan avocado, microgreens, dan chili flakes.",
    image: "/images/menu-matcha.jpg",
    category: "food",
  },
  {
    id: 6,
    name: "Tiramisu",
    price: "Rp 38.000",
    description: "Classic Italian tiramisu dengan mascarpone, espresso, dan cocoa.",
    image: "/images/menu-iced-caramel.jpg",
    category: "food",
  },
  {
    id: 7,
    name: "Espresso",
    price: "Rp 25.000",
    description: "Shot espresso murni dari biji arabika single origin, bold dan intense.",
    image: "/images/menu-cappuccino.jpg",
    category: "coffee",
  },
  {
    id: 8,
    name: "Café Latte",
    price: "Rp 30.000",
    description: "Espresso lembut dengan susu steamed, balance sempurna untuk sehari-hari.",
    image: "/images/menu-matcha.jpg",
    category: "coffee",
  },
  {
    id: 9,
    name: "V60 Pour Over",
    price: "Rp 35.000",
    description: "Manual brew V60 yang menonjolkan karakter unik biji kopi pilihan.",
    image: "/images/menu-iced-caramel.jpg",
    category: "coffee",
  },
  {
    id: 10,
    name: "Americano",
    price: "Rp 28.000",
    description: "Espresso dengan air panas, clean dan refreshing tanpa susu.",
    image: "/images/menu-cappuccino.jpg",
    category: "coffee",
  },
  {
    id: 11,
    name: "Cokelat Panas",
    price: "Rp 30.000",
    description: "Dark chocolate premium dengan susu hangat, rich dan comforting.",
    image: "/images/menu-matcha.jpg",
    category: "non-coffee",
  },
  {
    id: 12,
    name: "Lemon Tea",
    price: "Rp 22.000",
    description: "Teh hitam segar dengan perasan lemon, tersedia panas dan dingin.",
    image: "/images/menu-iced-caramel.jpg",
    category: "non-coffee",
  },
  {
    id: 13,
    name: "French Fries",
    price: "Rp 25.000",
    description: "Kentang goreng crispy dengan seasoning spesial, cocok untuk sharing.",
    image: "/images/menu-cappuccino.jpg",
    category: "snack",
  },
  {
    id: 14,
    name: "Nachos",
    price: "Rp 35.000",
    description: "Tortilla chips dengan cheese sauce, salsa, dan jalapeño.",
    image: "/images/menu-matcha.jpg",
    category: "snack",
  },
  {
    id: 15,
    name: "Banana Bread",
    price: "Rp 28.000",
    description: "Banana bread homemade yang moist, disajikan hangat dengan butter.",
    image: "/images/menu-iced-caramel.jpg",
    category: "food",
  },
];
