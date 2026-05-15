"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Copy, Check } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface CardSectionProps {
  lang: string;
}

export default function CardSection({ lang }: CardSectionProps) {
  const t = content[lang] || content.uz;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.cardNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = weddingData.cardNumber;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-navy overflow-hidden">
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
          <CreditCard className="mx-auto mb-4" size={24} color="#c9a84c" />
          <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-wide">
            {t.cardTitle}
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
          <div className="rounded-2xl px-8 md:px-12 py-10 bg-cream text-center relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 Q65 25 85 20 Q70 45 50 65 Q30 45 15 20 Q35 25 50 5Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
                backgroundSize: "cover",
              }}
            />

            <div className="relative z-10">
              <motion.p
                className="font-body text-navy/60 text-sm mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t.cardName}
              </motion.p>

              <motion.p
                className="font-serif text-xl md:text-2xl text-navy mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {weddingData.cardHolder}
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: "#c9a84c",
                  background: "rgba(201,168,76,0.05)",
                }}
                onClick={handleCopy}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleCopy();
                }}
                aria-label="Karta raqamini nusxalash"
              >
                <span className="font-mono text-lg md:text-xl tracking-widest text-navy font-semibold">
                  {weddingData.cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")}
                </span>
                <span
                  className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-navy text-gold-light"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={12} />
                      <span className="hidden sm:inline">
                        {lang === "uz" ? "Nusxalandi" : "Скопировано"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span className="hidden sm:inline">{t.cardCopy}</span>
                    </>
                  )}
                </span>
              </motion.div>

              <motion.p
                className="font-body text-navy/40 text-xs mt-4 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {lang === "uz"
                  ? "Raqamni bosish orqali nusxa oling"
                  : "Нажмите на номер, чтобы скопировать"}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
