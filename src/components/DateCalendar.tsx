"use client";

import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";
import { weddingData, content } from "@/config/wedding";

interface DateCalendarProps {
  lang: string;
}

const daysOfWeek = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

export default function DateCalendar({ lang }: DateCalendarProps) {
  const t = content[lang] || content.uz;
  const targetDate = new Date(weddingData.date);
  const targetDay = targetDate.getDate();
  const targetMonth = targetDate.getMonth();
  const targetYear = targetDate.getFullYear();

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const firstDayOfMonth = new Date(targetYear, targetMonth, 1).getDay();
  const daysInMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
  const startOffset = (firstDayOfMonth + 6) % 7;

  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];

  for (let i = 0; i < startOffset; i++) {
    currentWeek.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  const monthLabelRU = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const displayMonth =
    lang === "ru" ? monthLabelRU[targetMonth] : monthNames[targetMonth];

  return (
    <section className="relative py-24 px-6 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23c9a84c'/%3E%3C/svg%3E\")",
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
          <Calendar className="mx-auto mb-4" size={24} color="#c9a84c" />
          <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-wide">
            {t.dateTitle}
          </h2>
          <div className="w-12 h-px mx-auto mt-4 bg-gold/40" />
        </motion.div>

        <motion.div
          className="rounded-2xl p-1"
          style={{
            background:
              "linear-gradient(135deg, #c9a84c, #e8d48b, #c9a84c)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl px-6 md:px-10 py-8 bg-cream">
            <div className="text-center mb-6">
              <p className="font-serif text-lg text-navy/60">{displayMonth}</p>
              <p className="font-serif text-sm text-navy/40">{targetYear}</p>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-navy/50 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {weeks.flat().map((day, idx) => (
                <div
                  key={idx}
                  className={`text-center py-2 text-sm rounded-full ${
                    day === targetDay
                      ? "bg-gold text-navy font-bold relative"
                      : day
                        ? "text-navy/70 hover:bg-gold/20 transition-colors"
                        : ""
                  }`}
                >
                  {day === targetDay && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: "0 0 15px rgba(201,168,76,0.4)",
                      }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {day === targetDay ? (
                    <span className="relative z-10 flex items-center justify-center gap-1">
                      {day}
                      <Heart
                        size={8}
                        fill="#0c2340"
                        color="#0c2340"
                        className="inline"
                      />
                    </span>
                  ) : (
                    <span className="relative z-10">{day || ""}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gold/20 text-center">
              <p className="font-script text-2xl md:text-3xl text-navy">
                {weddingData.displayDate}
              </p>
              <p className="font-body text-navy/60 text-sm mt-1">
                {weddingData.time}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
