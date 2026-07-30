import { Routes, Route, Navigate } from "react-router-dom";


// ================= LAYOUT =================

import AdminLayout from "@/layouts/AdminLayout";



// ================= ADMIN PAGES =================

import Dashboard from "@/features/admin/pages/Dashboard";
import Students from "@/features/admin/pages/Students";
import Applications from "@/features/admin/pages/Applications";
import Internships from "@/features/admin/pages/Internships";
import Employers from "@/features/admin/pages/Employers";
import Settings from "@/features/admin/pages/Settings";

import AddInternship from "@/features/admin/pages/AddInternship";
import EditInternship from "@/features/admin/pages/EditInternship";
import InternshipDetails from "@/features/admin/pages/InternshipDetails";



// ================= AUTH =================

import LoginPage from "@/features/auth/pages/LoginPage";



// ================= STUDENT =================

import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";
import ResumeBuilder from "@/features/student/pages/ResumeBuilder";




function AppRoutes() {


  return (

    <Routes>



      {/* ================= LOGIN ================= */}

      <Route
        path="/login"
        element={<LoginPage />}
      />




      {/* ================= DEFAULT ================= */}

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />





      {/* ================= ADMIN ================= */}


      <Route
        path="/admin"
        element={<AdminLayout />}
      >


        <Route
          index
          element={
            <Navigate
              to="dashboard"
              replace
            />
          }
        />



        <Route
          path="dashboard"
          element={<Dashboard />}
        />



        <Route
          path="students"
          element={<Students />}
        />



        <Route
          path="applications"
          element={<Applications />}
        />



        <Route
          path="internships"
          element={<Internships />}
        />



        <Route
          path="internships/add"
          element={<AddInternship />}
        />



        <Route
          path="internships/:id"
          element={<InternshipDetails />}
        />



        <Route
          path="internships/edit/:id"
          element={<EditInternship />}
        />



        <Route
          path="employers"
          element={<Employers />}
        />



        <Route
          path="settings"
          element={<Settings />}
        />


      </Route>






      {/* ================= STUDENT ================= */}


      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />



      <Route
        path="/student/profile"
        element={<StudentProfile />}
      />



      <Route
        path="/student/resume-builder"
        element={<ResumeBuilder />}
      />







      {/* ================= NOT FOUND ================= */}


      <Route
        path="*"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />



    </Routes>

  );


}


export default AppRoutes;