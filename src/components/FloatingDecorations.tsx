"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const flowers = [
  {
    Icon: Sparkles,
    position: "top-10 left-5 md:left-10",
    size: 20,
    delay: 0,
    duration: 6,
    opacity: 0.15,
  },
  {
    Icon: Heart,
    position: "bottom-20 right-5 md:right-10",
    size: 16,
    delay: 1,
    duration: 7,
    opacity: 0.1,
  },
  {
    Icon: Sparkles,
    position: "top-1/3 right-8 md:right-16",
    size: 14,
    delay: 2,
    duration: 8,
    opacity: 0.12,
  },
  {
    Icon: Heart,
    position: "bottom-1/3 left-8 md:left-16",
    size: 12,
    delay: 0.5,
    duration: 5,
    opacity: 0.1,
  },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((f, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${f.position}`}
          style={{ opacity: f.opacity }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <f.Icon size={f.size} color="#c9a84c" />
        </motion.div>
      ))}
    </div>
  );
}
