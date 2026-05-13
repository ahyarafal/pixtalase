"use client";

import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_ELLIPSE = "https://www.figma.com/api/mcp/asset/3aa1bd82-d077-4da9-bde3-ad243f966c02";

export function HowItWorks() {
  const { lang } = useLang();
  const tr = translations[lang].howItWorks;

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
        {/* Section label + heading */}
        <div className="flex flex-col gap-8 items-start shrink-0 w-full">
          <div className="flex items-center gap-2 shrink-0">
            <img alt="" src={IMG_ELLIPSE} className="w-2 h-2 shrink-0" />
            <span
              className="font-inter font-medium text-base text-center whitespace-nowrap"
              style={{ color: "#000000", letterSpacing: "0.06em" }}
            >
              {tr.label}
            </span>
          </div>
          <p
            className="font-jakarta font-semibold w-full leading-[1.2]"
            style={{ fontSize: "clamp(28px, 5vw, 50px)", letterSpacing: "-1.5px", color: "#000000" }}
          >
            {tr.heading}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-2 items-start shrink-0 w-full">
          {tr.steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col md:flex-row gap-5 items-start md:items-end p-8 md:p-10 rounded-[20px] shrink-0 w-full"
              style={{ backgroundColor: "#252525" }}
            >
              <div className="flex flex-1 flex-col gap-4 md:gap-5 items-start min-w-0 font-jakarta font-medium text-white">
                <p className="leading-none shrink-0" style={{ fontSize: "clamp(32px, 5vw, 50px)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="leading-[1.4] w-full shrink-0" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
                  {step.title}
                </p>
              </div>
              <p
                className="font-jakarta font-semibold shrink-0 md:flex-1 leading-[1.4]"
                style={{ fontSize: "clamp(15px, 2vw, 20px)", color: "rgba(255,255,255,0.6)", minWidth: 0 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
