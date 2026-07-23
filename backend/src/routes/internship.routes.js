import express from "express";
import {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from "../controllers/internship.controller.js";

const router = express.Router();

// Create Internship
router.post("/", createInternship);

// Get All Internships
router.get("/", getAllInternships);

// Get Internship By ID
router.get("/:id", getInternshipById);

// Update Internship
router.put("/:id", updateInternship);

// Delete Internship
router.delete("/:id", deleteInternship);

export default router;