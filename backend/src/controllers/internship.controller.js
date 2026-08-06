import prisma from "../config/prisma.js";

import {
  createInternshipService,
  getAllInternshipsService,
  getInternshipByIdService,
  updateInternshipService,
  deleteInternshipService,
  createEmployerInternshipService,
  getEmployerInternshipsService,
  getLatestInternshipsService,
} from "../services/internship.service.js";

// ==================================================
// CREATE INTERNSHIP
// ==================================================

export const createInternship = async (req, res) => {
  try {
    const employer = await prisma.employerProfile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!employer) {
      return res.status(404).json({
        success: false,

        message: "Employer profile not found",
      });
    }

    const internship = await createInternshipService({
      ...req.body,

      employerId: employer.id,
    });

    res.status(201).json({
      success: true,

      message: "Internship created successfully",

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// EMPLOYER CREATE INTERNSHIP
// ==================================================

export const createEmployerInternship = async (req, res) => {
  try {
    const internship = await createEmployerInternshipService(
      req.user.id,

      req.body,
    );

    res.status(201).json({
      success: true,

      message: "Internship posted successfully",

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// GET MY INTERNSHIPS
// ==================================================

// ==================================================
// GET MY INTERNSHIPS
// ==================================================

export const getMyInternships = async (req, res) => {
  try {
    console.log("Employer User ID:", req.user.id);

    const internships = await getEmployerInternshipsService(req.user.id);

    res.status(200).json({
      success: true,

      data: internships,
    });
  } catch (error) {
    console.error("GET MY INTERNSHIPS ERROR:", error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// GET ALL INTERNSHIPS
// ==================================================

export const getAllInternships = async (req, res) => {
  try {
    const internships = await getAllInternshipsService();

    res.status(200).json({
      success: true,

      data: internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// GET INTERNSHIP BY ID
// ==================================================

export const getInternshipById = async (req, res) => {
  try {
    const internship = await getInternshipByIdService(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,

        message: "Internship not found",
      });
    }

    res.status(200).json({
      success: true,

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// UPDATE INTERNSHIP
// ==================================================

export const updateInternship = async (req, res) => {
  try {
    const internship = await updateInternshipService(
      req.user.id,

      req.params.id,

      req.body,
    );

    res.status(200).json({
      success: true,

      message: "Internship updated successfully",

      data: internship,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==================================================
// DELETE INTERNSHIP
// ==================================================

export const deleteInternship = async (req, res) => {
  try {
    await deleteInternshipService(
      req.user.id,

      req.params.id,
    );

    res.status(200).json({
      success: true,

      message: "Internship deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
// ==================================================
// GET LATEST INTERNSHIPS (HOMEPAGE)
// ==================================================

export const getLatestInternships = async (req, res) => {
  try {
    const internships = await getLatestInternshipsService();

    return res.status(200).json({
      success: true,

      data: internships,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
