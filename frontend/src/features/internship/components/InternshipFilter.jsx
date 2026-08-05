import {
  Briefcase,
  ChevronDown,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

/**
 * Professional internship filter bar.
 * Every option is derived from the data passed in via props — nothing is hardcoded.
 *
 * `compact` renders a slimmer single-row variant designed to sit inside the hero.
 */
export default function InternshipFilter({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
  locations = [],
  types = [],
  resultCount,
  totalCount,
  compact = false,
  hideSummary = false,
}) {
  const activeCount = [search.trim(), location, type].filter(Boolean).length;
  const hasFilters = activeCount > 0;

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setType("");
  };

  const inputHeight = compact ? "h-10" : "h-11";
  const selectWidth = compact ? "lg:w-48" : "lg:w-56";

  return (
    <div
      className={`overflow-hidden border border-slate-200 bg-white shadow-sm ${
        compact ? "rounded-xl" : "rounded-2xl"
      }`}
    >
      {/* Controls */}
      <div
        className={`flex flex-col gap-3 lg:flex-row lg:items-center ${
          compact ? "p-3" : "p-4 sm:p-5"
        }`}
      >
        {!compact && (
          <div className="flex items-center gap-2 pr-1">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="hidden text-sm font-semibold text-slate-800 lg:block">
              Filters
            </span>
          </div>
        )}

        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, company, or skill..."
            className={`${inputHeight} w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-9 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10`}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Location */}
        <div className={`relative min-w-0 ${selectWidth}`}>
          <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Filter by location"
            className={`${inputHeight} w-full cursor-pointer appearance-none rounded-xl border bg-slate-50/60 pl-10 pr-9 text-sm font-medium outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${
              location
                ? "border-blue-500 bg-white text-slate-800"
                : "border-slate-200 text-slate-700 focus:border-blue-500 focus:bg-white"
            }`}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        {/* Work type */}
        <div className={`relative min-w-0 ${selectWidth}`}>
          <Briefcase className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Filter by work type"
            className={`${inputHeight} w-full cursor-pointer appearance-none rounded-xl border bg-slate-50/60 pl-10 pr-9 text-sm font-medium outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${
              type
                ? "border-blue-500 bg-white text-slate-800"
                : "border-slate-200 text-slate-700 focus:border-blue-500 focus:bg-white"
            }`}
          >
            <option value="">All Work Types</option>
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Live results summary */}
      {!hideSummary && (
        <div
          className={`flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/50 ${
            compact ? "px-3 py-1.5" : "px-4 py-3 sm:px-5"
          }`}
        >
          <p className={`text-slate-500 ${compact ? "text-xs" : "text-sm"}`}>
            Showing{" "}
            <span className="font-semibold text-slate-800">{resultCount}</span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800">{totalCount}</span>{" "}
            internships
            {hasFilters && (
              <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                {activeCount} active
              </span>
            )}
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className={`flex items-center gap-1.5 font-medium text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                compact ? "rounded-md px-1.5 py-0.5 text-xs" : "rounded-lg px-2.5 py-1.5 text-sm"
              }`}
            >
              <RotateCcw className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
