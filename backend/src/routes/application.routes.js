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



// =====================================
// STUDENT
// =====================================


// Apply Internship

router.post(
    "/",
    authenticate,
    authorize("STUDENT"),
    createApplication
);



// Student Application History

router.get(
    "/my",
    authenticate,
    authorize("STUDENT"),
    getStudentApplications
);





// =====================================
// EMPLOYER
// =====================================


// Received Applications

router.get(
    "/employer",
    authenticate,
    authorize("EMPLOYER"),
    getEmployerApplications
);



// Accept / Reject Application

router.patch(
    "/:id/status",
    authenticate,
    authorize("EMPLOYER"),
    updateApplicationStatus
);






// =====================================
// ADMIN
// =====================================


// Get All Applications

router.get(
    "/admin",
    authenticate,
    authorize("ADMIN"),
    getAllApplications
);





export default router;