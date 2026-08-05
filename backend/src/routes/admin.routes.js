import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import {
  // Dashboard
  getDashboard,

  // Students
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,

  // Employers
  getAllEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,

  // Internships
  getAllInternships,
  getInternshipById,
  createInternship,
  updateInternship,
  deleteInternship,

  // Applications
  getAllApplications,
  updateApplication,
  deleteApplication,

  // Settings
  getAdminSettings,
  updateAdminSettings,

  // Testimonials
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  toggleTestimonial,

  // Companies
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  toggleCompany,

  // FAQs
  getFAQs,
  createFAQ,
  updateFAQ,
  deleteFAQ,
  toggleFAQ,

} from "../controllers/admin.controller.js";

const router = Router();

// ================= DASHBOARD =================

router.get("/dashboard", authenticate, getDashboard);

// ================= STUDENTS =================

router.get("/students", authenticate, getStudents);
router.post("/students", authenticate, createStudent);
router.get("/students/:id", authenticate, getStudentById);
router.put("/students/:id", authenticate, updateStudent);
router.delete("/students/:id", authenticate, deleteStudent);

// ================= EMPLOYERS =================

router.get("/employers", authenticate, getAllEmployers);
router.get("/employers/:id", authenticate, getEmployerById);
router.put("/employers/:id", authenticate, updateEmployer);
router.delete("/employers/:id", authenticate, deleteEmployer);

// ================= INTERNSHIPS =================

router.get("/internships", authenticate, getAllInternships);
router.post("/internships", authenticate, createInternship);
router.get("/internships/:id", authenticate, getInternshipById);
router.put("/internships/:id", authenticate, updateInternship);
router.delete("/internships/:id", authenticate, deleteInternship);

// ================= APPLICATIONS =================

router.get("/applications", authenticate, getAllApplications);
router.put("/applications/:id", authenticate, updateApplication);
router.delete("/applications/:id", authenticate, deleteApplication);

// ================= SETTINGS =================

router.get("/settings", authenticate, getAdminSettings);
router.put("/settings", authenticate, updateAdminSettings);

// ================= TESTIMONIALS =================

router.get("/testimonials", authenticate, getTestimonials);
router.post("/testimonials", authenticate, createTestimonial);
router.put("/testimonials/:id", authenticate, updateTestimonial);
router.delete("/testimonials/:id", authenticate, deleteTestimonial);
router.patch("/testimonials/:id/toggle", authenticate, toggleTestimonial);

// ================= COMPANIES =================

router.get("/companies", authenticate, getCompanies);
router.post("/companies", authenticate, createCompany);
router.put("/companies/:id", authenticate, updateCompany);
router.delete("/companies/:id", authenticate, deleteCompany);
router.patch("/companies/:id/toggle", authenticate, toggleCompany);

// ================= FAQ =================

router.get("/faqs", authenticate, getFAQs);
router.post("/faqs", authenticate, createFAQ);
router.put("/faqs/:id", authenticate, updateFAQ);
router.delete("/faqs/:id", authenticate, deleteFAQ);
router.patch("/faqs/:id/toggle", authenticate, toggleFAQ);

export default router;