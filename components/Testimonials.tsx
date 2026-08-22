import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Testimoni
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Apa Kata Mereka?
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative p-7 rounded-xl bg-cream/50 border border-gray-light/40 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-accent/15 mb-4" />
              <p className="text-gray-medium leading-relaxed mb-6 text-sm">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-light"
                    }`}
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">
                  {item.name}
                </p>
                <p className="text-gray-medium text-xs">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
