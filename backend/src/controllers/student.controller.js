import * as studentService from "../services/student.service.js";

import { uploadImage } from "../services/upload.service.js";
import {
  getUpcomingDeadlinesService,
  getCareerRoadmapService,
} from "../services/student.service.js";

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
    let imageUrl;

    if (req.file) {
      imageUrl = await uploadImage(req.file, "student-profiles");
    }

    const updateData = {
      ...req.body,
    };

    // Convert skills from JSON string back to array
    if (updateData.skills && typeof updateData.skills === "string") {
      try {
        updateData.skills = JSON.parse(updateData.skills);
      } catch {
        // If it's just one skill instead of JSON
        updateData.skills = [updateData.skills];
      }
    }

    // Only update profile image if a new image was uploaded
    if (imageUrl) {
      updateData.profileImage = imageUrl;
    }

    const profile = await studentService.updateProfile(req.user.id, updateData);

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

// getupcoming deadlines
export const getUpcomingDeadlines = async (req, res) => {
  try {
    const deadlines = await getUpcomingDeadlinesService(req.user.id);

    return res.status(200).json({
      success: true,
      deadlines,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch upcoming deadlines.",
    });
  }
};
export const getCareerRoadmap = async (req, res) => {
  try {
    const roadmap = await getCareerRoadmapService(req.user.id);

    return res.status(200).json({
      success: true,
      careerRoadmap: roadmap,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch career roadmap.",
    });
  }
};
