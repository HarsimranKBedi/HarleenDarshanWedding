import { FC, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "shagan", label: "Shagan: The Sacred Blessing" },
  { id: "sangeetSoiree", label: "Sangeet Soirée" },
  { id: "engagement", label: "Union of Rings" },
  { id: "barat", label: "Barat & Reception" },
  { id: "anandKaraj", label: "Anand Karaj" },
  // { id: "phere", label: "Phere" },
  { id: "doli", label: "Doli" },
];

interface NavigationProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: FC<NavigationProps> = ({ activeSection = "home", onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 py-4 px-4 md:px-8"
      style={{
        background: "linear-gradient(180deg, hsl(30 40% 90% / 0.95), hsl(35 35% 88% / 0.9))",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid hsl(43 60% 70% / 0.5)",
        boxShadow: "0 4px 20px hsl(25 40% 20% / 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Names */}
        <div
          className="font-calligraphy text-2xl md:text-3xl text-gold-dark cursor-pointer"
          onClick={() => handleNavClick("home")}
          style={{ textShadow: "0 2px 4px hsl(43 70% 50% / 0.3)" }}
        >
          H & D
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 font-display text-sm tracking-wider transition-all duration-300 rounded-md ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                background:
                  activeSection === item.id
                    ? "linear-gradient(135deg, hsl(43 60% 80% / 0.6), hsl(43 70% 75% / 0.4))"
                    : "transparent",
                border:
                  activeSection === item.id
                    ? "1px solid hsl(43 70% 60% / 0.5)"
                    : "1px solid transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "linear-gradient(135deg, hsl(43 60% 80% / 0.5), hsl(43 70% 75% / 0.3))",
            border: "1px solid hsl(43 70% 60% / 0.4)",
          }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gold-dark" />
          ) : (
            <Menu className="w-6 h-6 text-gold-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 px-4 animate-fade-in"
          style={{
            background: "linear-gradient(180deg, hsl(30 40% 92% / 0.98), hsl(35 35% 88% / 0.98))",
            borderBottom: "2px solid hsl(43 60% 70% / 0.5)",
            boxShadow: "0 10px 30px hsl(25 40% 20% / 0.15)",
          }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 font-display text-base tracking-wider transition-all duration-300 rounded-lg text-left ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                style={{
                  background:
                    activeSection === item.id
                      ? "linear-gradient(90deg, hsl(43 60% 80% / 0.5), hsl(43 70% 75% / 0.3))"
                      : "transparent",
                  borderLeft:
                    activeSection === item.id
                      ? "3px solid hsl(43 70% 50%)"
                      : "3px solid transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
