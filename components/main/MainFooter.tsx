import Link from "next/link";
import Image from "next/image";
import { Camera, MessageCircle, Mail } from "lucide-react";
import {
  MAIN_WEBSITE_ROUTE,
  MENU_ROUTE,
  ABOUT_ROUTE,
  GALLERY_ROUTE,
  CONTACT_ROUTE,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  EMAIL,
  PHONE,
  ADDRESS,
} from "@/lib/routes";

const footerLinks = [
  { label: "Home", href: MAIN_WEBSITE_ROUTE },
  { label: "Menu", href: MENU_ROUTE },
  { label: "Tentang Kami", href: ABOUT_ROUTE },
  { label: "Galeri", href: GALLERY_ROUTE },
  { label: "Kontak", href: CONTACT_ROUTE },
];

export default function MainFooter() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/logo.jpg" 
                alt="Kovana Coffee Logo" 
                width={24} 
                height={24} 
                className="rounded-full" 
              />
              <span className="font-serif text-xl font-semibold text-white">
                Kovana Coffee
              </span>
            </div>
            <p className="text-gray-medium text-sm leading-relaxed max-w-xs">
              Kopi specialty pilihan dari biji terbaik Nusantara. Disajikan
              dengan cinta di tempat yang nyaman.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-medium text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="text-gray-medium text-xs hover:text-accent transition-colors duration-200"
                >
                  ← Kembali ke Landing Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-medium">
              <li className="leading-relaxed">{ADDRESS}</li>
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-medium hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-medium hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-medium hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-medium text-xs">
            &copy; {new Date().getFullYear()} Kovana Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
