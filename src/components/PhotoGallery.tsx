import { useState } from "react";
import Lightbox from "./Lightbox";
import photo1 from "@/assets/photos/stage.jpg";
import photo2 from "@/assets/photos/fog.jpg";
import photo3 from "@/assets/photos/couple.jpg";
import photo4 from "@/assets/photos/product.jpg";
import photo5 from "@/assets/photos/znap.jpg";
import photo6 from "@/assets/photos/per.jpg";
import photo7 from "@/assets/photos/bride-side.png";
import photo8 from "@/assets/photos/bride.jpg";
import photo9 from "@/assets/photos/hand.jpg";
import photo10 from "@/assets/photos/classic.jpg";
import photo11 from "@/assets/photos/coat.jpg";
import photo12 from "@/assets/photos/znap wedding.jpg";
import photo13 from "@/assets/photos/singer.jpg";
import photo14 from "@/assets/photos/bride-stand.jpg";
import photo15 from "@/assets/photos/baby.jpg";
import photo16 from "@/assets/photos/couples-walk.png";
import photo17 from "@/assets/photos/girl-flower.png";
import photo18 from "@/assets/photos/train.jpg";

const photos = [
  { id: 1, src: photo7, alt: "Wedding Photography" },
  { id: 2, src: photo15, alt: "Landscape Photography" },
 
  { id: 4, src: photo16, alt: "Portrait Photography" },
  { id: 5, src: photo5, alt: "Architecture Photography" },
  { id: 6, src: photo17, alt: "Architecture Photography" },
  { id: 7, src: photo14, alt: "Street Photography" },
  { id: 8, src: photo3, alt: "Street Photography" },
  { id: 9, src: photo9, alt: "Street Photography" },
  { id: 10, src: photo10, alt: "Street Photography" },
  { id: 11, src: photo11, alt: "Street Photography" },
  { id: 12, src: photo12, alt: "Street Photography" },
  { id: 13, src: photo13, alt: "Street Photography" },
  { id: 14, src: photo1, alt: "Street Photography" },
  { id: 15, src: photo2, alt: "Street Photography" },
  { id: 15, src: photo18, alt: "Street Photography" },
];

const PhotoGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="photography" className="py-24 px-4 md:px-8 lg:px-16 bg-[#000000] text-white">
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
