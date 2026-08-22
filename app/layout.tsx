import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kovana Coffee, Kopi Pilihan, Suasana Nyaman",
  description:
    "Kovana Coffee adalah coffee shop di Bandung yang menyajikan kopi specialty pilihan, pastry segar, dan suasana nyaman untuk bekerja maupun bersantai.",
  keywords: ["coffee shop", "kopi bandung", "kovana coffee", "café bandung", "specialty coffee"],
  openGraph: {
    title: "Kovana Coffee, Kopi Pilihan, Suasana Nyaman",
    description: "Kopi specialty pilihan & suasana nyaman di Bandung.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
