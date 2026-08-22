import { Clock, MapPin, MessageCircle } from "lucide-react";
import { ADDRESS, WHATSAPP_LINK } from "@/lib/routes";

export default function QuickInfoBar() {
  return (
    <section className="hidden md:block bg-cream-dark py-14">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-sm mb-1">Jam Buka</h3>
              <p className="text-gray-medium text-sm">Sen-Jum: 08:00 - 22:00</p>
              <p className="text-gray-medium text-sm">Sab-Min: 09:00 - 23:00</p>
            </div>
          </div>

          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-sm mb-1">Lokasi</h3>
              <p className="text-gray-medium text-sm">{ADDRESS}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 justify-center md:justify-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-sm mb-1">Kontak Cepat</h3>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
              >
                Chat via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
