import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import {
    // Dashboard
    getDashboard,

    // Students
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,

    // Employers
    getAllEmployers,
    getEmployerById,
    updateEmployer,
    deleteEmployer,

    // Internships
    getAllInternships,
    getInternshipById,
    createInternship,
    updateInternship,
    deleteInternship,

    // Applications
    getAllApplications,
    updateApplication,
    deleteApplication,

    // Settings
    getAdminSettings,
    updateAdminSettings

} from "../controllers/admin.controller.js";

const router = Router();

// ================= DASHBOARD =================

router.get("/dashboard", authenticate, getDashboard);

// ================= STUDENTS =================

router.get("/students", authenticate, getStudents);
router.post("/students", authenticate, createStudent);
router.get("/students/:id", authenticate, getStudentById);
router.put("/students/:id", authenticate, updateStudent);
router.delete("/students/:id", authenticate, deleteStudent);

// ================= EMPLOYERS =================

router.get("/employers", authenticate, getAllEmployers);
router.get("/employers/:id", authenticate, getEmployerById);
router.put("/employers/:id", authenticate, updateEmployer);
router.delete("/employers/:id", authenticate, deleteEmployer);

// ================= INTERNSHIPS =================

router.get("/internships", authenticate, getAllInternships);
router.post("/internships", authenticate, createInternship);
router.get("/internships/:id", authenticate, getInternshipById);
router.put("/internships/:id", authenticate, updateInternship);
router.delete("/internships/:id", authenticate, deleteInternship);

// ================= APPLICATIONS =================

router.get("/applications", authenticate, getAllApplications);
router.put("/applications/:id", authenticate, updateApplication);
router.delete("/applications/:id", authenticate, deleteApplication);

// ================= SETTINGS =================

router.get("/settings", authenticate, getAdminSettings);
router.put("/settings", authenticate, updateAdminSettings);

export default router;