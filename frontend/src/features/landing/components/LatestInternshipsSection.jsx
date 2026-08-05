import {
  MapPin,
  Briefcase,
  IndianRupee,
  Building2,
} from "lucide-react";


import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import useLatestInternships from "../hooks/useLatestInternships";


export default function LatestInternshipsSection() {


  const {
    data: internships = [],
    isLoading
  } = useLatestInternships();



  return (

    <SectionContainer>


      <SectionHeading

        badge="Latest Opportunities"

        title="Latest Internships"

        description="Discover internship opportunities from top hiring companies."

      />



      {
        isLoading ? (

          <div className="py-10 text-center text-slate-500">
            Loading internships...
          </div>

        ) : internships.length === 0 ? (

          <div className="py-10 text-center text-slate-500">
            No internships available.
          </div>

        ) : (


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {
              internships.map((internship)=>(


                <div

                  key={internship.id}

                  className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"

                >


                  <div className="flex items-center gap-3">


                    <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">

                      <Building2 size={25}/>

                    </div>


                    <div>

                      <h3 className="font-bold text-lg">

                        {internship.title}

                      </h3>


                      <p className="text-sm text-slate-500">

                        {internship.employer.companyName}

                      </p>


                    </div>


                  </div>



                  <p className="mt-4 text-slate-600">

                    {internship.description}

                  </p>



                  <div className="mt-5 space-y-2 text-sm text-slate-600">


                    <div className="flex gap-2 items-center">

                      <MapPin size={16}/>

                      {internship.location}

                    </div>



                    <div className="flex gap-2 items-center">

                      <Briefcase size={16}/>

                      {internship.type}

                    </div>



                    <div className="flex gap-2 items-center">

                      <IndianRupee size={16}/>

                      {internship.stipend}

                    </div>


                  </div>


                </div>


              ))
            }


          </div>


        )

      }


    </SectionContainer>

  );

}