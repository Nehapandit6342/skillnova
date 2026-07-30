import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware.js";

import {

    getAllInternships,
    getInternshipById,
    createInternship,
    updateInternship,
    deleteInternship

} from "../controllers/internship.controller.js";

const router = Router();


// ================= GET ALL =================

router.get(
    "/",
    authenticate,
    getAllInternships
);


// ================= GET BY ID =================

router.get(
    "/:id",
    authenticate,
    getInternshipById
);


// ================= CREATE =================

router.post(
    "/",
    authenticate,
    createInternship
);


// ================= UPDATE =================

router.put(
    "/:id",
    authenticate,
    updateInternship
);


// ================= DELETE =================

router.delete(
    "/:id",
    authenticate,
    deleteInternship
);

export default router;