import { Router } from "express";

import { getHomeData } from "../controllers/public.controller.js";

const router = Router();

// ==================================================
// PUBLIC ROUTES (no auth)
// ==================================================

// Homepage data: stats, latest internships, technologies

router.get("/home", getHomeData);

export default router;
