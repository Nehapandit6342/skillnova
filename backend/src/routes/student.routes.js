import express from "express";

import {
  getProfile,
  updateProfile,
  getUpcomingDeadlines,
  getCareerRoadmap,
} from "../controllers/student.controller.js";
import { getRecentActivitiesController } from "../controllers/studentActivity.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();

router.get("/profile", authenticate, authorize("STUDENT"), getProfile);
router.get("/recent-activity", authenticate, getRecentActivitiesController);
router.get(
  "/upcoming-deadlines",
  authenticate,
  authorize("STUDENT"),
  getUpcomingDeadlines,
);
router.get(
  "/career-roadmap",
  authenticate,
  authorize("STUDENT"),
  getCareerRoadmap,
);

router.put(
  "/profile",
  authenticate,
  authorize("STUDENT"),
  upload.single("profileImage"),
  updateProfile,
);

export default router;
