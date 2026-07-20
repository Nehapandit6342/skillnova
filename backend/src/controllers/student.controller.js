import * as studentService from "../services/student.service.js";
import { uploadImage } from "../services/upload.service.js";

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
    let imageUrl = null;

    if (req.file) {
      imageUrl = await uploadImage(req.file, "student-profiles");
    }

    const profile = await studentService.updateProfile(req.user.id, {
      ...req.body,
      profileImage: imageUrl,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};
