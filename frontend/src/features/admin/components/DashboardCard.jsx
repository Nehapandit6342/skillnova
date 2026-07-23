import {
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

function DashboardCard({ title, value }) {
  const cardData = {
    "Total Students": {
      icon: <FaUserGraduate />,
      color: "bg-blue-100 text-blue-600",
      change: "+12% this month",
    },
    "Total Employers": {
      icon: <FaBuilding />,
      color: "bg-green-100 text-green-600",
      change: "+5 this week",
    },
    "Total Internships": {
      icon: <FaBriefcase />,
      color: "bg-purple-100 text-purple-600",
      change: "+3 new",
    },
    "Pending Applications": {
      icon: <FaClock />,
      color: "bg-orange-100 text-orange-600",
      change: "24 Pending",
    },
  };

  const current = cardData[title];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-3">
            {value}
          </h2>

          <p className="text-green-600 text-sm mt-3 font-medium">
            {current.change}
          </p>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${current.color}`}
        >
          {current.icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;