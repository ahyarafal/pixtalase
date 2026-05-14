"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_LOGO_ACCENT = "https://www.figma.com/api/mcp/asset/0ceeb6c9-b547-4d3b-a2ab-c578e19f7ca0";
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
        <img alt="" src={IMG_LOGO_ACCENT} className="absolute inset-0 w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>

      {/* Heading */}
      <p className="relative font-jakarta font-medium w-full leading-[1.2]" style={{ fontSize: "clamp(28px, 5vw, 50px)", letterSpacing: "-1.5px", color: "#252525" }}>
        {tr.heading}
      </p>

      {/* FAQ list */}
      <div className="relative flex flex-col items-start shrink-0 w-full">
        {tr.items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="flex gap-5 md:gap-10 items-start p-5 lg:p-[30px] shrink-0 w-full cursor-pointer transition-colors duration-300"
              style={{
                backgroundColor: isOpen ? "rgba(0,0,0,0.05)" : "transparent",
                borderBottom: "1px solid rgba(57,57,57,0.2)",
                boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.08)",
              }}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <div className="flex flex-1 flex-col gap-2 items-start justify-center min-w-0 leading-[1.4]" style={{ color: "rgba(37,37,37,0.9)" }}>
                <p className="font-jakarta font-bold w-full" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
                  {faq.q}
                </p>
                {/* Smooth height expand via grid trick */}
                <div
                  className="grid w-full transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`font-jakarta font-medium w-full pt-1 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                      style={{ fontSize: "16px" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
              {/* Single icon, rotates 180° when open */}
              <div
                className="shrink-0 mt-0.5 transition-transform duration-300 ease-out"
                style={{
                  width: "24px",
                  height: "24px",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <img
                  alt=""
                  src={IMG_ICON_CLOSED}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
