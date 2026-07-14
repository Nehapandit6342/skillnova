import { Star } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    name: "Aarav Sharma",
    university: "Pokhara University",
    review:
      "SkillNova helped me improve my resume and identify the skills I needed. I landed my first frontend internship within a month.",
  },
  {
    name: "Priya Karki",
    university: "Tribhuvan University",
    review:
      "The AI roadmap made learning much easier. Instead of feeling lost, I knew exactly what to learn next.",
  },
  {
    name: "Sujan Rai",
    university: "Kathmandu University",
    review:
      "The internship recommendations matched my interests perfectly. The platform saved me a lot of time.",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Testimonials"
        title="What Students Say About SkillNova"
        description="Students across Nepal are using SkillNova to prepare for internships and launch their careers."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Stars */}
            <div className="mb-5 flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="leading-7 text-slate-600">"{item.review}"</p>

            {/* User */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">{item.name}</h4>

                <p className="text-sm text-slate-500">{item.university}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
