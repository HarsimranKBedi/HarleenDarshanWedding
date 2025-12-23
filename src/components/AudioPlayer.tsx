import { FC, useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Volume2, VolumeX } from "lucide-react";
import backgroundMusic from "@/assets/wedding-audio.mp3";

export interface AudioPlayerHandle {
  startAudio: () => void;
}

interface AudioPlayerProps {
  autoPlay?: boolean;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
  ({ autoPlay = false }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Expose startAudio() to parent components
    useImperativeHandle(ref, () => ({
      startAudio: () => {
        const audio = audioRef.current;
        if (audio) {
          audio.volume = 0.3;
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
        }
      },
    }));

    const togglePlay = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.volume = 0.3;
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    };

    return (
      <>
        <audio ref={audioRef} src={backgroundMusic} loop preload="auto" />

        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          style={{
            background:
              "linear-gradient(135deg, hsl(43 70% 45%) 0%, hsl(43 60% 35%) 100%)",
            boxShadow: isPlaying
              ? "0 0 20px hsl(43 70% 50% / 0.6), inset 0 0 10px hsl(43 80% 60% / 0.3)"
              : "0 4px 15px rgba(0,0,0,0.3)",
            border: "1px solid hsl(43 70% 55% / 0.5)",
          }}
        >
          {isPlaying ? (
            <Volume2
              className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform"
              style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))" }}
            />
          ) : (
            <VolumeX
              className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors"
            />
          )}
        </button>
      </>
    );
  }
);
