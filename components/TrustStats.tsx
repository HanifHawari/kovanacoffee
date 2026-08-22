import { Coffee, Users, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: Coffee,
    value: "5.000+",
    label: "Cangkir Kopi Terjual",
  },
  {
    icon: Users,
    value: "2.000+",
    label: "Pelanggan Setia",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Rating Google Maps",
  },
  {
    icon: MapPin,
    value: "1",
    label: "Lokasi di Cikarang",
  },
];

export default function TrustStats() {
  return (
    <section className="bg-charcoal py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-medium text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
