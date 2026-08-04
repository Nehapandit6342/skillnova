import express from "express";
import upload from "../middleware/upload.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

import {
  analyzeResumeController,
  getSavedResumeAnalysis,
  reAnalyzeResumeController,
  getSkillGapController,
  getCareerRoadmapController,
  getRecommendedProjectsController,
  getResumeImprovementsController,
  getLearningPlanController,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.post(
  "/analyze",
  authenticate,
  upload.single("resume"),
  analyzeResumeController,
);
router.get("/resume-analysis", authenticate, getSavedResumeAnalysis);

router.get("/skill-gap", authenticate, getSkillGapController);

router.get("/career-roadmap", authenticate, getCareerRoadmapController);
router.get(
  "/recommended-projects",
  authenticate,
  getRecommendedProjectsController,
);
router.get(
  "/resume-improvements",
  authenticate,
  getResumeImprovementsController,
);
router.get("/learning-plan", authenticate, getLearningPlanController);

router.post(
  "/reanalyze",
  authenticate,
  upload.single("resume"),
  reAnalyzeResumeController,
);

export default router;
