import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentStudents from "../components/RecentStudents";import RecentInternships from "../components/RecentInternships";
function Dashboard() {

  const stats = [
    {
      title: "Total Students",
      value: "120",
    },
    {
      title: "Total Employers",
      value: "25",
    },
    {
      title: "Total Internships",
      value: "48",
    },
    {
      title: "Pending Applications",
      value: "12",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Admin Dashboard</h1>

      <p>
        Welcome to SkillNova Admin Panel
      </p>


      {/* Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {
          stats.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
            />
          ))
        }

      </div>


      {/* Dashboard Charts */}
      <DashboardCharts />
       <RecentStudents />
       <RecentInternships />
    </div>
  );
}

export default Dashboard;