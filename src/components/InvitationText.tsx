"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { content } from "@/config/wedding";

interface InvitationTextProps {
  lang: string;
}

export default function InvitationText({ lang }: InvitationTextProps) {
  const t = content[lang] || content.uz;

  return (
    <section className="relative py-24 px-6 bg-cream">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative rounded-2xl p-1"
          style={{
            background:
              "linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-2xl px-8 md:px-14 py-16 bg-navy text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 5 Q50 20 65 15 Q55 35 40 50 Q25 35 15 15 Q30 20 40 5Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
                backgroundSize: "100px 100px",
              }}
            />

            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Quote
                className="mx-auto mb-6"
                size={36}
                color="#c9a84c"
                opacity={0.5}
              />

              <h3 className="font-serif text-xl md:text-2xl text-gold mb-8 tracking-wide">
                {t.invitationTitle}
              </h3>

              <div className="w-12 h-px mx-auto mb-8 bg-gold/40" />

              <p className="font-body text-base md:text-lg text-gold-light/80 leading-relaxed font-light italic max-w-lg mx-auto">
                {t.invitationText}
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gold/30" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" />
                    <path d="M8 3 L9 6 L12 6 L10 8 L11 11 L8 9 L5 11 L6 8 L4 6 L7 6 Z" fill="#c9a84c" opacity="0.5" />
                  </svg>
                </motion.div>
                <div className="w-8 h-px bg-gold/30" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="floral-divider mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
