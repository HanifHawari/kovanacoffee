import { MapPin, Clock } from "lucide-react";
import { ADDRESS } from "@/lib/routes";

const schedule = [
  { day: "Senin - Jumat", hours: "08:00 - 22:00" },
  { day: "Sabtu", hours: "09:00 - 23:00" },
  { day: "Minggu", hours: "09:00 - 21:00" },
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Lokasi & Jam Buka
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Temukan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg shadow-charcoal/8 aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d107.1747!3d-6.3197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMTEuMCJTIDEwN8KwMTAnMjguOSJF!5e0!3m2!1sid!2sid&q=Jl.+Beruang+Raya+No.2,+Jayamukti,+Cikarang+Pusat,+Bekasi,+Jawa+Barat+17550"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kovana Coffee di Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Address */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
                  Alamat
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
