import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentStudents from "../components/RecentStudents";
import RecentInternships from "../components/RecentInternships";

function Dashboard() {
  const [stats, setStats] = useState([]);
  const [recentStudents, setRecentStudents] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        console.log("Token:", token);

        const response = await fetch(
          "http://localhost:5001/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();

        console.log("Dashboard Data:", result);

        if (result.success) {
          const dashboardStats = [
            {
              title: "Total Students",
              value: result.data.totalStudents || 0,
            },
            {
              title: "Total Employers",
              value: result.data.totalEmployers || 0,
            },
            {
              title: "Total Internships",
              value: result.data.totalInternships || 0,
            },
            {
              title: "Pending Applications",
              value: result.data.pendingApplications || 0,
            },
          ];

          console.log("Stats Array:", dashboardStats);

          setStats(dashboardStats);

          setRecentStudents(result.data.recentStudents || []);
        } else {
          console.error("API Error:", result.message);
        }
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Manage students, employers, internships and applications.
        </p>
      </div>

      {/* Debug */}
      <div className="mb-6 p-4 rounded-xl bg-yellow-100 border border-yellow-300">
        <h2 className="font-bold text-lg text-red-600">
          Stats Length : {stats.length}
        </h2>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      {/* Charts */}
      <DashboardCharts />

      {/* Recent Students */}
      <RecentStudents students={recentStudents} />

      {/* Recent Internships */}
      <RecentInternships />

    </div>
  );
}

export default Dashboard;