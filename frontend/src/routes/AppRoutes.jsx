import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "@/routes/ProtectedRoute";


// ================= PUBLIC =================

import HomePage from "@/features/landing/pages/HomePage";
import FeaturesPage from "@/features/landing/pages/FeaturesPage";
import AboutPage from "@/features/landing/pages/AboutPages";
import ContactPage from "@/features/landing/pages/ContactPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";



// ================= LAYOUTS =================

import StudentLayout from "@/layouts/StudentLayout";
import AdminLayout from "@/layouts/AdminLayout";
import EmployerLayout from "@/layouts/EmployerLayout";



// ================= STUDENT =================

import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";
import ResumeBuilder from "@/features/student/pages/ResumeBuilder";
import ResumeReport from "@/features/student/pages/ResumeReport";
import StudentSettings from "@/features/student/pages/Settings";



// ================= INTERNSHIP =================

import InternshipList from "@/features/internship/pages/InternshipList";
import InternshipDetails from "@/features/internship/pages/InternshipDetails";
import ApplyInternship from "@/features/internship/pages/ApplyInternship";



// ================= ADMIN =================

import Dashboard from "@/features/admin/pages/Dashboard";

import Students from "@/features/admin/pages/Students";
import Settings from "@/features/admin/pages/Settings";
import AddInternship from "@/features/admin/pages/AddInternship";
import Employers from "@/features/admin/pages/Employers";



// ================= EMPLOYER =================

import EmployerDashboard from "@/features/employer/pages/EmployerDashboard";
import CompanyProfile from "@/features/employer/pages/CompanyProfile";
import MyInternships from "@/features/employer/pages/MyInternships";
import PostInternship from "@/features/employer/pages/PostInternship";
import EmployerEditInternship from "@/features/employer/pages/EditInternship";

import EmployerApplications from "@/features/employer/pages/Applications";
import Candidates from "@/features/employer/pages/Candidates";
import EmployerSettings from "@/features/employer/pages/EmployerSettings";
import CandidateDetails from "@/features/employer/pages/CandidateDetails";




function AppRoutes(){


return (

<Routes>


{/* ================= HOME ================= */}

<Route
path="/"
element={<HomePage />}
/>



{/* ================= AUTH ================= */}

<Route
path="/login"
element={<LoginPage />}
/>


<Route
path="/register"
element={<RegisterPage />}
/>





{/* ================= PUBLIC INTERNSHIPS ================= */}

<Route
path="/internships"
element={<InternshipList />}
/>


<Route
path="/internships/:id"
element={<InternshipDetails />}
/>


<Route
path="/internships/:id/apply"
element={<ApplyInternship />}
/>







{/* ================= STUDENT ================= */}


<Route element={<ProtectedRoute roles={["STUDENT"]} />}>

    <Route 
    path="/student" 
    element={<StudentLayout />}
    >

        <Route
        index
        element={<Navigate to="dashboard" replace />}
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


        <Route
        path="resume-analysis"
        element={<ResumeReport />}
        />


        <Route
        path="internships"
        element={<InternshipList />}
        />


        <Route
        path="settings"
        element={<StudentSettings />}
        />

    </Route>

</Route>








{/* ================= ADMIN ================= */}


<Route element={<ProtectedRoute roles={["ADMIN"]} />}>

    <Route
    path="/admin"
    element={<AdminLayout />}
    >

        <Route
        index
        element={<Navigate to="dashboard" replace />}
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
        path="internships/add"
        element={<AddInternship />}
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

</Route>









{/* ================= EMPLOYER ================= */}


{/* ================= EMPLOYER ================= */}


<Route element={<ProtectedRoute roles={["EMPLOYER"]} />}>


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
            path="profile"
            element={<CompanyProfile />}
        />



        <Route
            path="internships"
            element={<MyInternships />}
        />



        <Route
            path="internships/post"
            element={<PostInternship />}
        />



        <Route
            path="internships/edit/:id"
            element={<EmployerEditInternship />}
        />




        {/* Applications */}

        <Route
            path="applications"
            element={<EmployerApplications />}
        />




        {/* Candidates List */}

        <Route
            path="candidates"
            element={<Candidates />}
        />




        {/* Candidate Details */}

        <Route
            path="candidates/:id"
            element={<CandidateDetails />}
        />




        <Route
            path="settings"
            element={<EmployerSettings />}
        />


    </Route>


</Route>








{/* ================= UNAUTHORIZED ================= */}


<Route

path="/unauthorized"

element={

<div
className="
flex
min-h-screen
items-center
justify-center
bg-slate-50
"
>

<div className="text-center">

<h1
className="
text-5xl
font-bold
text-red-600
"
>
403
</h1>


<p className="mt-3 text-gray-600">
You are not authorized to access this page.
</p>


</div>

</div>

}

/>







{/* ================= 404 ================= */}


<Route

path="*"

element={

<div
className="
flex
min-h-screen
items-center
justify-center
bg-slate-50
"
>

<div className="text-center">


<h1
className="
text-5xl
font-bold
text-slate-900
"
>
404
</h1>


<p className="mt-2 text-slate-500">
Page not found.
</p>


</div>


</div>

}

/>


</Routes>

);


}


export default AppRoutes;