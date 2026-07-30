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
      bg: "bg-gradient-to-r from-blue-500 to-blue-600",
      text: "Students",
    },

    "Total Employers": {
      icon: <FaBuilding />,
      bg: "bg-gradient-to-r from-emerald-500 to-green-600",
      text: "Employers",
    },

    "Total Internships": {
      icon: <FaBriefcase />,
      bg: "bg-gradient-to-r from-violet-500 to-purple-600",
      text: "Internships",
    },

    "Pending Applications": {
      icon: <FaClock />,
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      text: "Pending",
    },
  };

  const current = cardData[title];

  return (
    <div
      className={`${current.bg} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-white/80 text-sm">
            {current.text}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

          <p className="mt-4 text-white/80 text-sm">
            Updated from database
          </p>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
          {current.icon}
        </div>

      </div>
    </div>
  );
}

export default DashboardCard;