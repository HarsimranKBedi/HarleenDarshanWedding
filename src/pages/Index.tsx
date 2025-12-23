import { useState, useEffect, useRef } from "react";
import { RoyalDoors } from "@/components/RoyalDoors";
import { FallingPetals } from "@/components/FallingPetals";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { EventSection } from "@/components/EventSection";
import { OurStory } from "@/components/OurStory";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Footer } from "@/components/Footer";

import haldiCeremony from "@/assets/haldi-ceremony.jpg";
import sangeetCelebration from "@/assets/sangeet-celebration.jpg";
import anandKaraj from "@/assets/anand-karaj.jpg";
import barat from "@/assets/barat.jpg";
import phere from "@/assets/phere.jpg";
import doli from "@/assets/doli.jpg";
// import envelopeHD from "@/assets/envelope.png";

import { InvitationCard } from "@/components/InvitationCard";


interface IndexProps {
  onDoorsOpen: () => void;   // 👈 comes from App.tsx
}

const Index = ({ onDoorsOpen }: IndexProps) => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (doorsOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [doorsOpen]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "haldi", "sangeet", "anand-karaj", "our-story", "gallery"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Royal Palace Doors */}
      <RoyalDoors
        onOpen={() => {
          setDoorsOpen(true);   // open doors
          onDoorsOpen();        // 🎵 start audio (via App.tsx + AudioPlayer ref)
        }}
        isOpen={doorsOpen}
      />

      {/* Falling Petals - Always visible after doors open */}
      {doorsOpen && <FallingPetals count={25} />}

      {/* Main Content */}
      {showContent && (
        <div ref={mainRef} className="animate-fade-in">
          {/* Navigation */}
          <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Hero Section */}
          <HeroSection onEventClick={handleNavigate} />

          {/* Haldi Section */}

          <EventSection
            id="shagan"
            title="Shagan: The Sacred Blessing"
            subtitle="A blessing offered, a journey begun"
            date="January 21, 2026"
            time="6:00 PM"
            venue="Silver Banquet, 3ʳᵈ Floor,  Agrasen Foundation"
            description="The Shagan marks the gentle beginning of our celebrations, a moment where families meet not just to exchange gifts, but to exchange warmth, love, and prayers for a beautiful future. It is the first step into this union, wrapped in tradition, goodwill, and the quiet joy of seeing two lives come closer, surrounded by the people who matter the most."
            image={phere}
            imageAlt="Shagan: The Sacred Blessing"
            reversed
          />

          {/* <EventSection
            id="sangeetSoiree"
            title="Sangeet Soirée"
            subtitle="Where music becomes our memory"
            date="January 21, 2026"
            time="6:30 PM"
            venue="Silver Banquet, 3ʳᵈ Floor, Agrasen Foundation"
            description="An evening woven with rhythm, laughter, and unfiltered joy, the Sangeet Soiree is where both families come together to celebrate with dance, stories, and the kind of happiness that fills a room before the music even starts. It’s a night of letting go, showing love in the loudest, brightest ways, and creating moments that will be remembered long after the last song fades."
            image={haldiCeremony}
            imageAlt="Sangeet Soirée"
          /> */}

<EventSection
  id="sangeetSoiree"
  title="Sangeet Soirée"
  subtitle="Where music becomes our memory"
  date="January 21, 2026"
  time="6:30 PM"
  venue="Silver Banquet, 3ʳᵈ Floor, Agrasen Foundation"
  description="With heartfelt joy and warm regards, Harsimran Kaur Bedi cordially invites you to grace the Sangeet Soirée on Wednesday, January 21, 2026 at 6:30 in the evening at the Silver Banquet, 3rd Floor, Agrasen Foundation. Join us for an enchanting celebration of music, dance, laughter, and cherished moments as we gather to honour this joyous occasion. Your presence will make the evening truly memorable."
  image={haldiCeremony}
  imageAlt="Sangeet Soirée"
/>





          {/* Sangeet Section */}
          <EventSection
            id="engagement"
            title="Union of Rings"
            subtitle="Two promises, one beginning"
            date="January 21, 2026"
            time="7:30 PM onwards"
            venue="Silver Banquet, 3ʳᵈ Floor, Agrasen Foundation"
            description="A quiet yet powerful moment when two souls choose each other with open hearts and a shared future. The exchange of rings becomes more than a tradition, it becomes a whispered promise of companionship, trust and a lifetime of choosing love every single day. Surrounded by the people who mean the most, this ceremony marks the true beginning of their forever."
            image={sangeetCelebration}
            imageAlt="Union of Rings"
            reversed
          />

          {/* Anand Karaj Section */}
          <EventSection
            id="barat"
            title="Reception of Barat"
            subtitle="A joyful arrival filled with celebration"
            date="January 22, 2026"
            time="7:30 PM"
            venue="Platinum Banquet, Ground Floor, Agrasen Foundation"
            description="The Barat marks the spirited entry of the groom and his family, a moment alive with music laughter and excitement. Surrounded by friends and loved ones, the journey to the bride’s home becomes a lively celebration of love and happiness. It is a vibrant display of togetherness where every beat every smile and every step carries the joy of two families coming closer to one beautiful beginning."
            image={barat}
            imageAlt="Barat & Reception"
          />

<EventSection
            id="anandKaraj"
            title="Anand Karaj"
            subtitle="A union blessed in peace and grace"
            date="January 23, 2026"
            time="10:00 AM"
            venue="Gurudwara Gobind Dham, Thaltej, South Bopal"
            description="The Anand Karaj is a serene and deeply meaningful ceremony where two souls come together in the presence of the Guru and begin their journey side by side. Surrounded by family and held in an atmosphere of calm devotion, the couple walks the sacred path of the four Laavaan and offers their love, hopes and future to the guidance of the divine. It is a moment of pure blessing, a union built on faith, understanding and lifelong companionship."
            image={anandKaraj}
            imageAlt="Anand Karaj"
            reversed
          />

          {/* <EventSection
            id="phere"
            title="Phere"
            subtitle="Seven steps that seal a lifetime"
            date="March 17, 2025"
            time="9:00 AM"
            venue="Gurudwara Sahib, Amritsar"
            description="The Phere are the sacred circles that the couple takes around the holy fire, each round carrying a promise of trust respect and lifelong companionship. In this moment two hearts commit to walking through every chapter of life together with grace and understanding. Surrounded by the love of their families, these seven steps become the foundation of a future built on faith unity and an unbreakable bond."
            image={phere}
            imageAlt="Anand Karaj ceremony"
          /> */}
          

          <EventSection
            id="doli"
            title="Doli"
            subtitle="A heartfelt goodbye and a beautiful beginning"
            date="January 23, 2026"
            time="3:00 PM"
            venue="Agrasen Foundation"
            description="The Doli is a moment filled with deep emotion as the bride leaves her home carrying love memories and the blessings of everyone who has watched her grow. It is a gentle transition from one family to another, a step into a new life while holding every bond close to her heart. Surrounded by affection and teary smiles, this moment becomes a tender reminder that every ending is also a new beginning shaped with love and hope."
            image={doli}
            imageAlt="Doli"
            
          />

          {/* Our Story */}
          {/* <OurStory /> */}

          {/* Photo Gallery */}
          {/* <PhotoGallery /> */}

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
