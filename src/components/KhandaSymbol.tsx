import { FC } from "react";

interface KhandaSymbolProps {
  className?: string;
  size?: number;
}

export const KhandaSymbol: FC<KhandaSymbolProps> = ({ className = "", size = 120 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-glow-pulse"
        style={{
          filter: "drop-shadow(0 0 15px hsl(43 70% 50% / 0.5))"
        }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 70%, 65%)" />
            <stop offset="25%" stopColor="hsl(43, 80%, 50%)" />
            <stop offset="50%" stopColor="hsl(43, 70%, 70%)" />
            <stop offset="75%" stopColor="hsl(43, 80%, 45%)" />
            <stop offset="100%" stopColor="hsl(43, 70%, 60%)" />
          </linearGradient>
          <linearGradient id="goldGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43, 75%, 40%)" />
            <stop offset="50%" stopColor="hsl(43, 80%, 35%)" />
            <stop offset="100%" stopColor="hsl(43, 75%, 40%)" />
          </linearGradient>
        </defs>
        
        {/* Outer Chakra (Circle) */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="url(#goldGradientDark)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Left Kirpan (Curved Sword) */}
        <path
          d="M 15 50 Q 20 30 30 15 Q 32 12 35 15 Q 38 20 36 25 Q 30 40 28 50 Q 30 60 36 75 Q 38 80 35 85 Q 32 88 30 85 Q 20 70 15 50"
          fill="url(#goldGradient)"
          stroke="url(#goldGradientDark)"
          strokeWidth="0.5"
        />
        
        {/* Right Kirpan (Curved Sword) */}
        <path
          d="M 85 50 Q 80 30 70 15 Q 68 12 65 15 Q 62 20 64 25 Q 70 40 72 50 Q 70 60 64 75 Q 62 80 65 85 Q 68 88 70 85 Q 80 70 85 50"
          fill="url(#goldGradient)"
          stroke="url(#goldGradientDark)"
          strokeWidth="0.5"
        />
        
        {/* Central Khanda (Double-edged Sword) */}
        <path
          d="M 50 8 L 53 12 L 53 45 L 55 48 L 55 52 L 53 55 L 53 88 L 50 92 L 47 88 L 47 55 L 45 52 L 45 48 L 47 45 L 47 12 L 50 8"
          fill="url(#goldGradient)"
          stroke="url(#goldGradientDark)"
          strokeWidth="0.5"
        />
        
        {/* Central Chakra Detail */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="url(#goldGradient)"
          stroke="url(#goldGradientDark)"
          strokeWidth="0.5"
        />
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="url(#goldGradientDark)"
        />
      </svg>
    </div>
  );
};
