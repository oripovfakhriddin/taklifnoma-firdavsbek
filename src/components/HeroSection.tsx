"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface HeroSectionProps {
  lang: string;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content[lang] || content.uz;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c2340 0%, #1a365d 40%, #2a4a7f 70%, #0c2340 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q60 30 80 30 Q60 50 50 70 Q40 50 20 30 Q40 30 50 10Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
            backgroundSize: "120px 120px",
          }}
        />

        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="#c9a84c"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <path
                  d="M30 15 L33 25 L44 25 L35 32 L38 43 L30 36 L22 43 L25 32 L16 25 L27 25 Z"
                  fill="#c9a84c"
                  opacity="0.4"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="text-gold-light/60 text-sm tracking-[0.3em] uppercase mb-8 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-script text-gold mb-4 leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {weddingData.groom}
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-3 my-2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="h-px w-12 bg-gold/40" />
          <Heart size={16} fill="#c9a84c" color="#c9a84c" />
          <div className="h-px w-12 bg-gold/40" />
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl font-script text-gold mb-6 leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {weddingData.bride}
        </motion.h2>

        <motion.p
          className="text-gold-light/80 text-lg md:text-xl font-body italic font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-2 text-gold-light/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-xs tracking-widest font-body">
            {t.scrollDown}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
