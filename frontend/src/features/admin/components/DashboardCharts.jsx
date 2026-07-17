import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


function DashboardCharts() {

  const studentData = [
    {
      month: "Jan",
      students: 40,
    },
    {
      month: "Feb",
      students: 65,
    },
    {
      month: "Mar",
      students: 85,
    },
    {
      month: "Apr",
      students: 120,
    },
    {
      month: "May",
      students: 150,
    },
  ];


  const internshipData = [
    {
      name: "Available",
      count: 48,
    },
    {
      name: "Applied",
      count: 120,
    },
    {
      name: "Selected",
      count: 35,
    },
  ];


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "40px",
      }}
    >


      {/* Student Growth */}

      <div
        style={{
          background:"#fff",
          padding:"20px",
          borderRadius:"15px",
          boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
        }}
      >

        <h2>
          Student Growth
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={studentData}>

            <CartesianGrid />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>



      {/* Internship Stats */}

      <div
        style={{
          background:"#fff",
          padding:"20px",
          borderRadius:"15px",
          boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
        }}
      >

        <h2>
          Internship Statistics
        </h2>


        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={internshipData}>

            <CartesianGrid />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#16a34a"
            />

          </BarChart>


        </ResponsiveContainer>


      </div>


    </div>
  );
}


export default DashboardCharts;