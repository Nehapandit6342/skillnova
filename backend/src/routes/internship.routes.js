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





// ==================================================
// PUBLIC ROUTES
// ==================================================


// Get all internships

router.get(
    "/",
    getAllInternships
);

// Latest internships for homepage

router.get(
    "/latest",
    getLatestInternships
);


// Get single internship details

router.get(
    "/:id",
    getInternshipById
);








// ==================================================
// EMPLOYER ROUTES
// ==================================================


// Create internship

router.post(

    "/",

    authenticate,

    authorize("EMPLOYER"),

    createEmployerInternship

);







// Get employer's internships

router.get(

    "/my",

    authenticate,

    authorize("EMPLOYER"),

    getMyInternships

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






export default router;