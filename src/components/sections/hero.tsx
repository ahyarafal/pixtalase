"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_BG = "https://www.figma.com/api/mcp/asset/454bc344-1fb3-42d8-a045-5a5139b4b41f";
const IMG_LOGO = "https://www.figma.com/api/mcp/asset/7029aacd-dee4-4f9b-a178-473b13d5d45a";
const IMG_ARROW = "https://www.figma.com/api/mcp/asset/5db812be-112e-46c1-819e-f31384b5a5f7";

export function Hero() {
  const { lang, setLang } = useLang();
  const tr = translations[lang].nav;
  const hero = translations[lang].hero;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky nav */}
      <nav
        className={[
          "fixed top-0 inset-x-0 z-50 flex items-center gap-4 md:gap-16 px-5 py-4 transition-all duration-300 ease-in-out",
          scrolled
            ? "bg-black/50 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)] border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="relative shrink-0" style={{ width: "38.785px", height: "35.455px" }}>
          <img alt="Pixtalase" src={IMG_LOGO} className="absolute inset-0 w-full h-full object-contain" decoding="async" />
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex flex-1 items-center gap-4 min-w-0">
          <div
            className="shrink-0 flex items-center justify-center px-4 py-2 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: scrolled ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.4)",
              border: "0.5px solid white",
            }}
          >
            <span
              className="font-inter font-bold text-white text-center text-base whitespace-nowrap"
              style={{ letterSpacing: "0.04em", textShadow: "0px 2px 4px rgba(0,0,0,0.35)" }}
            >
              {tr.home}
            </span>
          </div>

          {tr.links.map((link) => (
            <div key={link} className="shrink-0 flex items-center justify-center px-4 py-2 rounded-full">
              <span
                className="font-inter font-semibold text-base text-center whitespace-nowrap"
                style={{
                  color: "#f3f2ec",
                  letterSpacing: "0.04em",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.35)",
                }}
              >
                {link}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Language switcher */}
        <div
          className="shrink-0 flex items-center justify-end p-0.5 rounded-full transition-colors duration-300"
          style={{ backgroundColor: scrolled ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.4)" }}
        >
          <button
            onClick={() => setLang("EN")}
            className="flex items-center justify-center rounded-full w-8 h-8 text-sm font-semibold transition-all"
            style={{
              backgroundColor: lang === "EN" ? "white" : "transparent",
              color: lang === "EN" ? "#20657c" : "white",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ID")}
            className="flex items-center justify-center rounded-full w-8 h-8 text-sm font-medium transition-all"
            style={{
              backgroundColor: lang === "ID" ? "white" : "transparent",
              color: lang === "ID" ? "#20657c" : "white",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            ID
          </button>
        </div>
      </nav>

      {/* Hero section */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: "822px", padding: "20px 19px" }}
      >
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            src={IMG_BG}
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Spacer matching nav height so hero content isn't hidden behind fixed nav */}
        <div className="shrink-0" style={{ height: "67px" }} />

        {/* Ticker row */}
        <div
          className="relative shrink-0 flex items-center justify-between py-4 w-full font-inter font-medium text-sm border-t"
          style={{ color: "#f3f2ec", letterSpacing: "0.04em", borderColor: "rgba(255,255,255,0.2)" }}
        >
          <p>{hero.tickerLeft}</p>
          <p className="underline decoration-solid">{hero.tickerRight}</p>
        </div>

        {/* Hero content */}
        <div className="relative flex-1 flex flex-col gap-10 items-center md:items-end justify-center min-h-0 w-full py-10">
          <p
            className="font-jakarta font-medium text-white shrink-0 w-full md:w-[400px] text-center md:text-left"
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              lineHeight: "normal",
              textShadow: "20px 14px 24px rgba(0,0,0,0.25)",
            }}
          >
            {hero.heading}
          </p>

          <div className="flex items-center gap-2 shrink-0 justify-center md:justify-start w-[400px]">
            <div
              className="flex items-center justify-center px-8 py-4 rounded-full shrink-0 cursor-pointer"
              style={{ backgroundColor: "#252525" }}
            >
              <span
                className="font-inter font-medium text-white text-center text-lg whitespace-nowrap"
                style={{ letterSpacing: "0.04em" }}
              >
                {hero.cta}
              </span>
            </div>

            <div
              className="flex items-center justify-center p-3 rounded-full shrink-0 cursor-pointer"
              style={{
                backgroundColor: "#e62727",
                boxShadow: "0px 4px 2px rgba(0,0,0,0.25)",
              }}
            >
              <img alt="" src={IMG_ARROW} className="w-6 h-6" decoding="async" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
