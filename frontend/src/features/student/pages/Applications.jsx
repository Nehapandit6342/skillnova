import useApplications from "../hooks/useApplications";

import ApplicationSummary from "../components/applications/ApplicationSummary";
import ApplicationFilters from "../components/applications/ApplicationFilters";
import ApplicationList from "../components/applications/ApplicationList";

export default function Applications() {
  const {
    loading,
    error,
    filteredApplications,
    summary,
    search,
    setSearch,
    status,
    setStatus,
  } = useApplications();

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-center text-slate-500">Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-center text-red-500">Failed to load applications.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Applications</h1>

        <p className="mt-2 text-slate-500">
          Track all internship applications and their current status.
        </p>
      </div>

      <ApplicationSummary summary={summary} />

      <ApplicationFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <ApplicationList loading={loading} applications={filteredApplications} />
    </div>
  );
}
