import { FC } from "react";
import palaceBackground from "@/assets/palace-background.jpg";
import couplePortrait from "@/assets/couple-portrait.jpg";

export const OurStory: FC = () => {
  const milestones = [
    {
      year: "2019",
      title: "First Meeting",
      description: "Our paths crossed at a mutual friend's wedding in Amritsar, where fate had its own plans.",
    },
    {
      year: "2020",
      title: "Growing Closer",
      description: "What started as friendship blossomed into something deeper through countless conversations.",
    },
    {
      year: "2022",
      title: "The Proposal",
      description: "Under the golden lights of the Harmandir Sahib, Darshan asked for forever.",
    },
    {
      year: "2025",
      title: "Our Wedding",
      description: "Two souls become one in the presence of Waheguru and our beloved families.",
    },
  ];

  return (
    <section
      id="our-story"
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
          background: "linear-gradient(180deg, hsl(350 35% 92% / 0.88), hsl(30 40% 92% / 0.9), hsl(350 35% 92% / 0.88))",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-lg text-rose-dark tracking-widest uppercase mb-2">
            A Journey of Love
          </p>
          <h2
            className="font-calligraphy text-5xl md:text-6xl lg:text-7xl text-gold-dark mb-4"
            style={{ textShadow: "0 2px 4px hsl(43 70% 50% / 0.2)" }}
          >
            Our Story
          </h2>
          <div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(43 70% 50%), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full lg:w-2/5">
            <div
              className="relative palace-frame rounded-lg overflow-hidden"
              style={{
                boxShadow: "0 20px 60px hsl(25 40% 20% / 0.25)",
              }}
            >
              <img
                src={couplePortrait}
                alt="Harleen and Darshan"
                className="w-full h-80 md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="w-full lg:w-3/5">
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5"
                style={{
                  background: "linear-gradient(180deg, hsl(43 70% 50%), hsl(350 35% 60%), hsl(43 70% 50%))",
                }}
              />

              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-12 pb-10 last:pb-0">
                  {/* Dot */}
                  <div
                    className="absolute left-2 top-1 w-5 h-5 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(43 70% 55%), hsl(43 80% 45%))",
                      boxShadow: "0 0 15px hsl(43 70% 50% / 0.5)",
                      border: "2px solid hsl(40 50% 95%)",
                    }}
                  />

                  <div
                    className="p-6 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, hsl(30 40% 94% / 0.95), hsl(35 35% 90% / 0.95))",
                      border: "1px solid hsl(43 60% 75% / 0.5)",
                      boxShadow: "0 4px 20px hsl(25 40% 20% / 0.1)",
                    }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-display mb-2"
                      style={{
                        background: "linear-gradient(135deg, hsl(43 60% 80%), hsl(43 70% 70%))",
                        color: "hsl(25 40% 20%)",
                      }}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote
            className="font-body text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto"
            style={{ lineHeight: 1.8 }}
          >
            "In each other, we found not just love, but a reflection of our souls.
            Together, with the blessings of Waheguru, we begin our journey as one."
          </blockquote>
          <p className="font-calligraphy text-3xl text-gold mt-6">
            Harleen & Darshan
          </p>
        </div>
      </div>
    </section>
  );
};
