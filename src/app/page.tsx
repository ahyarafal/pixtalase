import { LangProvider } from "@/lib/lang-context";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { CoreValue } from "@/components/sections/core-value";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Portfolio } from "@/components/sections/portfolio";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQ } from "@/components/sections/faq";
import { CtaFooter } from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <LangProvider>
      <main style={{ backgroundColor: "#f5f6fb" }}>
        <Hero />
        <Problem />
        <CoreValue />
        <Services />
        <Pricing />
        <Portfolio />
        <HowItWorks />
        <FAQ />
        <CtaFooter />
      </main>
    </LangProvider>
  );
}
