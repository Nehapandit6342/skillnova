import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import HeroSection from "../components/HeroSection";
import TrustedSection from "../components/TrustedSection";
import FeaturedCompaniesSection from "../components/FeaturedCompaniesSection";
import FeaturePreviewSection from "../components/FeaturePreviewSection";
import WhySkillNovaSection from "../components/WhySkillNovaSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AIResumeSection from "../components/AIResumeSection";
import SkillGapSection from "../components/SkillGapSection";
import CareerRoadmapSection from "../components/CareerRoadmapSection";
import CareerDomainsSection from "../components/CareerDomainsSection";
import StudentJourneySection from "../components/StudentJourneySection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

function Band({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero (includes internship search + live stats) */}
        <HeroSection />

        {/* Why SkillNova */}
        <WhySkillNovaSection />

        {/* Process */}
        <Band className="bg-slate-50/70">
          <HowItWorksSection />
        </Band>
        {/* Featured Companies */}
        <FeaturedCompaniesSection />

        {/* Testimonials */}
        <Band className="bg-slate-50/70">
          <TestimonialsSection />
        </Band>

        {/* FAQ */}
        <FAQSection />
        {/* Trusted Technologies */}
        <TrustedSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
