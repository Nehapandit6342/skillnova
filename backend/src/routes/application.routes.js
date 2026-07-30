import express from "express";


import {

    createApplication,

    getStudentApplications,

    getEmployerApplications,

    updateApplicationStatus

} from "../controllers/application.controller.js";


import {
    authenticate
} from "../middleware/auth.middleware.js";


import {
    authorize
} from "../middleware/role.middleware.js";



const router = express.Router();




// ================= STUDENT =================


// Apply internship

router.post(
    "/",
    authenticate,
    authorize("STUDENT"),
    createApplication
);




// Student application history

router.get(
    "/my",
    authenticate,
    authorize("STUDENT"),
    getStudentApplications
);






// ================= EMPLOYER =================


// View received applications

router.get(
    "/employer",
    authenticate,
    authorize("EMPLOYER"),
    getEmployerApplications
);




// Accept / Reject

router.patch(
    "/:id/status",
    authenticate,
    authorize("EMPLOYER"),
    updateApplicationStatus
);



export default router;