"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const t = content[lang] || content.uz;

  return (
    <footer
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c2340 0%, #0a1a30 50%, #06101f 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 10 Q50 30 70 30 Q55 50 40 70 Q25 50 10 30 Q30 30 40 10Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="inline-flex"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#c9a84c"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <path
                d="M20 8 L23 18 L33 18 L25 25 L28 35 L20 28 L12 35 L15 25 L7 18 L17 18 Z"
                fill="#c9a84c"
                opacity="0.3"
              />
            </svg>
          </motion.div>
        </div>

        <p className="font-body text-gold-light/60 text-sm mb-4 italic">
          {weddingData.displayDate}
        </p>

        <div className="flex items-center justify-center gap-2 text-gold-light/40 text-xs">
          <div className="h-px w-12 bg-gold/20" />
          <Heart size={12} fill="#c9a84c" color="#c9a84c" opacity={0.5} />
          <div className="h-px w-12 bg-gold/20" />
        </div>

        <p className="font-script text-lg md:text-xl text-gold/60 mt-6">
          {t.footer}
        </p>

        <p className="font-body text-gold-light/20 text-xs mt-8 tracking-wider">
          &copy; {new Date().getFullYear()}
        </p>
      </motion.div>
    </footer>
  );
}
