import { Router } from "express";


import {

    getProfile,

    updateProfile,

    getEmployers,

    getFeaturedCompanies,

    getDashboardStats,

    getApplicationTrendChart,

    getApplicationStatusChart


} from "../controllers/employer.controller.js";



import {
    authenticate
} from "../middleware/auth.middleware.js";


import {
    authorize
} from "../middleware/role.middleware.js";



const router = Router();




// =================================================
// PUBLIC HOMEPAGE ROUTES
// =================================================


router.get(

    "/featured",

    getFeaturedCompanies

);








// =================================================
// ADMIN ROUTES
// =================================================


router.get(

    "/",

    authenticate,

    authorize("ADMIN"),

    getEmployers

);









// =================================================
// EMPLOYER ROUTES
// =================================================


// Employer profile

router.get(

    "/profile",

    authenticate,

    authorize("EMPLOYER"),

    getProfile

);






// Update employer profile

router.put(

    "/profile",

    authenticate,

    authorize("EMPLOYER"),

    updateProfile

);










// =================================================
// EMPLOYER DASHBOARD
// =================================================


// Dashboard KPI Cards

router.get(

    "/dashboard/stats",

    authenticate,

    authorize("EMPLOYER"),

    getDashboardStats

);






// Application Trend Line Chart

router.get(

    "/dashboard/application-trend",

    authenticate,

    authorize("EMPLOYER"),

    getApplicationTrendChart

);






// Application Status Donut Chart

router.get(

    "/dashboard/application-status",

    authenticate,

    authorize("EMPLOYER"),

    getApplicationStatusChart

);






export default router;