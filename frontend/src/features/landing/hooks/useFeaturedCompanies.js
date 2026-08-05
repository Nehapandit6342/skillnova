import { useMemo } from "react";
import useInternships from "@/features/internship/hooks/useInternships";

export default function useFeaturedCompanies() {
  const { data, isLoading } = useInternships();

  // Derive unique employers from the shared internships cache —
  // avoids a second fetch of the same endpoint.
  const companies = useMemo(() => {
    const internships = data?.data || [];
    const companiesMap = new Map();

    internships.forEach((internship) => {
      const employer = internship.employer;

      if (employer?.id && !companiesMap.has(employer.id)) {
        companiesMap.set(employer.id, {
          id: employer.id,
          companyName: employer.companyName,
          industry: employer.industry,
          location: employer.location,
          website: employer.website,
          logo: employer.logo,
          description: employer.description,
        });
      }
    });

    return [...companiesMap.values()];
  }, [data]);

  return { data: companies, isLoading };
}
