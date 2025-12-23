import { FC, useState } from "react";
import royalDoor from "@/assets/royal-palace-door.png";

interface RoyalDoorsProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const RoyalDoors: FC<RoyalDoorsProps> = ({ onOpen, isOpen }) => {
  const [isPulling, setIsPulling] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsPulling(true);
    setTimeout(() => {
      onOpen();
      setIsPulling(false);
    }, 800);
  };

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
        isOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "2000px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep to-foreground" />

      {/* LEFT DOOR */}
      <div
        className={`absolute left-0 top-0 w-1/2 h-full overflow-hidden ${
          isOpen ? "animate-door-left" : ""
        }`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
      >
        <div
          className="
            absolute inset-0 
            bg-[length:200%_100%] md:bg-cover
            bg-left-center md:bg-right
          "
          style={{
            backgroundImage: `url(${royalDoor})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, transparent 50%, rgba(255,215,0,0.05) 100%)",
          }}
        />
        {/* Rustic palace glow */}
        <div
          className="absolute inset-y-0 w-6 pointer-events-none"
          style={{
            right: 0,
            background:
              "radial-gradient(circle at left center, rgba(255,215,150,0.35), rgba(0,0,0,0) 75%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* RIGHT DOOR */}
      <div
        className={`absolute right-0 top-0 w-1/2 h-full overflow-hidden ${
          isOpen ? "animate-door-right" : ""
        }`}
        style={{ transformStyle: "preserve-3d", transformOrigin: "right center" }}
      >
        <div
          className="
            absolute inset-0 
            bg-[length:200%_100%] md:bg-cover
            bg-right-center md:bg-left
          "
          style={{
            backgroundImage: `url(${royalDoor})`,
            transform: "scaleX(-1)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(-90deg, rgba(0,0,0,0.25) 0%, transparent 50%, rgba(255,215,0,0.05) 100%)",
          }}
        />
        {/* Rustic palace glow */}
        <div
          className="absolute inset-y-0 w-6 pointer-events-none"
          style={{
            left: 0,
            background:
              "radial-gradient(circle at right center, rgba(255,215,150,0.35), rgba(0,0,0,0) 75%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* 👑 ROYAL PALACE "ENTER" BUTTON */}
      {!isOpen && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent auto-triggering parent twice
            handleOpen();
          }}
          className="
            absolute z-50 px-6 py-3 
            text-lg tracking-wide 
            rounded-md uppercase 
            font-semibold
            transition-all duration-300
            hover:scale-105
          "
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "linear-gradient(135deg, rgba(140,105,45,0.65), rgba(90,60,30,0.65))",
            border: "1px solid rgba(255,215,150,0.4)",
            color: "rgba(255,230,180,0.95)",
            boxShadow:
              "0 0 20px rgba(255,215,150,0.4), inset 0 0 8px rgba(255,230,180,0.2)",
            backdropFilter: "blur(2px)",
            textShadow: "0 0 6px rgba(0,0,0,0.7)",
          }}
        >
          Tap to Enter
        </button>
      )}

      {/* Structure holder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"></div>
    </div>
  );
};
