import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import StudentLayout from "@/layouts/StudentLayout";
import EmployerLayout from "@/layouts/EmployerLayout";

// Public Pages
import HomePage from "@/features/landing/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";

// Admin Pages
import Dashboard from "@/features/admin/pages/Dashboard";
import Students from "@/features/admin/pages/Students";
import AddStudent from "@/features/admin/pages/AddStudent";
import EditStudent from "@/features/admin/pages/EditStudent";
import StudentDetails from "@/features/admin/pages/StudentDetails";

import Employers from "@/features/admin/pages/Employers";
import AddEmployer from "@/features/admin/pages/AddEmployer";
import EditEmployer from "@/features/admin/pages/EditEmployer";
import EmployerDetails from "@/features/admin/pages/EmployerDetails";

// Student Pages
import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";

// Employer Pages
import EmployerDashboard from "@/features/employer/pages/EmployerDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Route>

      {/* ================= ADMIN ROUTES ================= */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Students */}
        <Route path="students" element={<Students />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="edit-student/:id" element={<EditStudent />} />
        <Route path="student/:id" element={<StudentDetails />} />

        {/* Employers */}
        <Route path="employers" element={<Employers />} />
        <Route path="add-employer" element={<AddEmployer />} />
        <Route path="edit-employer/:id" element={<EditEmployer />} />
        <Route path="employer/:id" element={<EmployerDetails />} />
      </Route>

      {/* ================= STUDENT ROUTES ================= */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
      </Route>

      {/* ================= EMPLOYER ROUTES ================= */}
      <Route path="/employer" element={<EmployerLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<EmployerDashboard />} />
      </Route>
    </Routes>
  );
}