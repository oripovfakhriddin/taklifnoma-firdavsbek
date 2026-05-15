"use client";

import { useState, useCallback } from "react";
import IntroScreen from "@/components/IntroScreen";
import MusicPlayer from "@/components/MusicPlayer";
import LanguageToggle from "@/components/LanguageToggle";
import HeroSection from "@/components/HeroSection";
import InvitationText from "@/components/InvitationText";
import DateCalendar from "@/components/DateCalendar";
import Countdown from "@/components/Countdown";
import LocationSection from "@/components/LocationSection";
import RsvpSection from "@/components/RsvpSection";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import FloatingDecorations from "@/components/FloatingDecorations";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("uz");

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "uz" ? "ru" : "uz"));
  }, []);

  return (
    <>
      {!isOpen && <IntroScreen onOpen={handleOpen} lang={lang} />}

      <MusicPlayer isPlaying={isOpen} />
      <LanguageToggle lang={lang} onToggle={toggleLang} show={isOpen} />
      <FloatingDecorations />

      <main
        className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        <HeroSection lang={lang} />
        <InvitationText lang={lang} />
        <DateCalendar lang={lang} />
        <Countdown lang={lang} />
        <LocationSection lang={lang} />
        <RsvpSection lang={lang} />
        <CardSection lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  );
}
