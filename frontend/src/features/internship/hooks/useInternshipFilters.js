import { useMemo, useState } from "react";

/**
 * Shared internship filtering state + logic used by the list page and the
 * homepage section so the matching rules stay in one place.
 */
export default function useInternshipFilters(internships) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const locations = useMemo(
    () => [...new Set(internships.map((i) => i.location).filter(Boolean))],
    [internships],
  );
  const types = useMemo(
    () => [...new Set(internships.map((i) => i.type).filter(Boolean))],
    [internships],
  );

  const filteredInternships = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return internships.filter((internship) => {
      const title = internship.title?.toLowerCase() || "";
      const company = internship.employer?.companyName?.toLowerCase() || "";
      const skills = [
        ...(internship.requiredSkills || []),
        ...(internship.skills || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchText ||
        title.includes(searchText) ||
        company.includes(searchText) ||
        skills.includes(searchText);

      const matchesLocation = !location || internship.location === location;
      const matchesType = !type || internship.type === type;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [internships, search, location, type]);

  const hasFilters = search.trim() || location || type;

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setType("");
  };

  return {
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
  };
}
