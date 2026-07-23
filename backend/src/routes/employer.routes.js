import { Router } from "express";

import {
    getProfile,
    updateProfile,
    getEmployers
} from "../controllers/employer.controller.js";

import {
    authenticate
} from "../middleware/auth.middleware.js";

import {
    authorize
} from "../middleware/role.middleware.js";

const router = Router();


// ================= ADMIN =================

// Get all employers
router.get(
    "/",
    authenticate,
    authorize("ADMIN"),
    getEmployers
);


// ================= EMPLOYER =================

// Get own profile
router.get(
    "/profile",
    authenticate,
    authorize("EMPLOYER"),
    getProfile
);


// Update own profile
router.put(
    "/profile",
    authenticate,
    authorize("EMPLOYER"),
    updateProfile
);

export default router;