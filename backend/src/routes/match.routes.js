import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { getMatchScore } from "../controllers/match.controller.js";

const router = express.Router();

router.get("/:internshipId", authenticate, getMatchScore);

export default router;
