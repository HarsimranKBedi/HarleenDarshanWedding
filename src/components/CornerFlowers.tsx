import { FC } from "react";
import cornerFlowers from "@/assets/corner-flowers.png";

interface CornerFlowersProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export const CornerFlowers: FC<CornerFlowersProps> = ({ position, className = "" }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
  };

  return (
    <div
      className={`absolute pointer-events-none z-20 ${positionClasses[position]} ${className}`}
      style={{
        width: "clamp(150px, 30vw, 350px)",
        height: "clamp(150px, 30vw, 350px)",
      }}
    >
      <img
        src={cornerFlowers}
        alt=""
        className="w-full h-full object-contain opacity-90"
        style={{
          filter: "drop-shadow(0 4px 15px hsl(350 35% 50% / 0.2))",
        }}
      />
    </div>
  );
};
