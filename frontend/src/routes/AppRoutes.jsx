import { Routes, Route, Navigate } from "react-router-dom";


import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import StudentLayout from "@/layouts/StudentLayout";



import HomePage from "@/features/landing/pages/HomePage";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";



import Dashboard from "@/features/admin/pages/Dashboard";
import Students from "@/features/admin/pages/Students";



import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";



export default function AppRoutes() {


  return (

    <Routes>



      {/* ================= PUBLIC ROUTES ================= */}

      <Route element={<MainLayout />}>

        <Route 
          path="/" 
          element={<HomePage />} 
        />


        <Route 
          path="/login" 
          element={<LoginPage />} 
        />


        <Route 
          path="/register" 
          element={<RegisterPage />} 
        />


        <Route 
          path="/verify-email" 
          element={<VerifyEmailPage />} 
        />


      </Route>







      {/* ================= STUDENT ROUTES ================= */}


      <Route 
        path="/student" 
        element={<StudentLayout />}
      >


        {/* /student redirects to dashboard */}

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


      </Route>









      {/* ================= ADMIN ROUTES ================= */}


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


      </Route>






      {/* ================= 404 ================= */}


      <Route

        path="*"

        element={
          <Navigate 
            to="/" 
            replace 
          />
        }

      />


    </Routes>

  );

}