export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rina Kusuma",
    role: "Coffee Enthusiast",
    content:
      "Kovana Coffee punya cappuccino terbaik di Bandung! Suasananya nyaman banget buat kerja atau ngobrol santai. Bakal balik lagi!",
    rating: 5,
  },
  {
    id: 2,
    name: "Andi Prasetyo",
    role: "Freelancer",
    content:
      "Wifi-nya kencang, kopinya enak, tempatnya aesthetic. Cocok banget buat WFC (Work From Café). Recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sari Dewi",
    role: "Food Blogger",
    content:
      "Avocado toast dan matcha latte-nya juara. Plating cantik, rasa nggak mengecewakan. Hidden gem di Bandung!",
    rating: 4,
  },
];
