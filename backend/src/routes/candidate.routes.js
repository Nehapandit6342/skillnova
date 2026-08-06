import express from "express";


import {
    getEmployerCandidates,
    getCandidateDetails
}
from "../controllers/candidate.controller.js";


import {
    authenticate
}
from "../middleware/auth.middleware.js";


import {
    authorize
}
from "../middleware/role.middleware.js";


const router = express.Router();




// =================================
// GET ALL EMPLOYER CANDIDATES
// =================================

router.get(

    "/",

    authenticate,

    authorize("EMPLOYER"),

    getEmployerCandidates

);




// =================================
// GET SINGLE CANDIDATE DETAILS
// =================================

router.get(

    "/:id",

    authenticate,

    authorize("EMPLOYER"),

    getCandidateDetails

);



export default router;