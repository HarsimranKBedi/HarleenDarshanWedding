import { FC, useEffect, useRef, useState } from "react";
import palaceBackground from "@/assets/palace-background.jpg";
import khandaImage from "@/assets/khanda.png"; // 🟡 use Khanda photo from assets

// At the top of the file (after imports, before component definition)
const VENUE_NAME = "Agrasen Foundation, Shela, Ahmedabad";
const VENUE_MAP_URL = "https://www.google.com/maps?hl=en-GB&gl=IN&um=1&ie=UTF-8&fb=1&sa=X&geocode=KVVVGGKxm145MUk6mnWbopw8&daddr=Agrasen+Foundation+Managed+By+TGB+Foods+Pvt+Ltd,+Agrasen+Road,+near+Club+o+7,+Shela,+Ahmedabad,+Gujarat+380057";


interface HeroSectionProps {
  onEventClick: (eventId: string) => void;
}

interface EventStop {
  id: string;
  title: string;
  date: string;
  time: string;
  label: string;
  icon: string;
  group: string; // date group heading
}

const EVENT_STOPS: EventStop[] = [
  // {
  //   id: "shagan",
  //   title: "Shagan: The Sacred Blessing",
  //   date: "January 21, 2026",
  //   time: "6:00 PM",
  //   label: "Shagan",
  //   icon: "●",
  //   group: "January 21, 2026",
  // },
  // {
  //   id: "sangeetSoiree",
  //   title: "Sangeet Soirée",
  //   date: "January 21, 2026",
  //   time: "6:30 PM onwards",
  //   label: "Ladies Sangeet",
  //   icon: "♪",
  //   group: "January 21, 2026",
  // },
  // {
  //   id: "engagement",
  //   title: "The Union of Rings",
  //   date: "January 21, 2026",
  //   time: "7:30 PM",
  //   label: "Ring Ceremony",
  //   icon: "◎",
  //   group: "January 21, 2026",
  // },
  // {
  //   id: "dinner1",
  //   title: "Dinner",
  //   date: "January 21, 2026",
  //   time: "8:30 PM",
  //   label: "Grand Feast",
  //   icon: "◎",
  //   group: "January 21, 2026",
  // },
  {
    id: "barat",
    title: "Reception of Barat",
    date: "January 22, 2026",
    time: "7:30 PM",
    label: "Royal Barat",
    icon: "➳",
    group: "January 22, 2026",
  },
  {
    id: "dinner2",
    title: "Dinner",
    date: "January 22, 2026",
    time: "8:00 PM",
    label: "Wedding Dinner",
    icon: "◎",
    group: "January 22, 2026",
  },
  {
    id: "anandKaraj",
    title: "Anand Karaj",
    date: "January 23, 2026",
    time: "10:00 AM",
    label: "Sacred Union",
    icon: "☬",
    group: "January 23, 2026",
  },
  // {
  //   id: "phere",
  //   title: "Phere",
  //   date: "January 23, 2026",
  //   time: "After Anand Karaj",
  //   label: "Phere",
  //   icon: "✧",
  //   group: "January 23, 2026",
  // },
  {
    id: "doli",
    title: "Doli",
    date: "January 23, 2026",
    time: "3:00 PM",
    label: "Bride’s Departure",
    icon: "🕊",
    group: "January 23, 2026",
  },
];

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const HeroSection: FC<HeroSectionProps> = ({ onEventClick }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // Reveal / hide the map animation EVERY time it enters/leaves view
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapVisible(true);
          } else {
            setMapVisible(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ⏳ Countdown to 23 Jan 2026, 12:00 AM
  useEffect(() => {
    const target = new Date("2026-01-23T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diffMs = target.getTime() - now.getTime();

      if (diffMs <= 0) {
        setTimeLeft(null);
        return;
      }

      const totalSeconds = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initial
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTwoDigits = (n: number) => n.toString().padStart(2, "0");

  return (
    <section
      id="home"
      className="
        min-h-screen 
        relative 
        flex flex-col items-center justify-center 
        overflow-hidden 
        pt-24 md:pt-28
      "
      style={{
        backgroundImage: `url(${palaceBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Parallax overlay only on larger screens */}
      <div
        className="pointer-events-none hidden md:block absolute inset-0"
        style={{
          backgroundAttachment: "fixed",
        }}
      />

      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center, 
              hsl(30 40% 95% / 0.8) 0%, 
              hsl(35 35% 90% / 0.85) 50%, 
              hsl(30 40% 88% / 0.9) 100%
            )
          `,
        }}
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10 
          text-center 
          px-4 
          max-w-3xl md:max-w-4xl 
          mx-auto
        "
      >
        {/* Khanda from assets */}
        <div
          className="mb-6 md:mb-8 opacity-0 animate-scale-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <img
            src={khandaImage}
            alt="Khanda symbol"
            className="mx-auto w-20 md:w-24"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.35))",
            }}
          />
        </div>

        {/* Waheguru blessing */}
        <p
          className="
            font-body 
            text-sm sm:text-base md:text-lg 
            text-gold-dark 
            tracking-[0.25em] md:tracking-[0.4em]
            uppercase 
            mb-3 md:mb-4 
            opacity-0 
            animate-fade-in-up
          "
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ
        </p>

        {/* INVITATION BLOCK */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {/* Host name line */}
          <p
            className="
              font-display
              text-base sm:text-lg md:text-2xl
              mb-1
            "
            style={{
              color: "hsl(28 30% 30%)",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            Sardarni <span className="font-bold">Raminder Kaur Bedi</span>
          </p>
          <p
            className="
              font-body 
              text-xs sm:text-sm md:text-base 
              mb-5
            "
            style={{
              color: "hsl(28 30% 32%)",
            }}
          >
            (W/o. <span className="font-medium">Late Dr. Sukhwant Pal Singh Bedi</span>)
          </p>

          {/* Request line */}
          <p
            className="
              font-body 
              text-sm sm:text-base md:text-lg
              mb-1
            "
            style={{
              color: "hsl(28 30% 32%)",
              letterSpacing: "0.02em",
            }}
          >
            requests the pleasure of your company to celebrate the sacred union of two souls blessed by Waheguru,
          </p>

          {/* “of her loving granddaughter” */}
          <p
            className="
              font-body 
              text-sm sm:text-sm md:text-base 
              mb-4
            "
            style={{
              color: "hsl(28 20% 35%)",
            }}
          >
            Her loving granddaughter
          </p>

          {/* Bride name */}
          <h2
            className="
              font-calligraphy 
              text-4xl sm:text-5xl md:text-6xl 
              mb-1
            "
            style={{
              color: "#8A5A2E",
              textShadow: "0 3px 8px rgba(0,0,0,0.18)",
            }}
          >
            Harleen Kaur Bedi
          </h2>

          {/* Bride parents */}
          <p
            className="
              font-body 
              text-xs sm:text-sm md:text-base 
              mb-5
            "
            style={{
              color: "hsl(28 30% 32%)",
            }}
          >
            (D/o. <span className="font-medium">Dr. Manjinder Kaur Bedi</span> &amp;{" "}
            <span className="font-medium">Dr. Gurjeet Singh Bedi</span>)
          </p>

          {/* Ampersand */}
          <p
            className="
              font-calligraphy 
              text-2xl sm:text-3xl md:text-4xl 
              mb-3
            "
            style={{
              color: "#8A5A2E",
            }}
          >
            &
          </p>

          {/* Groom name */}
          <h2
            className="
              font-calligraphy 
              text-4xl sm:text-5xl md:text-6xl 
              mb-1
            "
            style={{
              color: "#8A5A2E",
              textShadow: "0 3px 8px rgba(0,0,0,0.18)",
            }}
          >
            Darshan Desai
          </h2>

          {/* Groom parents */}
          <p
            className="
              font-body 
              text-xs sm:text-sm md:text-base 
              mb-8
            "
            style={{
              color: "hsl(28 30% 32%)",
            }}
          >
            (S/o. <span className="font-medium">Mrs. Rita Desai </span> &amp;{" "}
            <span className="font-medium">Mr. Devesh Desai</span>)
          </p>
        </div>

        {/* 🕰 Royal date + vintage countdown clock */}
        <div
          className="
            relative mx-auto mb-10 opacity-0 animate-fade-in-up
            w-fit px-8 py-5 rounded-3xl
          "
          style={{
            background:
              "linear-gradient(180deg, hsla(43, 45%, 92%, 0.7), hsla(43, 35%, 86%, 0.65))",
            border: "1.5px solid hsla(43, 70%, 55%, 0.9)",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.22), inset 0 1px 6px rgba(255,255,255,0.7)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            animationDelay: "1.1s",
            animationFillMode: "forwards",
          }}
        >
          {/* Date text */}
          <p
            className="font-display text-sm md:text-base tracking-[0.28em] text-center mb-4"
            style={{
              color: "hsl(35 40% 28%)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            January 22–23, 2026
          </p>

          {/* Clock + breakdown */}
          {timeLeft ? (
            <div className="flex flex-col items-center gap-3">
              {/* Clock circle */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    relative flex items-center justify-center
                    rounded-full
                  "
                  style={{
                    width: "130px",
                    height: "130px",
                    background:
                      "radial-gradient(circle at 30% 20%, #fffdf7, #e7dcc5)",
                    boxShadow:
                      "0 6px 18px rgba(0,0,0,0.35), inset 0 1px 4px rgba(255,255,255,0.8)",
                    border: "2px solid hsla(43, 50%, 45%, 0.8)",
                  }}
                >
                  {/* small inner ring */}
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: "110px",
                      height: "110px",
                      border: "1px solid hsla(43, 35%, 50%, 0.4)",
                      boxShadow: "inset 0 0 4px rgba(0,0,0,0.25)",
                    }}
                  >
                    <span
                      className="font-display text-base md:text-lg"
                      style={{
                        letterSpacing: "0.12em",
                        color: "hsl(28 30% 28%)",
                      }}
                    >
                      {formatTwoDigits(timeLeft.hours)}:
                      {formatTwoDigits(timeLeft.minutes)}:
                      {formatTwoDigits(timeLeft.seconds)}
                    </span>
                  </div>
                </div>

                {/* Days / Hours / Minutes / Seconds blocks */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div>
                    <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-[hsl(35_30%_40%)]">
                      Days
                    </p>
                    <p className="font-display text-lg">
                      {timeLeft.days}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-[hsl(35_30%_40%)]">
                      Hours
                    </p>
                    <p className="font-display text-lg">
                      {formatTwoDigits(timeLeft.hours)}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-[hsl(35_30%_40%)]">
                      Minutes
                    </p>
                    <p className="font-display text-lg">
                      {formatTwoDigits(timeLeft.minutes)}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-[hsl(35_30%_40%)]">
                      Seconds
                    </p>
                    <p className="font-display text-lg">
                      {formatTwoDigits(timeLeft.seconds)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Small caption */}
              <p
                className="font-body text-[0.7rem] md:text-xs tracking-[0.16em] uppercase text-center"
                style={{ color: "hsl(35 24% 32%)" }}
              >
                Counting down to the celebrations
              </p>
            </div>
          ) : (
            <p
              className="font-display text-base md:text-lg text-center"
              style={{
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "hsl(28 30% 30%)",
              }}
            >
              It&apos;s the Wedding Day
            </p>
          )}
        </div>

        {/* Tagline */}
        {/* <p
          className="
            font-body 
            text-sm sm:text-base md:text-xl 
            text-muted-foreground 
            max-w-xl md:max-w-2xl 
            mx-auto 
            mb-8 md:mb-12 
            leading-relaxed 
            opacity-0 
            animate-fade-in-up
          "
          style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
        >
          Request the pleasure of your company to celebrate the sacred union of two
          souls blessed by Waheguru
        </p> */}

        {/* Decorative divider */}
        <div
          className="
            w-32 md:w-48 
            h-px 
            mx-auto 
            mb-8 md:mb-12 
            opacity-0 
            animate-fade-in
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(43 70% 50%), transparent)",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        />
      </div>
{/* Mobile hint above the map */}
{/* <p
  className="
    md:hidden
    text-center 
    font-body 
    text-xs 
    text-[hsl(28_25%_32%)] 
    mb-4 
    tracking-[0.18em] 
    uppercase
  "
>
  Tap an event on the journey map below to jump to its details 👇
</p> */}


<div className="px-6 text-center mb-2">
{/* <p className="font-body text-xs md:text-sm text-[#8A5A2E] tracking-wide mb-1">
  Open in Google Maps
</p> */}
{/* <p
  className="font-body text-xs md:text-sm tracking-wide mb-1"
  style={{ color: "#C38E3C" }} // use any hex or rgb/hsl you want
>
  Open in Google Maps
</p> */}



<button
  type="button"
  onClick={() => window.open(VENUE_MAP_URL, "_blank")}
  className="
    inline-flex items-center gap-2
    font-body text-xs md:text-sm
    px-4 py-2
    rounded-full
    border border-gold/50
    bg-background/80
    backdrop-blur-sm
    shadow-sm
    hover:border-gold
    hover:shadow-md
    hover:-translate-y-0.5
    transition-all
    mb-4
    mx-auto
  "
>
  <span className="text-lg">📍</span>

  {/* LOCATION NAME */}
  <span className="tracking-[0.18em] uppercase !text-[hsl(28_15%_10%)]">
    {VENUE_NAME}
  </span>

  {/* SUPER OBVIOUS INDICATOR */}
  <span className="text-[hsl(28_20%_20%)] font-semibold">
    (Tap to open →)
  </span>
</button>

</div>




      {/* 🌟 WEDDING JOURNEY MAP (TIMELINE) */}
            {/* 🌟 WEDDING JOURNEY MAP (TIMELINE) */}
            <div
        ref={mapRef}
        className="relative z-10 w-full max-w-3xl md:max-w-4xl mx-auto pb-16 px-6 md:px-0"
      >
        {/* title / instruction */}
        <div className="mb-6 text-center">
          <p className="font-display text-xl md:text-sm tracking-[0.25em] uppercase text-gold-dark">
            Wedding Journey
          </p>
          <p className="font-body text-l md:text-sm text-muted-foreground mt-1">
            Tap an event stop below to jump to its details
          </p>
        </div>

        {/* vertical golden path */}
        <div className="absolute left-8 top-2 bottom-2 md:left-1/5 pointer-events-none">
          <div
            className="w-[2px] h-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(43 70% 70%), hsl(43 80% 45%), hsl(43 70% 65%))",
              boxShadow: "0 0 10px hsl(43 70% 60% / 0.4)",
            }}
          />
        </div>

        <div className="space-y-8 md:space-y-10">
          {(() => {
            let lastGroup: string | null = null;

            return EVENT_STOPS.map((stop, index) => {
              const showGroupHeader = stop.group !== lastGroup;
              if (showGroupHeader) lastGroup = stop.group;

              return (
                <div key={stop.id}>
                  {/* Date group label */}
                  {showGroupHeader && (
                    <div
                      className={`
                        mb-2 
                        pl-14 md:pl-20 
                        transition-all duration-500 
                        ${
                          mapVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        }
                      `}
                      style={{
                        transitionDelay: mapVisible
                          ? `${index * 140}ms`
                          : "0ms",
                      }}
                    >
                      <div
                        className="
                          inline-block 
                          px-4 py-1 
                          rounded-full 
                          border border-gold/40 
                          bg-background/85 
                          backdrop-blur-sm 
                          shadow-sm
                        "
                      >
                        <span className="font-display text-xs md:text-sm tracking-[0.2em] uppercase text-gold-dark">
                          {stop.group}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Event button */}
                  <button
                    onClick={() => onEventClick(stop.id)}
                    className={`
                      relative w-full text-left flex items-stretch gap-4 md:gap-6
                      transition-all duration-600 
                      ${
                        mapVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }
                      cursor-pointer
                    `}
                    style={{
                      transitionDelay: mapVisible
                        ? `${index * 160}ms`
                        : "0ms",
                    }}
                    aria-label={`Go to details for ${stop.title}`}
                  >
                    {/* Map node */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, hsl(45 90% 80%), hsl(43 80% 45%))",
                          boxShadow:
                            "0 0 0 2px hsl(43 70% 80%), 0 6px 14px rgba(0,0,0,0.25)",
                        }}
                      >
                        <span className="font-display text-lg md:text-xl text-white">
                          {stop.icon}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="
                        flex-1 
                        rounded-2xl 
                        px-4 py-3 md:px-6 md:py-4 
                        bg-background/80 
                        backdrop-blur-sm 
                        border border-gold/30 
                        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                        hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]
                        hover:-translate-y-0.5
                        hover:border-gold
                        transition-all
                        flex items-center justify-between
                      "
                    >
                      <div>
                        <p className="font-display text-xs md:text-sm uppercase tracking-[0.25em] text-gold/80 mb-1">
                          {stop.label}
                        </p>
                        <h3 className="font-display text-lg md:text-2xl text-foreground mb-1 md:mb-2">
                          {stop.title}
                        </h3>
                        <p
  className="font-body text-l md:text-base text-[hsl(28_30%_28%)] font-medium"
  style={{ letterSpacing: "0.03em" }}
>
  {stop.date} • {stop.time}
</p>

                        <p className="font-body text-xs text-gold/90 mt-2">
                          Tap to view details →
                        </p>
                        {/* <p className="font-body text-xs text-gold/90 mt-2 flex items-center gap-1">
  <span className="hidden md:inline">Click to view details</span>
  <span className="inline md:hidden">Tap to view details 👆</span>
</p> */}

                      </div>

                      {/* little arrow cue on desktop */}
                      <span className="hidden md:inline-block font-display text-xl text-gold/80">
                        ↠
                      </span>
                    </div>
                  </button>
                </div>
              );
            });
          })()}
        </div>
      </div>

    </section>
  );
};
