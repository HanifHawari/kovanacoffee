import PageHeader from "@/components/main/PageHeader";
import GalleryGrid from "@/components/main/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Galeri"
        title="Momen di Kovana Coffee"
        description="Intip suasana, interior, dan sajian kami lewat foto-foto pilihan."
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
