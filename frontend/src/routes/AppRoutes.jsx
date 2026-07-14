import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/features/landing/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import StudentLayout from "@/layouts/StudentLayout";
import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Student */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>
    </Routes>
  );
}
