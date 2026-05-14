"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_BACK_BTN = "https://www.figma.com/api/mcp/asset/942698fd-1408-4883-83e0-ccbf02ca755d";
const IMG_FWD_BTN = "https://www.figma.com/api/mcp/asset/d1c824ff-c638-498a-85c9-d024b9d79790";
const IMG_CHEVRON = "https://www.figma.com/api/mcp/asset/2b46d855-67ac-4cdc-91fc-3ab6d19ab9ca";

const SLIDE_PHOTOS = [
  "https://www.figma.com/api/mcp/asset/11031c52-dc38-4b47-9525-39fafcc3ecfd",
  "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg",
  "https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg",
];

const SLIDE_NUMS = ["01", "02", "03"];

export function CoreValue() {
  const [current, setCurrent] = useState(0);
  const { lang } = useLang();
  const tr = translations[lang].coreValue;
  const slide = tr.slides[current];

  const isFirst = current === 0;
  const isLast  = current === 2;

  const prev = () => { if (!isFirst) setCurrent((i) => i - 1); };
  const next = () => { if (!isLast)  setCurrent((i) => i + 1); };

  return (
    <section className="p-5" style={{ backgroundColor: "#f5f6fb" }}>
      <div
        className="flex flex-col gap-[60px] items-start w-full"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "clamp(24px, 4vw, 60px)",
          padding: "clamp(24px, 4vw, 60px)",
          boxShadow: "10px 11px 31.5px rgba(0,0,0,0.02)",
        }}
      >
        {/* Heading */}
        <div className="shrink-0 w-full lg:w-[60%]">
          <p
            className="font-jakarta font-medium w-full"
            style={{ fontSize: "clamp(28px, 5vw, 50px)", lineHeight: "1.2", letterSpacing: "-1.5px", color: "#252525" }}
          >
            {tr.heading}
          </p>
        </div>

        {/* Slider / 3-column content */}
        <div className="flex flex-col md:flex-row gap-5 items-start shrink-0 w-full">
          {/* Column 1 — counter + nav */}
          <div className="flex md:flex-1 flex-row md:flex-col items-center md:items-start justify-between w-full md:w-auto md:self-stretch min-w-0">
            <div className="flex flex-col gap-5 items-start shrink-0 font-jakarta font-medium">
              <div className="flex items-end leading-none whitespace-nowrap shrink-0">
                <p className="text-[48px] md:text-[50px] lg:text-[clamp(50px,8vw,100px)]" style={{ color: "#252525" }}>{SLIDE_NUMS[current]}</p>
                <p className="text-[20px] lg:text-[clamp(20px,3vw,40px)]" style={{ color: "#6e6e6e" }}>/3</p>
              </div>
              <p className="leading-[1.4] shrink-0 text-lg" style={{ color: "#252525" }}>
                {slide.title}
              </p>
            </div>

            <div className="flex gap-2.5 items-start shrink-0">
              <button
                onClick={prev}
                disabled={isFirst}
                className="flex items-center justify-center p-3 rounded-full shrink-0 w-14 h-14 transition-all disabled:cursor-not-allowed"
                style={
                  isFirst
                    ? { border: "1px solid rgba(37,37,37,0.2)" }
                    : { backgroundColor: "#e62727" }
                }
              >
                <img alt="Back" src={IMG_BACK_BTN} className="w-6 h-6" style={{ filter: isFirst ? "brightness(0)" : "brightness(0) invert(1)" }} loading="lazy" decoding="async" />
              </button>
              <button
                onClick={next}
                disabled={isLast}
                className="flex items-center justify-center p-3 rounded-full shrink-0 w-14 h-14 transition-all disabled:cursor-not-allowed"
                style={
                  isLast
                    ? { border: "1px solid rgba(37,37,37,0.2)" }
                    : { backgroundColor: "#e62727" }
                }
              >
                <img alt="Forward" src={IMG_FWD_BTN} className="w-6 h-6" style={{ filter: isLast ? "brightness(0)" : "brightness(0) invert(1)" }} loading="lazy" decoding="async" />
              </button>
            </div>
          </div>

          {/* Column 2 — description card */}
          <div
            className="flex md:flex-1 flex-col gap-[60px] items-start min-w-0 p-8 rounded-[20px] w-full md:w-auto"
            style={{ backgroundColor: "#000000", minHeight: "350px", height: "fit-content" }}
          >
            <p
              className="font-jakarta font-medium text-white flex-1 w-full leading-[1.4]"
              style={{ fontSize: "clamp(20px, 3vw, 32px)", letterSpacing: "-0.96px" }}
            >
              {slide.desc}
            </p>
            <img alt="" src={IMG_CHEVRON} className="w-6 h-6 shrink-0" loading="lazy" decoding="async" />
          </div>

          {/* Column 3 — photo */}
          <div
            className="md:flex-1 w-full md:w-auto self-stretch rounded-[20px] overflow-hidden relative"
            style={{ backgroundColor: "#252525", minHeight: "280px" }}
          >
            <img alt="" src={SLIDE_PHOTOS[current]} className="absolute inset-0 w-full h-full object-cover rounded-[20px]" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
