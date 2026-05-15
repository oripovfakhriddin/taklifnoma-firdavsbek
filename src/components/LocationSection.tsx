"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface LocationSectionProps {
  lang: string;
}

export default function LocationSection({ lang }: LocationSectionProps) {
  const t = content[lang] || content.uz;

  return (
    <section className="relative py-24 px-6 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 10 L35 25 L50 25 L38 35 L42 50 L30 40 L18 50 L22 35 L10 25 L25 25 Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MapPin className="mx-auto mb-4" size={24} color="#c9a84c" />
          <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-wide">
            {t.locationTitle}
          </h2>
          <div className="w-12 h-px mx-auto mt-4 bg-gold/40" />
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
          <div className="rounded-2xl px-8 md:px-12 py-10 bg-cream relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 Q65 25 85 20 Q70 45 50 65 Q30 45 15 20 Q35 25 50 5Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
                backgroundSize: "cover",
              }}
            />

            <div className="relative z-10">
              <motion.h3
                className="font-serif text-2xl md:text-3xl text-navy text-center mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {weddingData.venueName}
              </motion.h3>

              <motion.p
                className="font-body text-navy/60 text-center text-sm mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {weddingData.city}
              </motion.p>

              <motion.p
                className="font-body text-navy/50 text-center text-sm mb-8 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {weddingData.address}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={weddingData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #0c2340, #1a365d)",
                    color: "#e8d48b",
                    boxShadow: "0 4px 15px rgba(12,35,64,0.3)",
                  }}
                  aria-label={t.googleMaps}
                >
                  <MapPin size={16} />
                  {t.googleMaps}
                  <ExternalLink size={14} />
                </a>

                <a
                  href={weddingData.yandexMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider border transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: "#c9a84c",
                    color: "#0c2340",
                  }}
                  aria-label={t.yandexMaps}
                >
                  <MapPin size={16} />
                  {t.yandexMaps}
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
