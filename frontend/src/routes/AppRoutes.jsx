import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/features/landing/pages/HomePage";


// ================= LAYOUT =================

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

      <Route
        path="/"
        element={<HomePage />}
      />



      {/* ================= LOGIN ================= */}

      <Route
        path="/login"
        element={<LoginPage />}
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



        {/* Dashboard */}

        <Route
          path="dashboard"
          element={<Dashboard />}
        />



        {/* Students */}

        <Route
          path="students"
          element={<Students />}
        />


        <Route
          path="student/:id"
          element={<StudentDetails />}
        />


        <Route
          path="edit-student/:id"
          element={<EditStudent />}
        />




        {/* Applications */}

        <Route
          path="applications"
          element={<Applications />}
        />





        {/* Internships */}

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





        {/* Employers */}

        <Route
          path="employers"
          element={<Employers />}
        />


        <Route
          path="employer/:id"
          element={<EmployerDetails />}
        />


        <Route
          path="edit-employer/:id"
          element={<EditEmployer />}
        />
{/* Companies */}

<Route
  path="companies"
  element={<Companies />}
/>

{/* Testimonials */}

<Route
  path="testimonials"
  element={<Testimonials />}
/>

{/* FAQs */}

<Route
  path="faqs"
  element={<FAQs />}
/>




        {/* Settings */}

        <Route
          path="settings"
          element={<Settings />}
        />

      </Route>

<Route
  path="testimonials"
  element={<Testimonials />}
/>





      {/* ================= STUDENT ================= */}


      <Route
        path="/student"
        element={<StudentLayout />}
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
          element={<StudentDashboard />}
        />


        <Route
          path="profile"
          element={<StudentProfile />}
        />


        <Route
          path="resume-builder"
          element={<ResumeBuilder />}
        />


      </Route>

{/* ================= EMPLOYER ================= */}

<Route
  path="/employer"
  element={<EmployerLayout />}
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
    element={<EmployerDashboard />}
  />

  <Route
    path="company-profile"
    element={<CompanyProfile />}
  />
</Route>



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