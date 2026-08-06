import {
    BriefcaseBusiness,
    ClipboardList,
    Users,
    Eye
} from "lucide-react";


import useEmployerDashboardStats 
from "../hooks/useEmployerDashboardStats";


import ApplicationTrendChart 
from "../components/dashboard/ApplicationTrendChart";


import ApplicationStatusChart 
from "../components/dashboard/ApplicationStatusChart";





export default function EmployerDashboard(){



    const {
        data,
        isLoading
    } = useEmployerDashboardStats();





    if(isLoading){

        return (

            <div className="p-6">

                Loading dashboard...

            </div>

        );

    }





    const stats = [


        {
            title:"Active Internships",

            value:
            data?.data?.activeInternships || 0,

            icon:BriefcaseBusiness

        },


        {
            title:"Total Applications",

            value:
            data?.data?.totalApplications || 0,

            icon:ClipboardList

        },


        {
            title:"Candidates Selected",

            value:
            data?.data?.candidates || 0,

            icon:Users

        },


        {
            title:"Profile Views",

            value:
            data?.data?.profileViews || 0,

            icon:Eye

        }


    ];








    return (

        <div className="
        space-y-8
        ">



            {/* HEADER */}

            <section className="
            bg-white
            border
            rounded-2xl
            p-8
            shadow-sm
            ">


                <h1 className="
                text-3xl
                font-bold
                text-slate-900
                ">

                    Welcome back, Employer 👋

                </h1>



                <p className="
                mt-2
                text-slate-600
                ">

                    Track your internship hiring performance and manage your recruitment activities.

                </p>


            </section>









            {/* KPI CARDS */}

            <section className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
            ">


                {
                    stats.map((item)=>(


                        <div

                        key={item.title}

                        className="
                        bg-white
                        border
                        rounded-2xl
                        p-6
                        shadow-sm
                        ">


                            <div className="
                            flex
                            justify-between
                            items-center
                            ">



                                <div>


                                    <p className="
                                    text-sm
                                    text-slate-500
                                    ">

                                        {item.title}

                                    </p>



                                    <h2 className="
                                    mt-3
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                    ">

                                        {item.value}

                                    </h2>


                                </div>




                                <div className="
                                bg-blue-50
                                p-3
                                rounded-xl
                                ">


                                    <item.icon

                                    className="
                                    w-6
                                    h-6
                                    text-blue-600
                                    "

                                    />


                                </div>




                            </div>


                        </div>


                    ))
                }



            </section>









            {/* CHART SECTION */}

            <section className="
            grid
            gap-6
            xl:grid-cols-2
            ">


                <ApplicationTrendChart />



                <ApplicationStatusChart />


            </section>





        </div>


    );

}