function AdminNavbar() {
  return (
    <header
      style={{
        height: "70px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>Admin Dashboard</h2>

      <p>Welcome, Admin 👋</p>
    </header>
  );
}

export default AdminNavbar;