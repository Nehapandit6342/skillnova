import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  MapPin,
  RefreshCw,
  SearchX,
} from "lucide-react";

import InternshipCard from "../components/InternshipCard";
import InternshipFilter from "../components/InternshipFilter";
import useInternships from "../hooks/useInternships";
import useInternshipFilters from "../hooks/useInternshipFilters";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "stipend", label: "Highest stipend" },
];

function stipendNumber(value) {
  if (!value) return 0;
  const parsed = parseInt(String(value).replace(/[^0-9]/g, ""), 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function InternshipList() {
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
    filteredInternships: filtered,
    hasFilters,
    clearFilters,
  } = useInternshipFilters(internships);

  const [sortBy, setSortBy] = useState("newest");

  const filteredInternships = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      if (sortBy === "stipend") {
        return stipendNumber(b.stipend) - stipendNumber(a.stipend);
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [filtered, sortBy]);

  const totalOpenings = useMemo(
    () =>
      internships.reduce(
        (sum, internship) => sum + (Number(internship.openings) || 0),
        0,
      ),
    [internships],
  );

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Compact hero with integrated filter */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-blue-50 backdrop-blur">
                <Briefcase className="h-3 w-3" />
                Live opportunities
              </span>
              <h1 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Find Your Next Internship
              </h1>
              <p className="mt-1.5 text-sm text-blue-100">
                Browse internships from real companies and kick-start your
                career journey.
              </p>
            </div>

            {!isLoading && internships.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <Stat
                  icon={<Briefcase className="h-3.5 w-3.5" />}
                  value={internships.length}
                  label="Live"
                />
                <Stat
                  icon={<Building2 className="h-3.5 w-3.5" />}
                  value={totalOpenings}
                  label="Openings"
                />
                <Stat
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  value={locations.length}
                  label="Locations"
                />
              </div>
            )}
          </div>

          <div className="mt-6 pb-8">
            <InternshipFilter
              compact
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
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-6 pt-6">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
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
          ) : filteredInternships.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
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
              {/* Toolbar */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-800">
                    {filteredInternships.length}
                  </span>{" "}
                  internship{filteredInternships.length > 1 ? "s" : ""} found
                </p>

                <div className="flex items-center gap-2">
                  <label
                    htmlFor="internship-sort"
                    className="text-sm font-medium text-slate-500"
                  >
                    Sort by
                  </label>
                  <select
                    id="internship-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-9 cursor-pointer rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur">
      <span className="text-blue-100">{icon}</span>
      <span className="text-xs font-semibold text-white">
        {value} <span className="font-normal text-blue-100">{label}</span>
      </span>
    </div>
  );
}
