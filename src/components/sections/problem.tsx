"use client";

import { TrendingDown, Cpu, Users, SlidersHorizontal } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_ELLIPSE = "https://www.figma.com/api/mcp/asset/3aa1bd82-d077-4da9-bde3-ad243f966c02";
const IMG_PHOTO = "/thumbsup_guy.png";

const icons = [
  <TrendingDown key="td" size={28} color="#252525" strokeWidth={1.8} />,
  <Cpu key="cpu" size={28} color="#252525" strokeWidth={1.8} />,
  <Users key="us" size={28} color="#252525" strokeWidth={1.8} />,
  <SlidersHorizontal key="sl" size={28} color="#252525" strokeWidth={1.8} />,
];

export function Problem() {
  const { lang } = useLang();
  const tr = translations[lang].problem;

  return (
    <section
      className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start"
      style={{ padding: "clamp(24px, 5vw, 80px)", backgroundColor: "#f5f6fb" }}
    >
      {/* Left — Problem */}
      <div className="flex flex-col gap-8 lg:gap-10 items-start w-full lg:w-[500px] lg:shrink-0" style={{ paddingTop: "16px" }}>
        {/* Section label */}
        <div className="flex items-center gap-2 shrink-0">
          <img alt="" src={IMG_ELLIPSE} className="w-2 h-2 shrink-0" />
          <span
            className="font-inter font-medium text-base text-center whitespace-nowrap"
            style={{ color: "#252525", letterSpacing: "0.06em" }}
          >
            {tr.label}
          </span>
        </div>

        {/* Heading */}
        <p
          className="font-jakarta font-semibold shrink-0 w-full"
          style={{ fontSize: "clamp(28px, 5vw, 50px)", lineHeight: "normal", color: "#252525" }}
        >
          {tr.heading}
        </p>

        {/* Problem list */}
        <div className="flex flex-col gap-[13px] items-start w-full">
          {tr.items.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-6 w-full rounded-2xl"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.08)",
                padding: "20px 32px 20px 20px",
              }}
            >
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: "44px", height: "44px" }}>
                {icons[i]}
              </div>
              <p
                className="font-jakarta font-medium flex-1 min-w-0 leading-[1.4]"
                style={{ fontSize: i === 0 ? "18px" : "16px", color: "#252525" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Solution */}
      <div
        className="flex flex-1 flex-col gap-8 lg:gap-10 items-start min-w-0 w-full lg:w-auto"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "clamp(24px, 4vw, 60px)",
          padding: "clamp(24px, 4vw, 60px)",
          boxShadow: "10px 11px 63px 0px rgba(0,0,0,0.02)",
        }}
      >
        {/* Section label */}
        <div className="flex items-center gap-2 shrink-0">
          <img alt="" src={IMG_ELLIPSE} className="w-2 h-2 shrink-0" />
          <span
            className="font-inter font-medium text-base text-center whitespace-nowrap"
            style={{ color: "#252525", letterSpacing: "0.06em" }}
          >
            {tr.solutionLabel}
          </span>
        </div>

        {/* Description */}
        <p
          className="font-jakarta font-medium shrink-0 w-full"
          style={{ fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.4", color: "#252525" }}
        >
          {tr.solutionDesc[0]}{" "}
          <em className="font-bold">{tr.solutionDesc[1]}</em>
          <strong>, </strong>
          <em className="font-bold">{tr.solutionDesc[2]}</em>
          {" "}{tr.solutionDesc[3]}
        </p>

        {/* Photo */}
        <div
          className="w-full relative overflow-hidden"
          style={{ minHeight: "300px", height: "clamp(300px, 40vw, 500px)" }}
        >
          <img
            alt=""
            src={IMG_PHOTO}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
