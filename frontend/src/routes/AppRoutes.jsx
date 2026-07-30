import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import StudentLayout from "@/layouts/StudentLayout";
import EmployerLayout from "@/layouts/EmployerLayout";

import ProtectedRoute from "@/routes/ProtectedRoute";


// ================= PUBLIC PAGES =================

import HomePage from "@/features/landing/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import Unauthorized from "@/features/auth/pages/Unauthorized";



// ================= ADMIN PAGES =================

import Dashboard from "@/features/admin/pages/Dashboard";

import Students from "@/features/admin/pages/Students";
import EditStudent from "@/features/admin/pages/EditStudent";
import StudentDetails from "@/features/admin/pages/StudentDetails";

import Employers from "@/features/admin/pages/Employers";
import EditEmployer from "@/features/admin/pages/EditEmployer";
import EmployerDetails from "@/features/admin/pages/EmployerDetails";

import Internships from "@/features/admin/pages/Internships";
import Applications from "@/features/admin/pages/Applications";



// ================= STUDENT PAGES =================

import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";
import ResumeBuilder from "@/features/student/pages/ResumeBuilder";



// ================= EMPLOYER PAGES =================

import EmployerDashboard from "@/features/employer/pages/EmployerDashboard";
import CompanyProfile from "@/features/employer/pages/CompanyProfile";
import PostInternship from "@/features/employer/pages/PostInternship";
import MyInternships from "@/features/employer/pages/MyInternships";
import EditInternship from "@/features/employer/pages/EditInternship";
import EmployerApplications from "@/features/employer/pages/Applications";
import Candidates from "@/features/employer/pages/Candidates";
import EmployerSettings from "@/features/employer/pages/EmployerSettings";





function AppRoutes() {


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
path="/unauthorized"
element={<Unauthorized />}
/>


</Route>






{/* ================= ADMIN ROUTES ================= */}



<Route
path="/admin"
element={
<ProtectedRoute roles={["ADMIN"]}/>
}
>


<Route element={<AdminLayout />}>


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
path="edit-student/:id"
element={<EditStudent />}
/>



<Route
path="student/:id"
element={<StudentDetails />}
/>





<Route
path="employers"
element={<Employers />}
/>



<Route
path="edit-employer/:id"
element={<EditEmployer />}
/>



<Route
path="employer/:id"
element={<EmployerDetails />}
/>





{/* NEW ADMIN MODULES */}


<Route
path="internships"
element={<Internships />}
/>



<Route
path="applications"
element={<Applications />}
/>



</Route>


</Route>









{/* ================= STUDENT ROUTES ================= */}



<Route
path="/student"
element={
<ProtectedRoute roles={["STUDENT"]}/>
}
>


<Route element={<StudentLayout />}>


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
path="resume"
element={<ResumeBuilder />}
/>



</Route>


</Route>









{/* ================= EMPLOYER ROUTES ================= */}



<Route
path="/employer"
element={
<ProtectedRoute roles={["EMPLOYER"]}/>
}
>


<Route element={<EmployerLayout />}>


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
path="profile"
element={<CompanyProfile />}
/>



<Route
path="post-internship"
element={<PostInternship />}
/>



<Route
path="internships"
element={<MyInternships />}
/>



<Route
path="edit-internship/:id"
element={<EditInternship />}
/>



<Route
path="applications"
element={<EmployerApplications />}
/>



<Route
path="candidates"
element={<Candidates />}
/>



<Route
path="settings"
element={<EmployerSettings />}
/>



</Route>


</Route>









{/* ================= FALLBACK ================= */}



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


export default AppRoutes;