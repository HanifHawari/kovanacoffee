import { Coffee, Users, Star, MapPin } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Coffee,
    value: 5000,
    suffix: "+",
    decimals: 0,
    label: "Cangkir Kopi Terjual",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    decimals: 0,
    label: "Pelanggan Setia",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "",
    decimals: 1,
    label: "Rating Google Maps",
  },
  {
    icon: MapPin,
    value: 1,
    suffix: "",
    decimals: 0,
    label: "Lokasi di Cikarang",
  },
];

export default function TrustStats() {
  return (
    <section className="hidden md:block bg-charcoal py-14 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={index} delay={index * 150} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </p>
                <p className="text-gray-medium text-sm">{stat.label}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
