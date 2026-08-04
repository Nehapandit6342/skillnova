import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import { getRecommendedInternshipsController } from "../controllers/recommendation.controller.js";

const router = express.Router();

router.get(
  "/recommended-internships",
  authenticate,
  getRecommendedInternshipsController,
);

export default router;
