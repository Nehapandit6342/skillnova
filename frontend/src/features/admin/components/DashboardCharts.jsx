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
    { month: "Jan", students: 40 },
    { month: "Feb", students: 65 },
    { month: "Mar", students: 85 },
    { month: "Apr", students: 120 },
    { month: "May", students: 150 },
  ];

  const internshipData = [
    { name: "Available", count: 48 },
    { name: "Applied", count: 120 },
    { name: "Selected", count: 35 },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

      {/* Student Growth */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Student Growth
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={studentData}>
            <CartesianGrid strokeDasharray="3 3" />
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

      {/* Internship Statistics */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Internship Statistics
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={internshipData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="count"
              fill="#16a34a"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DashboardCharts;