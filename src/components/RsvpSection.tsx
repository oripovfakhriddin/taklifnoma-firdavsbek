"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface RsvpSectionProps {
  lang: string;
}

export default function RsvpSection({ lang }: RsvpSectionProps) {
  const t = content[lang] || content.uz;

  return (
    <section className="relative py-24 px-6 bg-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='2' fill='%23c9a84c'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Send className="mx-auto mb-4" size={24} color="#c9a84c" />
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-wide">
            {t.rsvpTitle}
          </h2>
          <div className="w-12 h-px mx-auto mt-4 bg-gold/60" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl px-8 md:px-12 py-12 bg-cream text-center relative">
            <motion.p
              className="font-body text-base md:text-lg text-navy/70 leading-relaxed italic mb-8 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t.rsvpText}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={weddingData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #0c2340, #1a365d)",
                  color: "#e8d48b",
                  boxShadow: "0 4px 15px rgba(12,35,64,0.3)",
                }}
                aria-label={t.telegram}
              >
                <Send size={16} />
                {t.telegram}
              </a>

              <a
                href={`tel:${weddingData.telegramUrl.replace("https://t.me/", "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider border transition-all duration-300"
                style={{
                  borderColor: "#c9a84c",
                  color: "#0c2340",
                }}
                aria-label={t.phone}
              >
                <Phone size={16} />
                {t.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
