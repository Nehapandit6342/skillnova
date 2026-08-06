import { useMemo } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  RefreshCw,
  SearchX,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionContainer from "@/components/common/SectionContainer";
import InternshipCard from "@/features/internship/components/InternshipCard";
import InternshipFilter from "@/features/internship/components/InternshipFilter";
import useInternships from "@/features/internship/hooks/useInternships";
import useInternshipFilters from "@/features/internship/hooks/useInternshipFilters";

const PREVIEW_LIMIT = 6;

export default function InternshipExplorerSection({ compact = false, hero = false }) {
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

  const previewLimit = compact || hero ? 3 : PREVIEW_LIMIT;
  const preview = filteredInternships.slice(0, previewLimit);

  return (
    <SectionContainer
      id="internships"
      className={`scroll-mt-20 ${
        hero ? "py-1.5!" : compact ? "py-6! lg:py-10!" : ""
      }`}
    >
      {/* Header (hidden in hero mode so the filter appears immediately) */}
      {!hero && (
        <div
          className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${
            compact ? "mb-6" : "mb-10"
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Briefcase className="h-3.5 w-3.5" />
              Live Opportunities
            </span>
            <h2
              className={`mt-4 font-bold tracking-tight text-slate-900 ${
                compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
              }`}
            >
              Find Your Perfect Internship
            </h2>
            <p
              className={`mt-3 text-slate-600 ${
                compact ? "text-base leading-7" : "text-lg leading-8"
              }`}
            >
              Search by title, company, or skill — filter by location and work
              type, and apply to real internships posted by hiring companies.
            </p>
          </div>

          <Link
            to="/internships"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
          >
            View all internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {/* Filter bar */}
      <InternshipFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        locations={locations}
        types={types}
        resultCount={preview.length}
        totalCount={internships.length}
        hideSummary={isLoading || hero}
        compact={compact || hero}
      />

      {/* Results */}
      <div className={hero ? "mt-2.5" : compact ? "mt-6" : "mt-8"}>
        {isLoading ? (
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 ${
              hero ? "gap-3" : "gap-6"
            }`}
          >
            {Array.from({ length: previewLimit }).map((_, index) => (
              <div
                key={index}
                className={`animate-pulse rounded-2xl border border-slate-200 bg-white ${
                  hero ? "h-52 p-4" : "h-72 p-6"
                }`}
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
                  <div className="h-6 w-16 rounded-full bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div
            className={`rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center ${
              hero ? "py-8" : "py-16"
            }`}
          >
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
          <div
            className={`rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center ${
              hero ? "py-8" : "py-16"
            }`}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <SearchX className="h-7 w-7 text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No internships found
            </h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
              {hasFilters
                ? "Try adjusting your search or clearing the active filters to see more opportunities."
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
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 ${
                hero ? "gap-3" : "gap-6"
              }`}
            >
              {preview.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                  compact={hero}
                />
              ))}
            </div>

            {/* Footer */}
            <div
              className={`flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50 sm:flex-row ${
                hero ? "mt-2.5 px-4 py-2" : "mt-10 px-6 py-5"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex items-center justify-center rounded-xl bg-blue-600 text-white ${
                    hero ? "h-8 w-8" : "h-10 w-10"
                  }`}
                >
                  <Sparkles className={hero ? "h-4 w-4" : "h-5 w-5"} />
                </span>
                <div>
                  <p
                    className={`font-semibold text-slate-800 ${
                      hero ? "text-xs" : "text-sm"
                    }`}
                  >
                    {filteredInternships.length > previewLimit
                      ? `${filteredInternships.length - previewLimit} more ${
                          filteredInternships.length - previewLimit === 1
                            ? "internship"
                            : "internships"
                        } match your search`
                      : "Looking for more opportunities?"}
                  </p>
                  <p
                    className={`text-slate-500 ${
                      hero ? "text-xs" : "text-sm"
                    }`}
                  >
                    Browse the full list with sorting, filters, and details.
                  </p>
                </div>
              </div>
              <Link
                to="/internships"
                className={`inline-flex items-center gap-2 rounded-xl bg-blue-600 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 ${
                  hero
                    ? "px-4 py-1.5 text-xs"
                    : "px-5 py-2.5 text-sm"
                }`}
              >
                Browse all internships
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </SectionContainer>
  );
}
