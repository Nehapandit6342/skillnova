import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import HeroSection from "../components/HeroSection";
import FeaturePreviewSection from "../components/FeaturePreviewSection";
import TrustedSection from "../components/TrustedSection";
import WhySkillNovaSection from "../components/WhySkillNovaSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AIResumeSection from "../components/AIResumeSection";
import CareerRoadmapSection from "../components/CareerRoadmapSection";
import SkillGapSection from "../components/SkillGapSection";
import InternshipRecommendationSection from "../components/InternshipRecommendationSection";
import StudentJourneySection from "../components/StudentJourneySection";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturePreviewSection />
      <TrustedSection />
      <WhySkillNovaSection />
      <HowItWorksSection />
      <AIResumeSection />
      <SkillGapSection />

      <CareerRoadmapSection />
      <InternshipRecommendationSection />
      <StudentJourneySection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      <Footer />
    </>
  );
}
