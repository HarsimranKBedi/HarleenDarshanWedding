import { FC, ReactNode } from "react";
import palaceBackground from "@/assets/palace-background.jpg";

interface EventSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  reversed?: boolean;
}

export const EventSection: FC<EventSectionProps> = ({
  id,
  title,
  subtitle,
  date,
  time,
  venue,
  description,
  image,
  imageAlt,
  children,
  reversed = false,
}) => {
  return (
    <section
      id={id}
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
          background: "linear-gradient(180deg, hsl(30 40% 95% / 0.85), hsl(35 35% 90% / 0.9), hsl(30 40% 95% / 0.85))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-16 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative palace-frame rounded-lg overflow-hidden"
              style={{
                boxShadow: "0 20px 60px hsl(25 40% 20% / 0.25), 0 0 0 1px hsl(43 70% 50% / 0.3)",
              }}
            >
              {/* <img
                src={image}
                alt={imageAlt}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
              /> */}
              <img
  src={image}
  alt={imageAlt}
  className="w-full h-auto md:h-96 lg:h-[500px] object-contain md:object-cover"
/>
              {/* Gold corner accents */}
              {/* <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-lg" /> */}
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div
              className="p-8 md:p-12 rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(30 40% 92% / 0.95), hsl(35 35% 88% / 0.95))",
                boxShadow: "0 10px 40px hsl(25 40% 20% / 0.15), inset 0 0 60px hsl(43 70% 50% / 0.05)",
                border: "2px solid hsl(43 60% 75% / 0.5)",
              }}
            >
              {/* Decorative top border */}
              <div
                className="w-24 h-1 mx-auto mb-6 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(43 70% 50%), transparent)",
                }}
              />

              {subtitle && (
                <p className="text-center font-body text-lg text-gold-dark tracking-widest uppercase mb-2">
                  {subtitle}
                </p>
              )}

              <h2
                className="text-center font-calligraphy text-4xl md:text-5xl lg:text-6xl text-gold-dark mb-6"
                style={{ textShadow: "0 2px 4px hsl(43 70% 50% / 0.2)" }}
              >
                {title}
              </h2>

              {/* Event Details */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div
                  className="px-4 py-2 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(43 60% 85% / 0.6), hsl(43 70% 80% / 0.4))",
                    border: "1px solid hsl(43 70% 60% / 0.5)",
                  }}
                >
                  <span className="font-display text-sm text-foreground">{date}</span>
                </div>
                <div
                  className="px-4 py-2 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(43 60% 85% / 0.6), hsl(43 70% 80% / 0.4))",
                    border: "1px solid hsl(43 70% 60% / 0.5)",
                  }}
                >
                  <span className="font-display text-sm text-foreground">{time}</span>
                </div>
              </div>

              <p className="text-center font-display text-lg text-gold-dark mb-4">{venue}</p>

              <p className="text-center font-body text-lg text-muted-foreground leading-relaxed mb-8">
                {description}
              </p>

              {children}

              {/* Decorative bottom border */}
              <div
                className="w-24 h-1 mx-auto mt-6 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(43 70% 50%), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative fresco corners */}
      <div
        className="absolute top-8 left-8 w-32 h-32 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 70% 50% / 0.3), transparent)",
        }}
      />
      <div
        className="absolute bottom-8 right-8 w-32 h-32 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 70% 50% / 0.3), transparent)",
        }}
      />
    </section>
  );
};