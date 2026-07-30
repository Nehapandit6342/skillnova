import { useEffect, useState } from "react";
import api from "@/lib/api";

import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentStudents from "../components/RecentStudents";
import RecentInternships from "../components/RecentInternships";
import ApplicationTable from "../components/ApplicationTable";

function Dashboard() {
  const [stats, setStats] = useState([]);
  const [recentStudents, setRecentStudents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await api.get("/admin/dashboard");

        console.log("Dashboard Data:", data);

        if (data.success) {
          const dashboard = data.data;

          setStats([
            {
              title: "Total Students",
              value: dashboard.totalStudents || 0,
            },
            {
              title: "Total Employers",
              value: dashboard.totalEmployers || 0,
            },
            {
              title: "Total Internships",
              value: dashboard.totalInternships || 0,
            },
            {
              title: "Pending Applications",
              value: dashboard.pendingApplications || 0,
            },
          ]);

          setRecentStudents(dashboard.recentStudents || []);
          setApplications(dashboard.recentApplications || []);
          setInternships(dashboard.recentInternships || []);
        }
      } catch (error) {
        console.log(
          "Dashboard Error:",
          error.response?.data || error.message
        );
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h1 className="text-4xl font-bold mb-2">
        Admin Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        Welcome back, Admin! 👋
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      {/* ✅ Props Pass */}
      <DashboardCharts
        stats={stats}
        applications={applications}
      />

      <div className="mt-8">
        <ApplicationTable applications={applications} />
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-8">
        <RecentStudents students={recentStudents} />

        <RecentInternships internships={internships} />
      </div>
    </div>
  );
}

export default Dashboard;