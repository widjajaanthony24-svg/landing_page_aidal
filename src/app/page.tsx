import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection, StoryFlowSection } from "@/components/sections/hero";
import { CredibilityBar, TrustBar } from "@/components/sections/credibility-trust-bar";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { JurisdictionsSection } from "@/components/sections/jurisdictions";
import { ComparisonSection } from "@/components/sections/comparison";
import { ClientsSection } from "@/components/sections/clients";
import { DeadlineCtaSection } from "@/components/sections/deadline-cta";
import { VerifySection } from "@/components/sections/verify";
import { LegalSection } from "@/components/sections/legal";
import { PdfShowcaseSection } from "@/components/sections/pdf-showcase";
import { FaqSection } from "@/components/sections/faq";
import { PricingSection } from "@/components/sections/pricing";
import { SignupSection } from "@/components/sections/signup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CredibilityBar />
      <TrustBar />
      <StoryFlowSection />
      <ProblemSection />
      <HowItWorksSection />
      <JurisdictionsSection />
      <ComparisonSection />
      <ClientsSection />
      <DeadlineCtaSection />
      <VerifySection />
      <LegalSection />
      <PdfShowcaseSection />
      <FaqSection />
      <PricingSection />
      <SignupSection />
      <Footer />
    </>
  );
}
