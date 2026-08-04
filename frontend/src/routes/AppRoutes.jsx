import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";



// ================= HOME =================

import HomePage
from "@/features/landing/pages/HomePage";


// ================= AUTH =================

import LoginPage
from "@/features/auth/pages/LoginPage";



// ================= LAYOUT =================

import AdminLayout
from "@/layouts/AdminLayout";

import StudentLayout
from "@/layouts/StudentLayout";

import EmployerLayout
from "@/layouts/EmployerLayout";




// ================= PUBLIC INTERNSHIP =================

import InternshipList
from "@/features/internship/pages/InternshipList";

import InternshipDetails
from "@/features/internship/pages/InternshipDetails";

import ApplyInternship
from "@/features/internship/pages/ApplyInternship";





// ================= STUDENT =================

import StudentDashboard
from "@/features/student/pages/StudentDashboard";

import StudentProfile
from "@/features/student/pages/StudentProfile";

import ResumeBuilder
from "@/features/student/pages/ResumeBuilder";

import MyApplications
from "@/features/internship/pages/MyApplications";





// ================= ADMIN =================

import Dashboard
from "@/features/admin/pages/Dashboard";

import Students
from "@/features/admin/pages/Students";

import StudentDetails
from "@/features/admin/pages/StudentDetails";

import EditStudent
from "@/features/admin/pages/EditStudent";

import AdminApplications
from "@/features/admin/pages/Applications";

import AdminInternships
from "@/features/admin/pages/Internships";

import AddInternship
from "@/features/admin/pages/AddInternship";

import AdminEditInternship
from "@/features/admin/pages/EditInternship";

import AdminInternshipDetails
from "@/features/admin/pages/InternshipDetails";

import Employers
from "@/features/admin/pages/Employers";

import EmployerDetails
from "@/features/admin/pages/EmployerDetails";

import EditEmployer
from "@/features/admin/pages/EditEmployer";

import Settings
from "@/features/admin/pages/Settings";






// ================= EMPLOYER =================

import EmployerDashboard
from "@/features/employer/pages/EmployerDashboard";

import CompanyProfile
from "@/features/employer/pages/CompanyProfile";

import MyInternships
from "@/features/employer/pages/MyInternships";

import PostInternship
from "@/features/employer/pages/PostInternship";

import EditInternship
from "@/features/employer/pages/EditInternship";

import Applications
from "@/features/employer/pages/Applications";

import Candidates
from "@/features/employer/pages/Candidates";

import EmployerSettings
from "@/features/employer/pages/EmployerSettings";






export default function AppRoutes(){


return (

<Routes>





{/* ================= HOME ================= */}


<Route

path="/"

element={<HomePage/>}

/>





{/* ================= LOGIN ================= */}


<Route

path="/login"

element={<LoginPage/>}

/>









{/* =================================================
        PUBLIC INTERNSHIP FLOW
================================================= */}



<Route

path="/internships"

element={<InternshipList/>}

/>




<Route

path="/internships/:id"

element={<InternshipDetails/>}

/>




<Route

path="/internships/:id/apply"

element={<ApplyInternship/>}

/>









{/* =================================================
        STUDENT PORTAL
================================================= */}


{/* =================================================
        STUDENT PORTAL
================================================= */}


<Route

path="/student"

element={<StudentLayout/>}

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

element={<StudentDashboard/>}

/>



<Route

path="profile"

element={<StudentProfile/>}

/>



<Route

path="resume-builder"

element={<ResumeBuilder/>}

/>



{/* Internship List */}

<Route

path="internships"

element={<InternshipList/>}

/>



<Route

path="applications"

element={<MyApplications/>}

/>



</Route>












{/* =================================================
        ADMIN PORTAL
================================================= */}



<Route

path="/admin"

element={<AdminLayout/>}

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

element={<Dashboard/>}

/>




<Route

path="students"

element={<Students/>}

/>




<Route

path="student/:id"

element={<StudentDetails/>}

/>




<Route

path="edit-student/:id"

element={<EditStudent/>}

/>




<Route

path="applications"

element={<AdminApplications/>}

/>




<Route

path="internships"

element={<AdminInternships/>}

/>




<Route

path="internships/add"

element={<AddInternship/>}

/>




<Route

path="internships/:id"

element={<AdminInternshipDetails/>}

/>




<Route

path="internships/edit/:id"

element={<AdminEditInternship/>}

/>




<Route

path="employers"

element={<Employers/>}

/>




<Route

path="employer/:id"

element={<EmployerDetails/>}

/>




<Route

path="edit-employer/:id"

element={<EditEmployer/>}

/>




<Route

path="settings"

element={<Settings/>}

/>


</Route>












{/* =================================================
        EMPLOYER PORTAL
================================================= */}



<Route

path="/employer"

element={<EmployerLayout/>}

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

element={<EmployerDashboard/>}

/>




<Route

path="profile"

element={<CompanyProfile/>}

/>




<Route

path="internships"

element={<MyInternships/>}

/>




<Route

path="internships/post"

element={<PostInternship/>}

/>




<Route

path="internships/edit/:id"

element={<EditInternship/>}

/>




<Route

path="applications"

element={<Applications/>}

/>




<Route

path="candidates"

element={<Candidates/>}

/>




<Route

path="settings"

element={<EmployerSettings/>}

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