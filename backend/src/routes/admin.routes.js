import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware.js";

import { 
    getDashboard,
    getStudents,
    getStudentById
} from "../controllers/admin.controller.js";


const router = Router();



// Dashboard

router.get(
    "/dashboard",
    authenticate,
    getDashboard
);



// All Students

router.get(
    "/students",
    authenticate,
    getStudents
);



// Single Student Details

router.get(
    "/students/:id",
    authenticate,
    getStudentById
);



export default router;