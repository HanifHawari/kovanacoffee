interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-cream-dark py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
          {label}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-gray-medium mt-4 max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
