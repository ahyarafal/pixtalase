"use client";

import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_LOGO_ACCENT = "https://www.figma.com/api/mcp/asset/546a592f-08f2-4a35-8b10-e0b660afd904";
const IMG_CUSTOM_PHOTO = "https://www.figma.com/api/mcp/asset/bd87e851-fcbf-40bb-bcad-25150adfa6b3";

const tierPrices = [
  { price: "Rp 499,000", period: "/ month", annualPrice: "Rp 5,000,000 / year" },
  { price: "Rp 999,000", period: "/ month", annualPrice: "Rp 10,000,000 / year" },
  { price: "Rp 1,999,000", period: "/ month", annualPrice: "Rp 20,000,000 / year" },
];

export function Pricing() {
  const { lang } = useLang();
  const tr = translations[lang].pricing;

  return (
    <section id="pricing" className="p-5" style={{ backgroundColor: "#f5f6fb" }}>
      <div
        className="flex flex-col gap-[60px] items-start w-full"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "clamp(24px, 4vw, 60px)",
          padding: "clamp(24px, 4vw, 60px)",
          boxShadow: "10px 11px 31.5px rgba(0,0,0,0.02)",
        }}
      >
        {/* Heading + sub */}
        <div
          className="flex flex-col gap-5 items-start justify-center shrink-0 font-jakarta font-medium w-full lg:w-[60%]"
          style={{ color: "#252525" }}
        >
          <p style={{ fontSize: "clamp(28px, 5vw, 50px)", lineHeight: "1.2", letterSpacing: "-1.5px" }}>
            {tr.heading}
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.4" }}>
            {tr.subheading}
          </p>
        </div>

        {/* 3 Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 shrink-0 w-full">
          {tr.tiers.map((t, idx) => (
            <div
              key={t.tier}
              className="flex flex-col gap-10 items-start min-w-0 p-8 rounded-[20px]"
              style={{ backgroundColor: "#000000" }}
            >
              {/* Tier header */}
              <div className="flex flex-col gap-4 items-start shrink-0 w-full">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-2 rounded-[10px] shrink-0 w-4" style={{ backgroundColor: "#e62727" }} />
                  <span
                    className="font-inter font-medium text-white text-base text-center whitespace-nowrap"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    {t.tier}
                  </span>
                </div>
                <p
                  className="font-jakarta font-medium w-full leading-[1.4]"
                  style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)", letterSpacing: "-0.6px" }}
                >
                  {t.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2.5 items-start shrink-0 w-full">
                <div className="flex gap-3 items-center leading-[1.4] text-white w-full whitespace-nowrap">
                  <p className="font-jakarta font-bold shrink-0" style={{ fontSize: "32px", letterSpacing: "-0.96px" }}>
                    {tierPrices[idx].price}
                  </p>
                  <p className="font-jakarta font-normal shrink-0" style={{ fontSize: "16px", letterSpacing: "-0.48px" }}>
                    {tierPrices[idx].period}
                  </p>
                </div>
                <p
                  className="font-jakarta font-bold w-full"
                  style={{ fontSize: "16px", letterSpacing: "0.06em", color: "#1ec2fb" }}
                >
                  {tierPrices[idx].annualPrice}
                </p>
              </div>

              {/* CTA */}
              <div
                className="btn-red flex items-center justify-center p-5 rounded-full shrink-0 w-full cursor-pointer"
              >
                <span
                  className="font-inter font-semibold text-white text-center text-lg whitespace-nowrap"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {t.cta}
                </span>
              </div>

              {/* Features */}
              <div
                className="flex-1 font-jakarta font-medium w-full"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", letterSpacing: "-0.42px", lineHeight: "1.4" }}
              >
                <p className="mb-0">{t.bestForLabel}</p>
                <ul className="list-disc">
                  {t.bestFor.map((f) => (
                    <li key={f} className="ms-[21px]">{f}</li>
                  ))}
                </ul>
                <p className="mb-0 mt-2">{t.keyFeaturesLabel}</p>
                <ul className="list-disc">
                  {t.keyFeatures.map((f) => (
                    <li key={f} className="ms-[21px]">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom plan */}
        <div
          className="relative flex flex-col gap-10 lg:gap-[60px] items-start overflow-hidden p-5 lg:p-[60px] rounded-[20px] shrink-0 w-full"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #1a92bb",
            boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.15)",
          }}
        >
          {/* Background logo accent — desktop only */}
          <div
            className="absolute pointer-events-none hidden md:block"
            style={{ width: "730px", height: "667.314px", right: "-171px", top: "-41px" }}
          >
            <img alt="" src={IMG_LOGO_ACCENT} className="absolute inset-0 w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>

          {/* Custom photo — desktop only */}
          <div
            className="absolute overflow-hidden pointer-events-none hidden md:block"
            style={{ width: "384px", height: "402px", right: "81px", bottom: "-1px", borderRadius: "12px" }}
          >
            <img
              alt=""
              src={IMG_CUSTOM_PHOTO}
              className="absolute max-w-none"
              loading="lazy"
              decoding="async"
              style={{ height: "161.01%", left: "-26.14%", top: "-34.53%", width: "221.14%" }}
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col gap-4 items-start shrink-0 w-full">
            <div className="flex items-center gap-2 shrink-0">
              <div className="h-2 rounded-[10px] shrink-0 w-4" style={{ backgroundColor: "#e62727" }} />
              <span
                className="font-inter font-medium text-base text-center whitespace-nowrap"
                style={{ color: "#252525", letterSpacing: "0.06em" }}
              >
                {tr.customLabel}
              </span>
            </div>
            <p
              className="font-jakarta font-medium w-full leading-[1.4]"
              style={{ fontSize: "20px", color: "rgba(37,37,37,0.6)", letterSpacing: "-0.6px" }}
            >
              {tr.customSubtitle}
            </p>
          </div>

          <p
            className="relative font-jakarta font-bold shrink-0"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: "normal", letterSpacing: "-1.2px", color: "#252525" }}
          >
            {tr.customHeading}
          </p>

          <div
            className="relative font-jakarta font-medium shrink-0"
            style={{ fontSize: "16px", letterSpacing: "-0.48px", color: "#252525", lineHeight: "1.4" }}
          >
            <p>{tr.customDesc}</p>
            <ul className="list-disc">
              {tr.customFeatures.map((f) => (
                <li key={f} className="ms-6">{f}</li>
              ))}
            </ul>
          </div>

          <div
            className="btn-red relative flex items-center justify-center px-[60px] py-5 rounded-full shrink-0 cursor-pointer"
            style={{ boxShadow: "0px 3px 7px rgba(0,0,0,0.15)" }}
          >
            <span
              className="font-inter font-semibold text-white text-center text-lg whitespace-nowrap"
              style={{ letterSpacing: "0.04em" }}
            >
              {tr.customCta}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
