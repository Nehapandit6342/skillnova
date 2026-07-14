import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>SkillNova Admin</h2>

      <nav style={{ marginTop: "30px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/admin/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/admin/students"
              style={{ color: "white", textDecoration: "none" }}
            >
              Students
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/admin/add-student"
              style={{ color: "white", textDecoration: "none" }}
            >
              Add Student
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="#"
              style={{ color: "white", textDecoration: "none" }}
            >
              Employers
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="#"
              style={{ color: "white", textDecoration: "none" }}
            >
              Internships
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;