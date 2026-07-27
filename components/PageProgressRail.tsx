"use client";

import { useEffect, useState } from "react";

export default function PageProgressRail() {
  const [currentSection, setCurrentSection] = useState(1);
  const [totalSections, setTotalSections] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-section-index]");
      if (!sections || sections.length === 0) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);
      setTotalSections(sections.length);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let activeIndex = 1;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const index = parseInt(sec.getAttribute("data-section-index") || "1", 10);
        if (scrollPosition >= top) {
          activeIndex = index;
        }
      });

      setCurrentSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const currentFormatted = String(currentSection).padStart(2, "0");
  const totalFormatted = String(totalSections).padStart(2, "0");

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian/85 backdrop-blur-md border border-champagne/30 text-paper font-mono text-[11px] uppercase tracking-[0.08em] shadow-lg transition-opacity duration-300"
    >
      <span className="text-champagne font-bold">{currentFormatted}</span>
      <span className="text-mist">—</span>
      <span className="text-mist">{totalFormatted}</span>
    </div>
  );
}
