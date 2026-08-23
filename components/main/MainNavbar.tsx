"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  MAIN_WEBSITE_ROUTE,
  MENU_ROUTE,
  ABOUT_ROUTE,
  GALLERY_ROUTE,
  CONTACT_ROUTE,
} from "@/lib/routes";

const navLinks = [
  { label: "Home", href: MAIN_WEBSITE_ROUTE },
  { label: "Menu", href: MENU_ROUTE },
  { label: "Tentang Kami", href: ABOUT_ROUTE },
  { label: "Galeri", href: GALLERY_ROUTE },
  { label: "Kontak", href: CONTACT_ROUTE },
];

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-light/60 transition-all duration-300">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={MAIN_WEBSITE_ROUTE} className="flex items-center gap-2 group">
            <Image 
              src="/images/logo.jpg" 
              alt="Kovana Coffee Logo" 
              width={28} 
              height={28} 
              className="rounded-full transition-transform duration-300 group-hover:rotate-12" 
            />
            <span className="font-serif text-xl font-semibold text-charcoal tracking-tight">
              Kovana Coffee
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== MAIN_WEBSITE_ROUTE && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                    isActive
                      ? "text-charcoal after:w-full"
                      : "text-gray-medium hover:text-charcoal after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={CONTACT_ROUTE}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
            >
              Reservasi
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 pt-2 space-y-3 bg-white/95 backdrop-blur-md border-t border-gray-light/40">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== MAIN_WEBSITE_ROUTE && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium transition-colors py-1.5 ${
                  isActive ? "text-accent" : "text-gray-medium hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={CONTACT_ROUTE}
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-dark mt-2"
          >
            Reservasi
          </Link>
        </div>
      </div>
    </nav>
  );
}
