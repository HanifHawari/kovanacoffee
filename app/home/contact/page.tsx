import { MapPin, Phone, Mail, Clock, Camera, MessageCircle } from "lucide-react";
import PageHeader from "@/components/main/PageHeader";
import ContactForm from "@/components/main/ContactForm";
import {
  ADDRESS,
  PHONE,
  EMAIL,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
} from "@/lib/routes";

const schedule = [
  { day: "Senin - Jumat", hours: "08:00 - 22:00" },
  { day: "Sabtu", hours: "09:00 - 23:00" },
  { day: "Minggu", hours: "09:00 - 21:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Kontak & Reservasi"
        title="Hubungi Kami"
        description="Reservasi meja, tanyakan menu, atau sekadar say hi, kami senang mendengar dari Anda."
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-light/30">
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Form Reservasi
              </h2>
              <p className="text-gray-medium text-sm mb-8">
                Isi form di bawah, lalu klik kirim, Anda akan diarahkan ke WhatsApp.
              </p>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Alamat</h3>
                  <p className="text-gray-medium text-sm leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Telepon</h3>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-gray-medium text-sm hover:text-accent transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-medium text-sm hover:text-accent transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal mb-3">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-light/50 last:border-0"
                      >
                        <span className="text-gray-medium text-sm">
                          {item.day}
                        </span>
                        <span className="text-charcoal font-medium text-sm">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div>
                <h3 className="font-semibold text-charcoal mb-3">
                  Ikuti Kami
                </h3>
                <div className="flex gap-3">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Camera className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white">
        <div className="h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d107.1747!3d-6.3197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMTEuMCJTIDEwN8KwMTAnMjguOSJF!5e0!3m2!1sid!2sid&q=Jl.+Beruang+Raya+No.2,+Jayamukti,+Cikarang+Pusat,+Bekasi,+Jawa+Barat+17550"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kovana Coffee di Google Maps"
          />
        </div>
      </section>
    </>
  );
}
