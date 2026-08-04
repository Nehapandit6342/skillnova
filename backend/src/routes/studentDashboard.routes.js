import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import { getStudentDashboardStatsController } from "../controllers/studentDashboard.controller.js";

const router = express.Router();

router.get("/stats", authenticate, getStudentDashboardStatsController);

export default router;
