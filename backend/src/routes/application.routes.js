import express from "express";

import upload from "../middleware/upload.middleware.js";

import {
    createApplication,
    getStudentApplications,
    getEmployerApplications,
    updateApplicationStatus,
    getAllApplications,
} from "../controllers/application.controller.js";


import { authenticate } from "../middleware/auth.middleware.js";

import { authorize } from "../middleware/role.middleware.js";


const router = express.Router();



// ==================================================
// STUDENT APPLICATION
// ==================================================


// Apply Internship

router.post(

    "/",

    authenticate,

    authorize("STUDENT"),

    upload.single("resume"),

    createApplication

);




// Student Applications

router.get(

    "/my",

    authenticate,

    authorize("STUDENT"),

    getStudentApplications

);




// ==================================================
// EMPLOYER APPLICATION MANAGEMENT
// ==================================================


// View applicants

router.get(

    "/employer",

    authenticate,

    authorize("EMPLOYER"),

    getEmployerApplications

);



// Update application status

router.patch(

    "/:id/status",

    authenticate,

    authorize("EMPLOYER"),

    updateApplicationStatus

);




// ==================================================
// ADMIN
// ==================================================


router.get(

    "/",

    authenticate,

    authorize("ADMIN"),

    getAllApplications

);



export default router;