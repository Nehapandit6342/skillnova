import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "@/routes/ProtectedRoute";
import MainLayout from "@/layouts/MainLayout";
/* ---------- Public ---------- */
import HomePage from "@/features/landing/pages/HomePage";
import FeaturesPage from "@/features/landing/pages/FeaturesPage";
import AboutPage from "@/features/landing/pages/AboutPages";
import ContactPage from "@/features/landing/pages/ContactPage";
import LoginPage from "@/features/auth/pages/LoginPage";

import AdminLayout from "@/layouts/AdminLayout";
import StudentLayout from "@/layouts/StudentLayout";

// ================= ADMIN PAGES =================

import Dashboard from "@/features/admin/pages/Dashboard";

import Students from "@/features/admin/pages/Students";
import StudentDetails from "@/features/admin/pages/StudentDetails";
import EditStudent from "@/features/admin/pages/EditStudent";

import Applications from "@/features/admin/pages/Applications";

import Internships from "@/features/admin/pages/Internships";
import AddInternship from "@/features/admin/pages/AddInternship";
import EditInternship from "@/features/admin/pages/EditInternship";
import InternshipDetails from "@/features/admin/pages/InternshipDetails";
// ================= EMPLOYER =================

import EmployerLayout from "@/layouts/EmployerLayout";

import EmployerDashboard from "@/features/employer/pages/EmployerDashboard";
import CompanyProfile from "@/features/employer/pages/CompanyProfile";
import Employers from "@/features/admin/pages/Employers";
import EmployerDetails from "@/features/admin/pages/EmployerDetails";
import EditEmployer from "@/features/admin/pages/EditEmployer";

import Settings from "@/features/admin/pages/Settings";

// ================= AUTH =================

import LoginPage from "@/features/auth/pages/LoginPage";

// ================= STUDENT =================

import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";
import ResumeBuilder from "@/features/student/pages/ResumeBuilder";
import Testimonials from "@/features/admin/pages/Testimonials";
import Companies from "@/features/admin/pages/Companies";
import FAQs from "@/features/admin/pages/FAQs";

function AppRoutes() {
  return (
    <Routes>
      {/* ================= HOME ================= */}

      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ================= LOGIN ================= */}

      <Route path="/login" element={<LoginPage />} />

      {/* =================================================
        PUBLIC INTERNSHIP FLOW
================================================= */}
      <Route element={<MainLayout />}>
        <Route path="/internships" element={<InternshipList />} />

        <Route path="/internships/:id" element={<InternshipDetails />} />

        <Route path="/internships/:id/apply" element={<ApplyInternship />} />
      </Route>

      {/* =================================================
        STUDENT PORTAL
================================================= */}

      <Route element={<ProtectedRoute roles={["STUDENT"]} />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<StudentDashboard />} />

          <Route path="profile" element={<StudentProfile />} />

          <Route path="resume-builder" element={<ResumeBuilder />} />

          <Route path="resume-analysis" element={<ResumeReport />} />

          <Route path="internships" element={<InternshipList />} />

          <Route path="settings" element={<StudentSettings />} />
        </Route>
      </Route>

      <Route path="testimonials" element={<Testimonials />} />

      {/* ================= STUDENT ================= */}

      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<StudentDashboard />} />

        <Route path="students" element={<Students />} />

        <Route path="internships/add" element={<AddInternship />} />

        <Route path="internships/:id" element={<AdminInternshipDetails />} />

        <Route path="resume-builder" element={<ResumeBuilder />} />
      </Route>

      {/* ================= EMPLOYER ================= */}

      <Route path="/employer" element={<EmployerLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<EmployerDashboard />} />

        <Route path="company-profile" element={<CompanyProfile />} />
      </Route>

      {/* ================= NOT FOUND ================= */}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
