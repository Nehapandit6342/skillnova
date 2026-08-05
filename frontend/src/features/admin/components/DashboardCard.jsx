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
      color: "text-blue-600",
      bg: "bg-blue-100",
    },

    "Total Employers": {
      icon: <FaBuilding />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },

    "Total Internships": {
      icon: <FaBriefcase />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },

    "Pending Applications": {
      icon: <FaClock />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
  };

  const current = cardData[title];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            {value}
          </h2>

          <p className="text-gray-400 text-sm mt-4">
            Updated from database
          </p>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl ${current.bg} flex items-center justify-center`}
        >
          <span className={`text-3xl ${current.color}`}>
            {current.icon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;