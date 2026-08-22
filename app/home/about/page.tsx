import Image from "next/image";
import Link from "next/link";
import { Bean, Armchair, Users, ArrowRight } from "lucide-react";
import PageHeader from "@/components/main/PageHeader";
import { CONTACT_ROUTE } from "@/lib/routes";

const values = [
  {
    icon: Bean,
    title: "Kopi Berkualitas",
    description:
      "Kami hanya menggunakan biji kopi pilihan dari petani lokal terbaik di Nusantara. Setiap biji di-roast in-house untuk memastikan kesegaran dan cita rasa optimal.",
  },
  {
    icon: Armchair,
    title: "Suasana Nyaman",
    description:
      "Interior hangat dengan pencahayaan yang pas, sofa empuk, dan desain yang membuat Anda betah berlama-lama. Tempat sempurna untuk kerja, ngobrol, atau me-time.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description:
      "Kovana Coffee bukan hanya tempat minum kopi, ini adalah ruang berkumpul. Kami rutin mengadakan workshop, cupping session, dan acara komunitas pecinta kopi.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Tentang Kami"
        title="Cerita Kovana Coffee"
        description="Dari kecintaan terhadap kopi Nusantara, lahirlah Kovana Coffee."
      />

      {/* Story Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-charcoal/8 aspect-[4/3]">
                <Image
                  src="/images/about.jpg"
                  alt="Interior Kovana Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cream rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Dari Biji Pilihan{" "}
                <span className="italic text-accent">ke Cangkir Anda</span>
              </h2>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  Kovana Coffee berawal dari sebuah keinginan sederhana ,
                  menyajikan kopi berkualitas tinggi dalam suasana yang
                  benar-benar nyaman. Didirikan di Bandung pada tahun 2022, kami
                  memulai perjalanan dari sebuah kedai kecil dengan mesin
                  espresso bekas dan mimpi besar.
                </p>
                <p>
                  Kami percaya bahwa kopi yang baik dimulai dari biji yang baik.
                  Itulah mengapa kami menjalin hubungan langsung dengan petani
                  kopi di Toraja, Gayo, dan Manglayang. Setiap biji dipilih
                  dengan teliti, di-roast dengan presisi, dan diseduh dengan
                  penuh perhatian.
                </p>
                <p>
                  <strong className="text-charcoal">Visi kami</strong>, menjadi
                  coffee shop yang bukan hanya menyajikan kopi enak, tapi juga
                  menjadi ruang yang menginspirasi, membangun komunitas, dan
                  mendukung petani kopi lokal Indonesia.
                </p>
                <p>
                  <strong className="text-charcoal">Misi kami</strong>, setiap
                  cangkir kopi yang kami sajikan adalah bentuk penghargaan
                  terhadap kerja keras petani, keahlian barista, dan kepercayaan
                  pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
              Filosofi Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
              Yang Membuat Kami Berbeda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-medium text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Tertarik untuk Berkunjung?
          </h2>
          <p className="text-gray-medium mb-8 max-w-md mx-auto">
            Hubungi kami untuk reservasi atau langsung datang ke lokasi. Kami
            tunggu kehadiran Anda!
          </p>
          <Link
            href={CONTACT_ROUTE}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 active:scale-[0.97]"
          >
            Hubungi Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
