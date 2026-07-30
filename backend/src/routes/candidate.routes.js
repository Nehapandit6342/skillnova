import express from "express";


import {
    getEmployerCandidates
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



router.get(

"/",

authenticate,

authorize("EMPLOYER"),

getEmployerCandidates

);



export default router;