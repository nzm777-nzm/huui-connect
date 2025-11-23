import { useState } from "react";
import Lightbox from "./Lightbox";
import photo1 from "@/assets/photos/photo1.jpg";
import photo2 from "@/assets/photos/photo2.jpg";
import photo3 from "@/assets/photos/photo3.jpg";
import photo4 from "@/assets/photos/photo4.jpg";
import photo5 from "@/assets/photos/photo5.jpg";
import photo6 from "@/assets/photos/photo6.jpg";

const photos = [
  { id: 1, src: photo1, alt: "Wedding Photography" },
  { id: 2, src: photo2, alt: "Landscape Photography" },
  { id: 3, src: photo3, alt: "Portrait Photography" },
  { id: 4, src: photo4, alt: "Product Photography" },
  { id: 5, src: photo5, alt: "Architecture Photography" },
  { id: 6, src: photo6, alt: "Street Photography" },
];

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="photography" className="py-24 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in-up">
          Photography
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={photos.map(p => p.src)}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </section>
  );
};

export default PhotoGallery;
