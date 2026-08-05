import { Star, Quote } from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import useTestimonials from "../hooks/useTestimonials";

export default function TestimonialsSection() {

  const {
    data: testimonials = [],
    isLoading,
  } = useTestimonials();

  // Hide the whole section until backend testimonials exist
  if (!isLoading && testimonials.length === 0) {
    return null;
  }

  return (
    <SectionContainer>
      <SectionHeading
        badge="Testimonials"
        title="What Students Say About SkillNova"
        description="Students across Nepal are using SkillNova to prepare for internships and launch their careers."
      />

      {isLoading ? (
        <div className="py-10 text-center text-slate-500">
          Loading testimonials...
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl"></div>
              </div>

              {/* Rating + Quote */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-200 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-500" />
              </div>

              {/* Review */}
              <p className="relative italic leading-7 text-slate-600">
                "{item.message}"
              </p>

              {/* User */}
              <div className="relative mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-xl font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    item.name.charAt(0).toUpperCase()
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.designation}
                  </p>

                  <p className="text-xs font-medium text-blue-600">
                    {item.company}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    ✔ Verified Student
                  </span>
                </div>
              </div>

              {/* Bottom Animation */}
              <div className="mx-auto mt-6 h-1 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      )}
    </SectionContainer>
  );
}