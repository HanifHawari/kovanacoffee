import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Pilih Kopi Anda",
    description: "Jelajahi menu kami, dari signature drinks, manual brew, hingga mocktail.",
    image: "/images/foto2.jpg",
  },
  {
    step: "02",
    title: "Dibuat dengan Cinta",
    description: "Barista kami menyeduh setiap cangkir dengan biji pilihan dan teknik presisi.",
    image: "/images/foto3.jpg",
  },
  {
    step: "03",
    title: "Nikmati Momennya",
    description: "Duduk santai di ruang ber-AC, nikmati wifi kencang, dan rasakan kopinya.",
    image: "/images/foto1.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Pengalaman Anda
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Bagaimana Kami Menyajikan yang Terbaik
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="group text-center">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-6 shadow-md shadow-charcoal/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
