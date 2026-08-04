import express from "express";


import {

    createApplication,

    getStudentApplications,

    getEmployerApplications,

    updateApplicationStatus,

    getAllApplications

} from "../controllers/application.controller.js";



import {

    authenticate

} from "../middleware/auth.middleware.js";



import {

    authorize

} from "../middleware/role.middleware.js";



const router = express.Router();







// ==================================================
// STUDENT APPLICATION
// ==================================================



// Apply for Internship

router.post(

    "/",

    authenticate,

    authorize("STUDENT"),

    createApplication

);






// Get My Applications

router.get(

    "/my",

    authenticate,

    authorize("STUDENT"),

    getStudentApplications

);









// ==================================================
// EMPLOYER APPLICATION MANAGEMENT
// ==================================================




// View applicants for employer internships

router.get(

    "/employer",

    authenticate,

    authorize("EMPLOYER"),

    getEmployerApplications

);







// Update application status
// ACCEPTED / REJECTED / REVIEWING


router.patch(

    "/:id/status",

    authenticate,

    authorize("EMPLOYER"),

    updateApplicationStatus

);









// ==================================================
// ADMIN
// ==================================================



// Get all applications


router.get(

    "/",

    authenticate,

    authorize("ADMIN"),

    getAllApplications

);






export default router;