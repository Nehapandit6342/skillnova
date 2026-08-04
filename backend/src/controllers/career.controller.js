import {
  getCareerPreferencesService,
  updateCareerPreferencesService,
} from "../services/career.service.js";

// =====================================
// GET CAREER PREFERENCES
// =====================================

export const getCareerPreferences = async (req, res) => {
  try {
    const preferences = await getCareerPreferencesService(req.user.id);

    res.status(200).json({
      success: true,
      preferences,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// UPDATE CAREER PREFERENCES
// =====================================

export const updateCareerPreferences = async (req, res) => {
  try {
    const preferences = await updateCareerPreferencesService(
      req.user.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Career preferences updated successfully.",
      preferences,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
