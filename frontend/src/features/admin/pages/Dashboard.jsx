import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ marginTop: "20px" }}>
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;