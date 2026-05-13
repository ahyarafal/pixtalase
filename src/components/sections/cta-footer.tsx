"use client";

import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_PHOTO  = "/coffee_girl.png";
const IMG_LOGO   = "https://www.figma.com/api/mcp/asset/f6e7d22f-c29f-4310-be79-d16fdb116531";

export function CtaFooter() {
  const { lang } = useLang();
  const tr = translations[lang].ctaFooter;

  return (
    <section className="flex flex-col items-start overflow-hidden p-5" style={{ backgroundColor: "#f5f6fb" }}>
      <div
        className="flex flex-col items-start overflow-hidden w-full"
        style={{ backgroundColor: "#ffffff", borderRadius: "clamp(24px, 4vw, 60px)" }}
      >
        {/* CTA block */}
        <div
          className="flex flex-col md:flex-row gap-10 items-end justify-end overflow-hidden p-8 md:p-[60px] md:pb-0 shrink-0 w-full"
          style={{
            borderBottom: "1px solid #e3e3e3",
            boxShadow: "10px 11px 63px 0px rgba(0,0,0,0.02)",
          }}
        >
          <div className="flex flex-1 flex-col gap-8 md:gap-10 items-start min-w-0 h-fit" style={{ paddingBottom: "60px" }}>
            <p
              className="font-jakarta font-semibold w-full leading-normal"
              style={{ fontSize: "clamp(24px, 4vw, 50px)", color: "#252525" }}
            >
              {tr.heading}
            </p>
            <p
              className="font-jakarta font-semibold w-full leading-normal"
              style={{ fontSize: "16px", color: "#252525" }}
            >
              {tr.subheading}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <div
                className="flex items-center justify-center px-8 py-4 rounded-full shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#252525" }}
              >
                <span
                  className="font-inter font-medium text-white text-center text-lg whitespace-nowrap"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {tr.ctaPlans}
                </span>
              </div>
              <div
                className="flex items-center justify-center px-8 py-4 rounded-full shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#e62727" }}
              >
                <span
                  className="font-inter font-medium text-white text-center text-lg whitespace-nowrap"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {tr.ctaConsult}
                </span>
              </div>
            </div>
          </div>

          {/* Photo — hidden on mobile */}
          <div
            className="hidden md:block relative shrink-0 overflow-hidden"
            style={{ width: "403px", height: "393px", borderRadius: "12px" }}
          >
            <img
              alt=""
              src={IMG_PHOTO}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer nav area */}
        <div
          className="flex flex-col md:flex-row gap-10 md:gap-[60px] items-start overflow-hidden p-8 md:p-[60px] shrink-0 w-full"
          style={{ boxShadow: "10px 11px 31.5px rgba(0,0,0,0.02)" }}
        >
          {/* Logo */}
          <div
            className="relative shrink-0"
            style={{ width: "clamp(72px, 10vw, 110px)", height: "clamp(66px, 9vw, 100px)" }}
          >
            <img alt="Pixtalase" src={IMG_LOGO} className="absolute inset-0 w-full h-full object-contain" />
          </div>

          {/* Nav columns */}
          <div
            className="grid grid-cols-2 md:flex md:flex-wrap items-start gap-8 md:gap-[60px] w-full font-jakarta font-medium leading-[1.4]"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#252525" }}
          >
            {/* Navigation */}
            <div className="flex flex-col gap-4 md:gap-5 items-start">
              <p className="tracking-wide">{tr.navLabel}</p>
              {tr.navLinks.map((l) => (
                <a key={l} href="#" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                  {l}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 md:gap-5 items-start">
              <p className="tracking-wide">{tr.contactLabel}</p>
              {tr.contactLinks.map((l) => (
                <a key={l} href="#" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                  {l}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 md:gap-5 items-start">
              <p className="tracking-wide">{tr.legalLabel}</p>
              {tr.legalLinks.map((l) => (
                <a key={l} href="#" className="hover:opacity-60 transition-opacity whitespace-nowrap">
                  {l}
                </a>
              ))}
            </div>

            {/* Brand */}
            <div className="flex flex-col gap-4 md:gap-5 items-start">
              <p className="tracking-wide">{tr.brandLabel}</p>
              <p>Pixtalase</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-start overflow-hidden p-8 md:p-[60px] shrink-0 w-full"
          style={{
            borderTop: "1px solid #e3e3e3",
            boxShadow: "10px 11px 63px 0px rgba(0,0,0,0.02)",
          }}
        >
          <div
            className="flex flex-1 flex-col md:flex-row items-start md:justify-between gap-2 min-w-0 font-jakarta font-medium leading-[1.4]"
            style={{ fontSize: "18px", color: "#252525" }}
          >
            <p>{tr.location}</p>
            <p>{tr.copyright}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
