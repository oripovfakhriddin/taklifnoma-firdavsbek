"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
}

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !muted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, muted]);

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/wedding.mp3" type="audio/mpeg" />
      </audio>

      {isPlaying && (
        <motion.button
          onClick={toggleMute}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-gold/30 cursor-pointer"
          style={{
            background: "rgba(12, 35, 64, 0.6)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={muted ? "Musiqani yoqish" : "Musiqani o'chirish"}
        >
          {muted ? (
            <VolumeX size={18} className="text-gold-light" />
          ) : (
            <Volume2 size={18} className="text-gold-light" />
          )}
        </motion.button>
      )}
    </>
  );
}
