"use client";

import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/translations";

const serviceIcons = [
  "https://www.figma.com/api/mcp/asset/e1178c69-28c9-48c7-b2a1-af6df8a94742",
  "https://www.figma.com/api/mcp/asset/d48caaa8-ac45-4bbe-aceb-692ac1be4e93",
  "https://www.figma.com/api/mcp/asset/01ea70ba-63bf-4fee-8a54-e2e94c33f050",
  "https://www.figma.com/api/mcp/asset/03396e91-c199-41b6-afda-40bfd7207d17",
  "https://www.figma.com/api/mcp/asset/0b72a9e1-2aa7-488d-9396-312a1efcf620",
  "https://www.figma.com/api/mcp/asset/52bb6cfc-f597-40e2-9853-bd04174c7a0f",
  "https://www.figma.com/api/mcp/asset/73df9830-1a30-4aaa-b550-02acf691d6ca",
  "https://www.figma.com/api/mcp/asset/92309d81-4e94-43e5-bfc1-05c31c76ad30",
];

function ServiceCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="flex flex-col gap-6 items-start justify-center shrink-0"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "32px 40px 32px 32px",
        boxShadow: "0px 1px 1.5px rgba(0,0,0,0.18)",
      }}
    >
      <img alt="" src={icon} className="w-[27px] h-[27px] shrink-0" />
      <p
        className="font-jakarta font-semibold whitespace-nowrap leading-[1.4]"
        style={{ fontSize: "24px", color: "#252525" }}
      >
        {label}
      </p>
    </div>
  );
}

export function Services() {
  const { lang } = useLang();
  const items = translations[lang].services.items;
  const services = items.map((label, i) => ({ icon: serviceIcons[i], label }));

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: "#f5f6fb" }}>
      <div
        className="flex gap-5 items-center w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {services.map((s) => (
          <ServiceCard key={s.label} icon={s.icon} label={s.label} />
        ))}
        {services.map((s) => (
          <ServiceCard key={s.label + "-dup"} icon={s.icon} label={s.label} />
        ))}
      </div>
    </section>
  );
}
