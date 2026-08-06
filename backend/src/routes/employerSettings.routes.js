import express from "express";

import {
    getEmployerSettings,
    updateEmployerSettings
} from "../controllers/employerSettings.controller.js";


import {
    authenticate
} from "../middleware/auth.middleware.js";


const router = express.Router();



// GET EMPLOYER SETTINGS
router.get(
    "/",
    authenticate,
    getEmployerSettings
);



// UPDATE EMPLOYER SETTINGS
router.put(
    "/",
    authenticate,
    updateEmployerSettings
);



export default router;