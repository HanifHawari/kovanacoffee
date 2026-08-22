import Image from "next/image";

const galleryImages = [
  { src: "/images/foto1.jpg", alt: "Ruang makan Kovana Coffee, nyaman dan aesthetic" },
  { src: "/images/foto2.jpg", alt: "Bar kopi Kovana, biji kopi pilihan Gayo" },
  { src: "/images/foto3.jpg", alt: "Barista Kovana sedang menyeduh kopi" },
  { src: "/images/foto4.jpg", alt: "Menu board Kovana Coffee" },
  { src: "/images/hero.jpg", alt: "Suasana hangat Kovana Coffee" },
  { src: "/images/about.jpg", alt: "Interior cozy Kovana Coffee" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Galeri
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Intip Suasana Kovana Coffee
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={index === 0 ? "(max-width: 768px) 50vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
