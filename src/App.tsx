import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioPlayer, AudioPlayerHandle } from "@/components/AudioPlayer";
import { useRef, useState, useEffect } from "react";  // ⬅️ added useEffect
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const audioPlayerRef = useRef<AudioPlayerHandle>(null);
  const [doorsOpened, setDoorsOpened] = useState(false);

  const handleDoorsOpen = () => {
    setDoorsOpened(true); // just flip the flag, don't start audio here
  };

  // 🔥 Start audio AFTER AudioPlayer is mounted
  useEffect(() => {
    if (doorsOpened && audioPlayerRef.current) {
      audioPlayerRef.current.startAudio();
    }
  }, [doorsOpened]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* AUDIO PLAYER appears only after doors open */}
          {doorsOpened && <AudioPlayer ref={audioPlayerRef} />}

          <Routes>
            <Route path="/" element={<Index onDoorsOpen={handleDoorsOpen} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
