import { Bean, Armchair, Wifi, BadgePercent } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Biji Kopi Pilihan",
    description:
      "Langsung dari petani lokal terbaik di Toraja, Gayo, dan Manglayang. Roasting in-house untuk kesegaran optimal.",
  },
  {
    icon: Armchair,
    title: "Suasana Nyaman",
    description:
      "Interior warm dengan sofa empuk, pencahayaan hangat, dan musik yang pas. Tempat sempurna untuk rileks.",
  },
  {
    icon: Wifi,
    title: "Wifi Kencang",
    description:
      "Internet high-speed dan banyak colokan listrik. Ideal untuk bekerja remote atau meeting santai.",
  },
  {
    icon: BadgePercent,
    title: "Harga Terjangkau",
    description:
      "Kualitas premium tanpa harga selangit. Karena kopi enak seharusnya bisa dinikmati semua orang.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Kenapa Kovana?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Lebih dari Sekadar Kopi
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-7 rounded-xl bg-cream/50 hover:bg-cream border border-transparent hover:border-gray-light/60 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
