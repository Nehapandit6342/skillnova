import {
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

function DashboardCard({ title, value }) {

  const icons = {
    "Total Students": <FaUserGraduate />,
    "Total Employers": <FaBuilding />,
    "Total Internships": <FaBriefcase />,
    "Pending Applications": <FaClock />,
  };


  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        minHeight: "130px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      <div>
        <h3
          style={{
            color: "#555",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          {title}
        </h3>

        <h1
          style={{
            fontSize: "32px",
            margin: 0,
            color: "#1e293b",
          }}
        >
          {value}
        </h1>
      </div>


      <div
        style={{
          fontSize: "40px",
          color: "#2563eb",
        }}
      >
        {icons[title]}
      </div>


    </div>
  );
}

export default DashboardCard;