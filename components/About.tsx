import Image from "next/image";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-charcoal/8 aspect-[4/3]">
              <Image
                src="/images/foto1.jpg"
                alt="Interior Kovana Coffee, ruang makan yang nyaman"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-cream rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-accent" />
              <p className="text-accent font-medium text-sm tracking-widest uppercase">
                Tentang Kami
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
              Dari Biji Pilihan{" "}
              <span className="italic text-accent">ke Cangkir Anda</span>
            </h2>
            <div className="space-y-4 text-gray-medium leading-relaxed">
              <p>
                Kovana Coffee lahir dari kecintaan kami terhadap kopi Nusantara.
                Berawal dari keinginan sederhana, menyajikan kopi
                berkualitas tinggi dalam suasana yang benar-benar nyaman.
              </p>
              <p>
                Kami memilih langsung biji kopi terbaik seperti Gayo Harmony
                dan biji single origin lainnya, lalu memprosesnya dengan teknik
                roasting yang tepat untuk menghadirkan cita rasa yang kaya
                di setiap cangkir.
              </p>
              <p>
                Dengan interior yang cozy, ruangan ber-AC, dan wifi
                kencang, Kovana Coffee adalah tempat sempurna untuk nongkrong,
                bekerja, atau sekadar menikmati momen tenang bersama kopi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
