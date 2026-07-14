import InternshipCard from "./InternshipCard";

import googleLogo from "@/assets/companies/google-g-2015.svg";
import microsoftLogo from "@/assets/companies/microsoft-5.svg";
import amazonLogo from "@/assets/companies/logo-amazon.svg";
import adobeLogo from "@/assets/companies/adobe-2.svg";
import metaLogo from "@/assets/companies/meta-3.svg";
const internships = [
  {
    company: "Google",
    position: "Frontend Developer Intern",
    location: "Remote",
    type: "Internship",
    logo: googleLogo,
  },
  {
    company: "Microsoft",
    position: "React Developer Intern",
    location: "Hybrid",
    type: "Internship",
    logo: microsoftLogo,
  },
  {
    company: "Amazon",
    position: "Software Engineering Intern",
    location: "Remote",
    type: "Internship",
    logo: amazonLogo,
  },
  {
    company: "Adobe",
    position: "UI/UX Design Intern",
    location: "Hybrid",
    type: "Internship",
    logo: adobeLogo,
  },
  {
    company: "Meta",
    position: "Frontend Engineering Intern",
    location: "Remote",
    type: "Internship",
    logo: metaLogo,
  },
];

export default function RecommendedInternships() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recommended Internships
          </h2>

          <p className="mt-2 text-slate-500">
            AI recommendations based on your profile and resume.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {internships.map((internship) => (
          <InternshipCard key={internship.company} {...internship} />
        ))}
      </div>
    </section>
  );
}
