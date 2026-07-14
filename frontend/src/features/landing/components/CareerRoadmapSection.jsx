import { Map, CheckCircle2, Circle, ArrowDown } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const roadmap = [
  {
    title: "Learn HTML & CSS",
    completed: true,
  },
  {
    title: "Master JavaScript",
    completed: true,
  },
  {
    title: "Learn React",
    completed: false,
  },
  {
    title: "Build Real Projects",
    completed: false,
  },
  {
    title: "Learn Backend Development",
    completed: false,
  },
  {
    title: "Get Your Dream Internship",
    completed: false,
  },
];

export default function CareerRoadmapSection() {
  return (
    <SectionContainer>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}

        <div>
          <SectionHeading
            badge="AI Career Roadmap"
            title="Follow a Personalized Learning Journey"
            description="SkillNova creates a customized roadmap based on your current skills, experience, and career goals."
          />

          <Button className="mt-8">Generate My Roadmap</Button>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="mb-8 flex items-center gap-3">
            <Map className="text-blue-600" />

            <h3 className="text-xl font-semibold">
              Frontend Developer Roadmap
            </h3>
          </div>

          <div className="space-y-5">
            {roadmap.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-4">
                  {step.completed ? (
                    <CheckCircle2 className="text-green-600" />
                  ) : (
                    <Circle className="text-slate-400" />
                  )}

                  <span className="font-medium text-slate-700">
                    {step.title}
                  </span>
                </div>

                {index !== roadmap.length - 1 && (
                  <div className="ml-2 my-2">
                    <ArrowDown size={18} className="text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-blue-50 p-5">
            <p className="text-sm text-slate-500">Estimated Completion</p>

            <h4 className="mt-1 text-2xl font-bold text-blue-600">6 Months</h4>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
