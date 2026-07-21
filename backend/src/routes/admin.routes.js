import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware.js";

import {
    getDashboard,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    createStudent
} from "../controllers/admin.controller.js";

const router = Router();


// ================= DASHBOARD =================

router.get(
    "/dashboard",
    authenticate,
    getDashboard
);


// ================= GET ALL STUDENTS =================

router.get(
    "/students",
    authenticate,
    getStudents
);


// ================= CREATE STUDENT =================

router.post(
    "/students",
    authenticate,
    createStudent
);


// ================= GET STUDENT BY ID =================

router.get(
    "/students/:id",
    authenticate,
    getStudentById
);


// ================= UPDATE STUDENT =================

router.put(
    "/students/:id",
    authenticate,
    updateStudent
);


// ================= DELETE STUDENT =================

router.delete(
    "/students/:id",
    authenticate,
    deleteStudent
);

export default router;