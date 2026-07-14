import InternshipCard from "./InternshipCard";

const internships = [
  {
    company: "Google",
    position: "Frontend Developer Intern",
    location: "Remote",
    type: "Internship",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    company: "Microsoft",
    position: "React Developer Intern",
    location: "Hybrid",
    type: "Internship",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    company: "Fusemachines",
    position: "AI Engineering Intern",
    location: "Kathmandu",
    type: "Internship",
    logo: "https://logo.clearbit.com/fusemachines.com",
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

      <div className="grid gap-6 lg:grid-cols-3">
        {internships.map((internship) => (
          <InternshipCard key={internship.company} {...internship} />
        ))}
      </div>
    </section>
  );
}
