"use client";

import { TrendingDown, Cpu, Users, SlidersHorizontal } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

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
        className="flex flex-1 flex-col md:flex-row lg:flex-col gap-8 lg:gap-10 items-start md:items-stretch lg:items-start min-w-0 w-full lg:w-auto"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "clamp(24px, 4vw, 60px)",
          padding: "clamp(24px, 4vw, 60px)",
          paddingBottom: 0,
          boxShadow: "10px 11px 63px 0px rgba(0,0,0,0.02)",
        }}
      >
        {/* Description */}
        <p
          className="font-jakarta font-medium w-full md:w-auto md:flex-1 md:self-center lg:flex-none lg:w-full"
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
          className="w-full min-h-[300px] h-[clamp(300px,40vw,500px)] relative overflow-hidden md:w-[45%] md:shrink-0 md:h-auto lg:w-full lg:h-[clamp(300px,40vw,500px)]"
        >
          <img
            alt=""
            src={IMG_PHOTO}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
