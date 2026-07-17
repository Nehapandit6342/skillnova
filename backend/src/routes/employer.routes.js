import { Router } from "express";

import {
    getProfile,
    updateProfile
} from "../controllers/employer.controller.js";


import {
    authenticate
} from "../middleware/auth.middleware.js";


import {
    authorize
} from "../middleware/role.middleware.js";



const router = Router();





router.get(

    "/profile",

    authenticate,

    authorize("EMPLOYER"),

    getProfile

);





router.put(

    "/profile",

    authenticate,

    authorize("EMPLOYER"),

    updateProfile

);





export default router;