import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 15px",
    marginBottom: "10px",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    transition: "0.3s",
  });

  return (
    <aside
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "25px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        SkillNova Admin
      </h2>

      <nav>
        <NavLink to="/admin/dashboard" style={linkStyle}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/admin/students" style={linkStyle}>
          👨‍🎓 Students
        </NavLink>

        <NavLink to="/admin/add-student" style={linkStyle}>
          ➕ Add Student
        </NavLink>

        <NavLink to="/admin/employers" style={linkStyle}>
          🏢 Employers
        </NavLink>

        <NavLink to="/admin/internships" style={linkStyle}>
          💼 Internships
        </NavLink>

        <NavLink to="/admin/settings" style={linkStyle}>
          ⚙️ Settings
        </NavLink>

        <NavLink to="/login" style={linkStyle}>
          🚪 Logout
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;