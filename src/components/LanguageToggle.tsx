"use client";

import { motion } from "framer-motion";

interface LanguageToggleProps {
  lang: string;
  onToggle: () => void;
  show: boolean;
}

export default function LanguageToggle({
  lang,
  onToggle,
  show,
}: LanguageToggleProps) {
  if (!show) return null;

  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider backdrop-blur-md border border-gold/30 cursor-pointer"
      style={{
        background: "rgba(12, 35, 64, 0.6)",
        color: "#e8d48b",
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Tilni almashtirish"
    >
      {lang === "uz" ? "RU" : "UZ"}
    </motion.button>
  );
}
