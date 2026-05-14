"use client";

import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const IMG_FRAME_OVERLAY = "https://www.figma.com/api/mcp/asset/467be5d0-d681-4a7b-8d15-f9ef73179094";

const portfolioImages = [
  "https://www.figma.com/api/mcp/asset/1cc4722e-8635-40a2-9370-ac0986a9a15a",
  "https://www.figma.com/api/mcp/asset/e5912d8a-2256-41d1-b41b-a56eff18840a",
  "https://www.figma.com/api/mcp/asset/53d4b165-7a47-4659-ab17-3448618a7c67",
  "https://www.figma.com/api/mcp/asset/81b56337-a82f-4ef3-aa4d-9781ee7e9d04",
  "https://www.figma.com/api/mcp/asset/759b0129-7ee5-469c-b1f7-722b2a8182f6",
  "https://www.figma.com/api/mcp/asset/1914f08e-4772-4b84-adcd-85448ce2812f",
];

function PortfolioCard({ src }: { src: string }) {
  return (
    <div className="relative flex flex-col h-[320px] md:h-[400px] items-end justify-end p-8 rounded-[40px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-black rounded-[40px]" />
        <img alt="" src={src} className="absolute inset-0 w-full h-full object-cover rounded-[40px]" loading="lazy" decoding="async" />
      </div>
      <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
        <img alt="" src={IMG_FRAME_OVERLAY} className="absolute inset-0 w-full h-full object-contain" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export function Portfolio() {
  const { lang } = useLang();
  const tr = translations[lang].portfolio;

  return (
    <section
      id="portfolio"
      className="flex flex-col gap-[60px] items-start"
      style={{ padding: "clamp(24px, 5vw, 80px)", backgroundColor: "#f5f6fb" }}
    >
      {/* Heading */}
      <div className="shrink-0 w-full lg:w-[60%]">
        <p
          className="font-jakarta font-medium leading-[1.2] w-full"
          style={{ fontSize: "clamp(28px, 5vw, 50px)", letterSpacing: "-1.5px", color: "#252525" }}
        >
          {tr.heading}
        </p>
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {portfolioImages.map((src) => (
          <PortfolioCard key={src} src={src} />
        ))}
      </div>
    </section>
  );
}
