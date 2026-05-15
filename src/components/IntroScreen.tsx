"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Music, ChevronDown } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface IntroScreenProps {
  onOpen: () => void;
  lang: string;
}

export default function IntroScreen({ onOpen, lang }: IntroScreenProps) {
  const t = content[lang] || content.uz;
  const [showEnvelope, setShowEnvelope] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEnvelope(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #0c2340 0%, #1a365d 30%, #2a4a7f 60%, #0c2340 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-gold/30"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-10 w-3 h-3 rounded-full bg-gold/20"
            animate={{ y: [10, -10, 10], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <div
              className="relative rounded-2xl p-1"
              style={{
                background:
                  "linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c)",
              }}
            >
              <div className="rounded-2xl px-8 py-12 text-center relative overflow-hidden bg-navy">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5 L35 20 L50 20 L38 30 L42 45 L30 35 L18 45 L22 30 L10 20 L25 20 Z' fill='%23c9a84c' opacity='0.3'/%3E%3C/svg%3E\")",
                    backgroundSize: "80px 80px",
                  }}
                />

                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart
                    className="mx-auto mb-4"
                    size={28}
                    fill="#c9a84c"
                    color="#c9a84c"
                  />
                </motion.div>

                <motion.p
                  className="text-gold-light/80 text-sm tracking-widest uppercase mb-4 font-body"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {t.subtitle}
                </motion.p>

                <motion.h1
                  className="text-3xl md:text-4xl font-script text-gold mb-3 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {weddingData.groom}
                  <br />
                  <span className="text-gold-light/60 text-lg font-serif">
                    &amp;
                  </span>
                  <br />
                  {weddingData.bride}
                </motion.h1>

                <motion.div
                  className="w-16 h-0.5 mx-auto my-4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />

                <motion.button
                  onClick={onOpen}
                  className="mt-6 px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wider
                    relative overflow-hidden group cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #c9a84c, #d4b85a, #c9a84c)",
                    color: "#0c2340",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  aria-label="Taklifnomani ochish"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Music size={16} />
                    {t.introButton}
                  </span>
                </motion.button>

                <motion.div
                  className="mt-6 w-12 h-12 mx-auto rounded-full border-2 border-gold/30 flex items-center justify-center"
                  style={{
                    boxShadow: "0 0 20px rgba(201,168,76,0.2)",
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-8 h-8 rounded-full border-2 border-gold/50 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-gold rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {showEnvelope && (
            <motion.p
              className="text-gold-light/50 text-xs mt-6 flex items-center gap-1 font-body tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={12} />
              <span>05 . 04 . 2026</span>
              <ChevronDown size={12} />
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
