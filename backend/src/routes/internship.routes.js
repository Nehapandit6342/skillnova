import express from "express";


import {
    createEmployerInternship,
    getAllInternships,
    getMyInternships,
    getInternshipById,
    updateInternship,
    deleteInternship,
    getLatestInternships

} from "../controllers/internship.controller.js";



import {
    authenticate
} from "../middleware/auth.middleware.js";



import {
    authorize
} from "../middleware/role.middleware.js";



const router = express.Router();




// ==========================================
// PUBLIC ROUTES
// ==========================================


// Homepage latest internships

router.get(

    "/latest",

    getLatestInternships

);




// All internships

router.get(

    "/",

    getAllInternships

);







// ==========================================
// EMPLOYER ROUTES
// ==========================================



// Employer internships

router.get(

    "/my",

    authenticate,

    authorize("EMPLOYER"),

    getMyInternships

);




// Create internship

router.post(

    "/",

    authenticate,

    authorize("EMPLOYER"),

    createEmployerInternship

);




// Update internship

router.put(

    "/:id",

    authenticate,

    authorize("EMPLOYER"),

    updateInternship

);




// Delete internship

router.delete(

    "/:id",

    authenticate,

    authorize("EMPLOYER"),

    deleteInternship

);






// ==========================================
// PUBLIC DETAILS
// ==========================================


router.get(

    "/:id",

    getInternshipById

);



export default router;