import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import HeroSection from "../components/HeroSection";
import InternshipExplorerSection from "../components/InternshipExplorerSection";
import TrustedSection from "../components/TrustedSection";
import StatisticsSection from "../components/StatisticsSection";
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
        {/* Hero */}
        <HeroSection />

        {/* Internship search + filter (live backend data) */}
        <Band className="bg-slate-50/70">
          <InternshipExplorerSection />
        </Band>

        {/* Trusted Technologies */}
        <TrustedSection />

        {/* Real-time platform statistics */}
        <Band className="bg-slate-50/70">
          <StatisticsSection />
        </Band>

        {/* Featured Companies */}
        <FeaturedCompaniesSection />

        {/* Feature Highlights */}
        <Band className="bg-slate-50/70">
          <FeaturePreviewSection />
        </Band>

        {/* Why SkillNova */}
        <WhySkillNovaSection />

        {/* Process */}
        <Band className="bg-slate-50/70">
          <HowItWorksSection />
        </Band>

        {/* AI Resume */}
        <AIResumeSection />

        {/* Skill Gap */}
        <Band className="bg-slate-50/70">
          <SkillGapSection />
        </Band>

        {/* Career Roadmap */}
        <CareerRoadmapSection />

        {/* Career Domains */}
        <Band className="bg-slate-50/70">
          <CareerDomainsSection />
        </Band>

        {/* Student Journey */}
        <StudentJourneySection />

        {/* Testimonials */}
        <Band className="bg-slate-50/70">
          <TestimonialsSection />
        </Band>

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
