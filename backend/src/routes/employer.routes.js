import { Router } from "express";

import {
    getProfile,
    updateProfile,
    getEmployers,
        getFeaturedCompanies

} from "../controllers/employer.controller.js";
import {
    getDashboardStats
} from "../controllers/dashboard.controller.js";

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


// Get featured companies for homepage

router.get(
    "/featured",
    getFeaturedCompanies
);

// =================================================
// ADMIN ROUTES
// =================================================


// Get all employers

router.get(
    "/",
    authenticate,
    authorize("ADMIN"),
    getEmployers
);




// =================================================
// EMPLOYER ROUTES
// =================================================


// Get logged-in employer profile

router.get(
    "/profile",
    authenticate,
    authorize("EMPLOYER"),
    getProfile
);




// Update logged-in employer profile

router.put(
    "/profile",
    authenticate,
    authorize("EMPLOYER"),
    updateProfile
);
router.get(

"/dashboard",

authenticate,

authorize("EMPLOYER"),

getDashboardStats

);


export default router;