import express from "express";

import {
  getProfile,
  updateProfile,
} from "../controllers/student.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();

router.get("/profile", authenticate, authorize("STUDENT"), getProfile);

router.put(
  "/profile",
  authenticate,
  authorize("STUDENT"),
  upload.single("profileImage"),
  updateProfile,
);

export default router;
