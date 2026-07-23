import {
  createInternshipService,
  getAllInternshipsService,
  getInternshipByIdService,
  updateInternshipService,
  deleteInternshipService,
} from "../services/internship.service.js";

// Create Internship
export const createInternship = async (req, res) => {
  try {
    const internship = await createInternshipService(req.body);

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

// Get All Internships
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

// Get Internship By ID
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

// Update Internship
export const updateInternship = async (req, res) => {
  try {
    const internship = await updateInternshipService(
      req.params.id,
      req.body
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

// Delete Internship
export const deleteInternship = async (req, res) => {
  try {
    await deleteInternshipService(req.params.id);

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