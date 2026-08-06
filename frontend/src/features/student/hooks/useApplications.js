import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyApplications } from "@/api/application.api";

export default function useApplications() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["student-applications"],
    queryFn: getMyApplications,
  });

  const applications = data?.data || [];

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {
      const title = application.internship?.title || "";

      const matchesSearch = title.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "ALL" || application.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, status]);

  const summary = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "PENDING").length,
    reviewing: applications.filter((a) => a.status === "REVIEWING").length,
    accepted: applications.filter((a) => a.status === "ACCEPTED").length,
    rejected: applications.filter((a) => a.status === "REJECTED").length,
  };

  return {
    loading: isLoading,
    error,
    refetch,

    applications,
    filteredApplications,

    summary,

    search,
    setSearch,

    status,
    setStatus,
  };
}
