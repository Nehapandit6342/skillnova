import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";


export default function ProtectedRoute({
    roles = []
}) {


    const {
        user,
        isAuthenticated
    } = useAuth();



    // ===============================
    // Check Authentication
    // ===============================

    if (!isAuthenticated || !user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }




    // ===============================
    // Check User Role
    // ===============================

    if (
        roles.length > 0 &&
        !roles.includes(user.role)
    ) {

        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );

    }




    // ===============================
    // Allow Nested Routes
    // ===============================

    return <Outlet />;

}