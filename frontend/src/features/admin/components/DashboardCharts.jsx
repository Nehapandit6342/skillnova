import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";


function DashboardCharts({
  stats = [],
  applications = [],
}) {


  console.log("CHART STATS:", stats);
  console.log("CHART APPLICATIONS:", applications);



  const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#EF4444",
  ];



  const analytics = [

    {
      name: "Students",
      value: stats[0]?.value ?? 0,
    },

    {
      name: "Employers",
      value: stats[1]?.value ?? 0,
    },

    {
      name: "Internships",
      value: stats[2]?.value ?? 0,
    },

  ];





  const applicationData = [

    {
      name: "Pending",
      value:
        stats.find(
          (item) =>
            item.title === "Pending Applications"
        )?.value || 0,
    },


    {
      name: "Accepted",
      value: applications.filter(
        (app) =>
          app.status === "APPROVED"
      ).length,
    },


    {
      name: "Rejected",
      value: applications.filter(
        (app) =>
          app.status === "REJECTED"
      ).length,
    },

  ];





  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">


      <div className="bg-white rounded-xl shadow-md p-5">


        <h2 className="text-lg font-semibold mb-4">
          📈 Analytics Overview
        </h2>


        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart data={analytics}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>


      </div>





      <div className="bg-white rounded-xl shadow-md p-5">


        <h2 className="text-lg font-semibold mb-4">
          📊 Application Status
        </h2>



        <ResponsiveContainer
          width="100%"
          height={300}
        >


          <PieChart>


            <Pie
              data={applicationData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >

              {
                applicationData.map(
                  (item,index)=>(

                    <Cell
                      key={index}
                      fill={
                        COLORS[index % COLORS.length]
                      }
                    />

                  )
                )
              }

            </Pie>


            <Tooltip />

            <Legend />


          </PieChart>


        </ResponsiveContainer>


      </div>


    </div>

  );

}


export default DashboardCharts;