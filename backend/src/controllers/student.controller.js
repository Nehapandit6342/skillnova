import * as studentService from "../services/student.service.js";

export const getProfile = async (req, res, next) => {
  try {
    const profile = await studentService.getProfile(req.user.id);

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const profile = await studentService.updateProfile(req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};
