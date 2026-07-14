import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SkillNova?",
    answer:
      "SkillNova is an AI-powered internship and career development platform that helps students improve their resumes, identify skill gaps, and discover relevant internship opportunities.",
  },
  {
    question: "Is SkillNova free for students?",
    answer:
      "Yes. Students can create an account, build their profile, analyze their resume, and explore internship opportunities without any cost.",
  },
  {
    question: "How does AI Resume Analysis work?",
    answer:
      "Our AI reviews your resume for ATS compatibility, identifies strengths and weaknesses, and provides personalized suggestions to improve your chances of getting shortlisted.",
  },
  {
    question: "How are internships recommended?",
    answer:
      "SkillNova compares your skills, education, interests, and career goals with internship requirements to recommend opportunities that best match your profile.",
  },
  {
    question: "Can employers post internships?",
    answer:
      "Yes. Employers can register, manage company profiles, publish internships, and review student applications through a dedicated dashboard.",
  },
];

export default function FAQSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Frequently Asked Questions"
        title="Everything You Need to Know"
        description="Have questions about SkillNova? Here are the answers to the most common ones."
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
}
