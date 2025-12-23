import { FC, useEffect, useState } from "react";
import petal1 from "@/assets/petal-1.png";
import petal2 from "@/assets/petal-2.png";

interface Petal {
  id: number;
  image: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  swayDuration: number;
}

interface FallingPetalsProps {
  count?: number;
  className?: string;
}

export const FallingPetals: FC<FallingPetalsProps> = ({ count = 20, className = "" }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalImages = [petal1, petal2];
    const newPetals: Petal[] = [];

    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: i,
        image: petalImages[Math.floor(Math.random() * petalImages.length)],
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 8,
        size: 30 + Math.random() * 40,
        rotation: Math.random() * 360,
        swayDuration: 3 + Math.random() * 3,
      });
    }

    setPetals(newPetals);
  }, [count]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-100px",
            width: petal.size,
            height: petal.size,
            animation: `petalFall ${petal.duration}s linear infinite, petalSway ${petal.swayDuration}s ease-in-out infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <img
            src={petal.image}
            alt=""
            className="w-full h-full object-contain opacity-80"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          />
        </div>
      ))}
    </div>
  );
};
