import InternshipCard from "./InternshipCard";
import { useRecommendedInternships } from "../../hooks/useRecommendedInternships";

export default function RecommendedInternships() {
  const { data, isLoading } = useRecommendedInternships();

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        Loading recommended internships...
      </section>
    );
  }

  const internships = data?.recommendedInternships || [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Recommended Internships
        </h2>

        <p className="mt-2 text-slate-500">
          AI recommendations based on your profile and resume.
        </p>
      </div>

      {internships.length === 0 ? (
        <div className="rounded-xl border border-dashed p-8 text-center text-slate-500">
          No recommendations found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      )}
    </section>
  );
}
