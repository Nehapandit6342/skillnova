import { Outlet } from "react-router-dom";
import AdminNavbar from "@/features/admin/components/AdminNavbar";
import AdminSidebar from "@/features/admin/components/AdminSidebar";

function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;