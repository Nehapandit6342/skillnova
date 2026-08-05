import {
  Building2,
  Globe,
  MapPin,
} from "lucide-react";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import useFeaturedCompanies from "../hooks/useFeaturedCompanies";

export default function FeaturedCompaniesSection() {

  const {
    data: companies = [],
    isLoading
  } = useFeaturedCompanies();


  return (
    <SectionContainer>

      <SectionHeading
        badge="Top Hiring Companies"
        title="Companies Hiring Through SkillNova"
        description="Explore companies offering internship opportunities to students."
      />


      {isLoading ? (

        <div className="py-10 text-center text-slate-500">
          Loading companies...
        </div>

      ) : companies.length === 0 ? (

        <div className="py-10 text-center text-slate-500">
          No companies found.
        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {companies.map((company) => (

            <div
              key={company.id}
              className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 text-blue-600">

                <Building2 size={30} />

              </div>


              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {company.companyName}
              </h3>


              <p className="mt-2 text-slate-600">
                {company.industry}
              </p>


              <div className="mt-5 space-y-2 text-sm text-slate-600">


                <div className="flex items-center gap-2">

                  <MapPin size={16} />

                  {company.location}

                </div>



                <div className="flex items-center gap-2">

                  <Globe size={16} />

                  {company.website}

                </div>


              </div>


            </div>

          ))}

        </div>

      )}

    </SectionContainer>
  );
}