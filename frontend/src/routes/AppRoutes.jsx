import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoute";



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
import StudentLayout from "@/layouts/StudentLayout";
import StudentDashboard from "@/features/student/pages/StudentDashboard";
import StudentProfile from "@/features/student/pages/StudentProfile";
import ResumeBuilder from "@/features/student/pages/ResumeBuilder";
import ResumeReport from "@/features/student/pages/ResumeReport";
import StudentSettings from "@/features/student/pages/Settings";

function AppRoutes() {
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
      <Route path="/login" element={<LoginPage />} />

      {/* ================== ADMIN ================= */}
      <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="students" element={<Students />} />

          <Route path="applications" element={<Applications />} />

          <Route path="internships" element={<Internships />} />

          <Route path="internships/add" element={<AddInternship />} />

          <Route path="internships/:id" element={<InternshipDetails />} />

          <Route path="internships/edit/:id" element={<EditInternship />} />

          <Route path="employers" element={<Employers />} />

          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* ================= STUDENT ================= */}
      <Route element={<ProtectedRoute roles={["STUDENT"]} />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<StudentDashboard />} />

          <Route path="profile" element={<StudentProfile />} />

          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="resume-analysis" element={<ResumeReport />} />
          <Route path="settings" element={<StudentSettings />} />
        </Route>
      </Route>









{/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-slate-900">404</h1>
              <p className="mt-2 text-slate-500">Page not found.</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}