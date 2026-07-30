import { Routes, Route } from "react-router-dom";


import Dashboard from "@/features/admin/pages/Dashboard";
import Applications from "@/features/admin/pages/Applications";
import Internships from "@/features/admin/pages/Internships";
import Employers from "@/features/admin/pages/Employers";
import Settings from "@/features/admin/pages/Settings";

import AddInternship from "@/features/admin/pages/AddInternship";
import EditInternship from "@/features/admin/pages/EditInternship";
import InternshipDetails from "@/features/admin/pages/InternshipDetails";


function AppRoutes() {

  return (

    <Routes>


      {/* Admin Routes */}

      <Route
        path="/admin/dashboard"
        element={<Dashboard />}
      />


      <Route
        path="/admin/applications"
        element={<Applications />}
      />


      <Route
        path="/admin/internships"
        element={<Internships />}
      />


      <Route
        path="/admin/internships/add"
        element={<AddInternship />}
      />


      <Route
        path="/admin/internships/:id"
        element={<InternshipDetails />}
      />


      <Route
        path="/admin/internships/edit/:id"
        element={<EditInternship />}
      />


      <Route
        path="/admin/employers"
        element={<Employers />}
      />


      <Route
        path="/admin/settings"
        element={<Settings />}
      />


    </Routes>

  );

}


export default AppRoutes;