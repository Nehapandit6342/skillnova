console.log("Student routes loaded");
console.log("✅ student.routes.js loaded");
import express from "express";

import {
  getProfile,
  updateProfile,
} from "../controllers/student.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
const router = express.Router();

router.get("/profile", authenticate, authorize("STUDENT"), getProfile);

router.put("/profile", authenticate, authorize("STUDENT"), updateProfile);

export default router;
