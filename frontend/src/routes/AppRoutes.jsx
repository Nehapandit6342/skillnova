import { Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";

import HomePage from "@/features/landing/pages/HomePage";
import Dashboard from "@/features/admin/pages/Dashboard";
import Students from "@/features/admin/pages/Students";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
}