"use client";

import { useState, useRef, useEffect } from "react";
import { BrainCircuit, MonitorCog } from "lucide-react";
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
  const [dir, setDir] = useState<"left" | "right">("left");
  const [animKey, setAnimKey] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = useState<number | undefined>(undefined);
  const { lang } = useLang();
  const tr = translations[lang].coreValue;
  const slide = tr.slides[current];

  const isFirst = current === 0;
  const isLast  = current === 2;

  useEffect(() => {
    if (rowRef.current && rowHeight === undefined) {
      setRowHeight(rowRef.current.offsetHeight);
    }
  }, [rowHeight]);

  const prev = () => {
    if (!isFirst) {
      setDir("right");
      setAnimKey((k) => k + 1);
      setCurrent((i) => i - 1);
    }
  };
  const next = () => {
    if (!isLast) {
      setDir("left");
      setAnimKey((k) => k + 1);
      setCurrent((i) => i + 1);
    }
  };

  const slideClass = dir === "left" ? "cv-slide-left" : "cv-slide-right";

  return (
    <section className="p-5" style={{ backgroundColor: "#f5f6fb" }}>
      <style>{`
        @keyframes cv-in-left {
          from { transform: translateX(48px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes cv-in-right {
          from { transform: translateX(-48px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        .cv-slide-left  { animation: cv-in-left  0.38s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .cv-slide-right { animation: cv-in-right 0.38s cubic-bezier(0.25,0.46,0.45,0.94) both; }
      `}</style>
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
        <div
          ref={rowRef}
          className="flex flex-col md:flex-row gap-5 items-start md:items-stretch shrink-0 w-full overflow-hidden"
          style={rowHeight !== undefined ? { minHeight: rowHeight } : undefined}
        >
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
                className={`flex items-center justify-center p-3 rounded-full shrink-0 w-14 h-14 transition-all disabled:cursor-not-allowed ${!isFirst ? "btn-red" : ""}`}
                style={isFirst ? { border: "1px solid rgba(37,37,37,0.2)" } : undefined}
              >
                <img alt="Back" src={IMG_BACK_BTN} className="w-6 h-6" style={{ filter: isFirst ? "brightness(0)" : "brightness(0) invert(1)" }} loading="lazy" decoding="async" />
              </button>
              <button
                onClick={next}
                disabled={isLast}
                className={`flex items-center justify-center p-3 rounded-full shrink-0 w-14 h-14 transition-all disabled:cursor-not-allowed ${!isLast ? "btn-red" : ""}`}
                style={isLast ? { border: "1px solid rgba(37,37,37,0.2)" } : undefined}
              >
                <img alt="Forward" src={IMG_FWD_BTN} className="w-6 h-6" style={{ filter: isLast ? "brightness(0)" : "brightness(0) invert(1)" }} loading="lazy" decoding="async" />
              </button>
            </div>
          </div>

          {/* Column 2 — description card */}
          <div
            key={`desc-${animKey}`}
            className={`flex md:flex-1 flex-col gap-[60px] items-start min-w-0 p-8 rounded-[20px] w-full md:w-auto ${slideClass}`}
            style={{ backgroundColor: "#000000", minHeight: "350px" }}
          >
            <p
              className="font-jakarta font-medium text-white flex-1 w-full leading-[1.4]"
              style={{ fontSize: "clamp(20px, 3vw, 32px)", letterSpacing: "-0.96px" }}
            >
              {slide.desc}
            </p>
            {current === 0 && (
              <img alt="" src={IMG_CHEVRON} className="w-6 h-6 shrink-0" loading="lazy" decoding="async" />
            )}
            {current === 1 && <BrainCircuit className="w-6 h-6 shrink-0 text-white" />}
            {current === 2 && <MonitorCog className="w-6 h-6 shrink-0 text-white" />}
          </div>

          {/* Column 3 — photo */}
          <div
            key={`photo-${animKey}`}
            className={`md:flex-1 w-full md:w-auto self-stretch rounded-[20px] overflow-hidden relative ${slideClass}`}
            style={{ backgroundColor: "#252525", minHeight: "280px" }}
          >
            <img alt="" src={SLIDE_PHOTOS[current]} className="absolute inset-0 w-full h-full object-cover rounded-[20px]" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
