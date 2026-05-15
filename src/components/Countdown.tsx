"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface CountdownProps {
  lang: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: Date): TimeLeft | null {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ lang }: CountdownProps) {
  const t = content[lang] || content.uz;
  const targetDate = useMemo(() => new Date(weddingData.date), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <section className="relative py-24 px-6 bg-cream overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Clock className="mx-auto mb-4" size={32} color="#c9a84c" />
            <h3 className="font-script text-3xl md:text-4xl text-navy">
              {t.weddingDay}
            </h3>
            <p className="font-serif text-navy/60 mt-2">
              {weddingData.displayDate}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const items = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 px-6 bg-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 5 Q25 15 35 15 Q25 25 20 35 Q15 25 5 15 Q15 15 20 5Z' fill='%23c9a84c'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
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
          <Clock className="mx-auto mb-4" size={24} color="#c9a84c" />
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-wide">
            {t.countdownTitle}
          </h2>
          <div className="w-12 h-px mx-auto mt-4 bg-gold/60" />
        </motion.div>

        <div className="flex justify-center gap-3 md:gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div
                className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-2xl flex items-center justify-center flex-col"
                style={{
                  background:
                    "linear-gradient(135deg, #0c2340, #1a365d)",
                  boxShadow: "0 4px 20px rgba(12,35,64,0.15)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <motion.span
                  className="text-2xl md:text-3xl font-serif font-bold text-gold"
                  key={item.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
              </div>
              <span className="mt-2 text-xs md:text-sm font-body text-navy/60 tracking-wider uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
