import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import {
  getCareerPreferences,
  updateCareerPreferences,
} from "../controllers/career.controller.js";

const router = express.Router();

// =====================================
// GET CAREER PREFERENCES
// =====================================

router.get("/preferences", authenticate, getCareerPreferences);

// =====================================
// UPDATE CAREER PREFERENCES
// =====================================

router.put("/preferences", authenticate, updateCareerPreferences);

export default router;
