import { useEffect, useState } from "react";

import api from "@/lib/api";

import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentStudents from "../components/RecentStudents";
import RecentInternships from "../components/RecentInternships";

function Dashboard() {
  const [stats, setStats] = useState([]);
  const [recentStudents, setRecentStudents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await api.get("/admin/dashboard");

        console.log("Dashboard:", data);

        if (data.success) {
          setStats([
            {
              title: "Total Students",
              value: data.data.totalStudents || 0,
            },
            {
              title: "Total Employers",
              value: data.data.totalEmployers || 0,
            },
            {
              title: "Total Internships",
              value: data.data.totalInternships || 0,
            },
            {
              title: "Pending Applications",
              value: data.data.pendingApplications || 0,
            },
          ]);

          setRecentStudents(data.data.recentStudents || []);
          setApplications(data.data.recentApplications || []);
          setInternships(data.data.recentInternships || []);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Admin Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back, Admin! 👋
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm border px-5 py-3 mt-4 md:mt-0">

          <p className="text-sm text-slate-400">
            Today
          </p>

          <h2 className="font-semibold">
            {new Date().toLocaleDateString()}
          </h2>

        </div>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

      {/* Charts + Recent Applications */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

        <DashboardCharts
          stats={stats}
          applications={applications}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-semibold">
              Recent Applications
            </h2>

            <button className="text-blue-600 text-sm font-medium">
              View All
            </button>

          </div>

          {applications.length > 0 ? (
            applications.map((app) => (
              <div
                key={app.id}
                className="flex justify-between items-center border-b py-4"
              >

                <div>

                  <h3 className="font-semibold">
                    {app.student?.user?.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {app.internship?.title}
                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === "ACCEPTED"
                      ? "bg-green-100 text-green-700"
                      : app.status === "REJECTED"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {app.status}
                </span>

              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No applications found
            </p>
          )}

        </div>

      </div>

      {/* Students + Internships */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

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