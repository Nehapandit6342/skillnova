import { useMemo } from "react";
import {
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  SearchX,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import InternshipCard from "@/features/internship/components/InternshipCard";
import InternshipFilter from "@/features/internship/components/InternshipFilter";
import useInternships from "@/features/internship/hooks/useInternships";
import useInternshipFilters from "@/features/internship/hooks/useInternshipFilters";

const PREVIEW_COUNT = 6;

export default function InternshipRecommendationSection() {
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useInternships();

  const internships = useMemo(
    () =>
      [...(data?.data || [])].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ),
    [data],
  );

  const {
    search,
    setSearch,
    location,
    setLocation,
    type,
    setType,
    locations,
    types,
    filteredInternships,
    hasFilters,
    clearFilters,
  } = useInternshipFilters(internships);

  const preview = filteredInternships.slice(0, PREVIEW_COUNT);

  return (
    <SectionContainer>
      <SectionHeading
        badge="Latest Opportunities"
        title="Explore Live Internships"
        description="Browse real internship openings posted by companies on SkillNova — filter by location and work type to find your perfect match."
      />

      <InternshipFilter
        hideSummary={isLoading}
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        locations={locations}
        types={types}
        resultCount={filteredInternships.length}
        totalCount={internships.length}
      />

      <div className="mt-10">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PREVIEW_COUNT }).map((_, index) => (
              <div
                key={index}
                className="h-72 animate-pulse rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-1/2 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-slate-100" />
                  <div className="h-6 w-16 rounded-full bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Couldn't load internships
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              Something went wrong while fetching the latest opportunities.
              Please try again.
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>
          </div>
        ) : preview.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <SearchX className="h-7 w-7 text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No internships match your filters
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              {hasFilters
                ? "Try adjusting your search or clearing the active filters."
                : "New internship opportunities will appear here as soon as employers post them."}
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {preview.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => navigate("/internships")}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Sparkles className="h-4 w-4" />
                View all {filteredInternships.length} internships
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </SectionContainer>
  );
}
