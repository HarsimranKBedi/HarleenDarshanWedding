import { FC } from "react";
import palaceBackground from "@/assets/palace-background.jpg";
import khandaImage from "@/assets/khanda2.png"; // ✅ Using the real photo

export const Footer: FC = () => {
  return (
    <footer
      className="relative py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${palaceBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(25 40% 15% / 0.92), hsl(25 35% 12% / 0.95))",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Khanda */}
        <img
          src={khandaImage}
          alt="Khanda"
          className="mx-auto mb-6 w-16 md:w-20"
          style={{
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
          }}
        />

        {/* Names */}
        <h3
          className="font-calligraphy text-4xl md:text-5xl mb-4"
          style={{
            background:
              "linear-gradient(135deg, hsl(43 70% 60%), hsl(43 80% 50%), hsl(43 70% 60%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Harleen & Darshan
        </h3>

        {/* Date */}
        {/* <p className="font-display text-lg text-peach tracking-widest mb-8">
          January 22-23, 2026
        </p> */}

        {/* Divider */}
        <div
          className="w-32 h-px mx-auto mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(43 70% 50% / 0.5), transparent)",
          }}
        />

        {/* Blessing */}
        <p className="font-body text-lg text-peach-light/80 mb-4">
          ਐਸੀ ਦਾਤ ਤੇਰੀ ਪ੍ਰਭ ਮੇਰੇ, ਕਾਰਜੁ ਸਗਲ ਸਵਾਰੇ।
        </p>
        <p className="font-body text-base text-peach-light/60 italic">
          Such is Your blessing, O my God, that You beautifully take care of all my tasks.
        </p>

        {/* RSVP section */}
        <div
          className="mt-12 inline-block px-10 py-6 rounded-lg text-center w-full md:w-auto"
          style={{
            background:
              "linear-gradient(135deg, hsl(43 60% 50% / 0.12), hsl(43 70% 45% / 0.1))",
            border: "1px solid hsl(43 70% 50% / 0.3)",
          }}
        >
          <p className="font-display text-peach-light tracking-wider mb-4">
            For further inquiries, please contact us at
          </p>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="font-display text-gold text-lg leading-relaxed">
              +91 8091729886
            </p>
            <p className="font-display text-gold text-lg leading-relaxed">
              +91 8626910121
            </p>
          </div>
        </div>

        {/* 🌟 WITH LOVE — BEAUTIFUL FINAL LINE */}
        <div className="mt-14">
          <p
            className="font-calligraphy text-3xl md:text-4xl mb-2"
            style={{
              background:
                "linear-gradient(135deg, hsl(43 75% 70%), hsl(43 85% 60%), hsl(43 75% 70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 6px rgba(0,0,0,0.25)",
            }}
          >
            With Love
          </p>

          <p
            className="font-body text-peach-light/80 text-lg md:text-xl tracking-wide"
            style={{ letterSpacing: "0.08em" }}
          >
            Bedis & Dhaliwals
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-12 font-body text-sm text-peach-light/40">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};
