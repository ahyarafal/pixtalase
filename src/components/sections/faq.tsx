"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_ELLIPSE = "https://www.figma.com/api/mcp/asset/3aa1bd82-d077-4da9-bde3-ad243f966c02";
const IMG_LOGO_ACCENT = "https://www.figma.com/api/mcp/asset/0ceeb6c9-b547-4d3b-a2ab-c578e19f7ca0";
const IMG_ICON_OPEN   = "https://www.figma.com/api/mcp/asset/cd297ee4-39fd-4961-89ab-26d3d229085d";
const IMG_ICON_CLOSED = "https://www.figma.com/api/mcp/asset/4d632315-be86-4207-8b3d-8adba89bd014";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const { lang } = useLang();
  const tr = translations[lang].faq;

  return (
    <section
      id="faq"
      className="relative flex flex-col gap-[60px] items-start overflow-hidden"
      style={{ padding: "clamp(24px, 5vw, 80px)", backgroundColor: "#f5f6fb" }}
    >
      {/* Background logo accent — desktop only */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: "730px",
          height: "667.314px",
          left: "calc(50% + 470px)",
          top: "calc(50% + 30.16px)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img alt="" src={IMG_LOGO_ACCENT} className="absolute inset-0 w-full h-full object-contain" />
      </div>

      {/* Section label + heading */}
      <div className="relative flex flex-col gap-8 items-start shrink-0 w-full">
        <div className="flex items-center gap-2 shrink-0">
          <img alt="" src={IMG_ELLIPSE} className="w-2 h-2 shrink-0" />
          <span
            className="font-inter font-medium text-base text-center whitespace-nowrap"
            style={{ color: "#252525", letterSpacing: "0.06em" }}
          >
            {tr.label}
          </span>
        </div>
        <p
          className="font-jakarta font-medium w-full leading-[1.2]"
          style={{ fontSize: "clamp(28px, 5vw, 50px)", letterSpacing: "-1.5px", color: "#252525" }}
        >
          {tr.heading}
        </p>
      </div>

      {/* FAQ list */}
      <div className="relative flex flex-col items-start shrink-0 w-full">
        {tr.items.map((faq, i) => (
          <div
            key={i}
            className="flex gap-5 md:gap-10 items-center p-5 md:p-[30px] shrink-0 w-full cursor-pointer"
            style={{
              backgroundColor: open === i ? "rgba(0,0,0,0.05)" : "transparent",
              borderBottom: "1px solid rgba(57,57,57,0.2)",
              boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.08)",
            }}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="flex flex-1 flex-col gap-2 items-start justify-center min-w-0 leading-[1.4]" style={{ color: "rgba(37,37,37,0.9)" }}>
              <p className="font-jakarta font-bold w-full" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
                {faq.q}
              </p>
              {open === i && faq.a && (
                <p className="font-jakarta font-medium w-full" style={{ fontSize: "16px" }}>
                  {faq.a}
                </p>
              )}
            </div>
            <div className="relative shrink-0" style={{ width: "24px", height: "24px" }}>
              <img
                alt=""
                src={open === i ? IMG_ICON_OPEN : IMG_ICON_CLOSED}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
