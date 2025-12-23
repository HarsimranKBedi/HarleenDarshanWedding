import { FC, useState } from "react";
import palaceBackground from "@/assets/palace-background.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";
import haldiCeremony from "@/assets/haldi-ceremony.jpg";
import sangeetCelebration from "@/assets/haldi-ceremony.jpg";
import anandKaraj from "@/assets/anand-karaj.jpg";
import engagement from "@/assets/sangeet-celebration.jpg";
import barat from "@/assets/barat.jpg";
import phere from "@/assets/phere.jpg";
import doli from "@/assets/doli.jpg"


const galleryImages = [
  { src: sangeetCelebration, alt: "Ladies Sangeet" },
  { src: engagement, alt: "Union of Rings"},
  { src: barat, alt: "Barat & Reception"},
  { src: anandKaraj, alt: "Anand Karaj" },
  { src: phere, alt: "Phere" },
  { src: doli, alt: "Doli" },

];

export const PhotoGallery: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="min-h-screen py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${palaceBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(30 40% 93% / 0.9), hsl(35 35% 90% / 0.92), hsl(30 40% 93% / 0.9))",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-lg text-gold-dark tracking-widest uppercase mb-2">
            Cherished Moments
          </p>
          <h2
            className="font-calligraphy text-5xl md:text-6xl lg:text-7xl text-gold-dark mb-4"
            style={{ textShadow: "0 2px 4px hsl(43 70% 50% / 0.2)" }}
          >
            Gallery
          </h2>
          <div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(43 70% 50%), transparent)",
            }}
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div
                className="relative overflow-hidden rounded-lg palace-frame transition-all duration-500 group-hover:shadow-gold"
                style={{
                  boxShadow: "0 8px 30px hsl(25 40% 20% / 0.15)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, hsl(25 40% 15% / 0.7) 100%)",
                  }}
                >
                  <div className="p-4 w-full">
                    <p className="font-display text-sm text-peach-light tracking-wider uppercase">
                      {image.category}
                    </p>
                    <p className="font-body text-lg text-ivory-cream">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mt-16 text-center">
          <p className="font-body text-lg text-muted-foreground italic">
            More beautiful moments will be added as we celebrate our journey together
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ background: "hsl(25 40% 10% / 0.95)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] palace-frame rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-foreground font-display text-xl"
              style={{
                background: "linear-gradient(135deg, hsl(30 40% 92%), hsl(35 35% 88%))",
                boxShadow: "0 4px 15px hsl(25 40% 20% / 0.3)",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
