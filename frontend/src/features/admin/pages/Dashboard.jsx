import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentStudents from "../components/RecentStudents";
import RecentInternships from "../components/RecentInternships";
import ApplicationTable from "../components/ApplicationTable";

import useDashboard from "../hooks/useDashboard";



function Dashboard() {


  const {
    data: dashboard,
    isLoading,
    isError

  } = useDashboard();



  if(isLoading){

    return (

      <div className="p-8 text-center">

        <h2 className="text-xl font-semibold">
          Loading Dashboard...
        </h2>

      </div>

    );

  }



  if(isError){

    return (

      <div className="p-8 text-center">

        <h2 className="text-xl font-semibold text-red-500">
          Dashboard Error
        </h2>

      </div>

    );

  }



  const stats = [


    {
      title:"Total Students",
      value: dashboard.totalStudents || 0
    },


    {
      title:"Total Employers",
      value: dashboard.totalEmployers || 0
    },


    {
      title:"Total Internships",
      value: dashboard.totalInternships || 0
    },


    {
      title:"Pending Applications",
      value: dashboard.pendingApplications || 0
    },


  ];



  const recentStudents =
    dashboard.recentStudents || [];



  const internships =
    dashboard.recentInternships || [];



  const applications =
    dashboard.recentApplications || [];





  return (


    <div className="min-h-screen bg-slate-50 p-8">


      <h1 className="text-4xl font-bold mb-2">

        Admin Dashboard

      </h1>



      <p className="text-gray-500 mb-8">

        Welcome back, Admin! 👋

      </p>





      {/* STAT CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


        {
          stats.map((item,index)=>(

            <DashboardCard

              key={index}

              title={item.title}

              value={item.value}

            />

          ))

        }


      </div>






      {/* CHARTS */}

      <div className="mt-8">


        <DashboardCharts

          stats={stats}

          applications={applications}

        />


      </div>






      {/* APPLICATIONS */}

      <div className="mt-8">


        <ApplicationTable

          applications={applications}

        />


      </div>







      {/* RECENT DATA */}

      <div className="grid xl:grid-cols-2 gap-6 mt-8">


        <RecentStudents

          students={recentStudents}

        />



        <RecentInternships

          internships={internships}

        />


      </div>



    </div>


  );


}


export default Dashboard;