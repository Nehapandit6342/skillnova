import { getRecentActivities } from "../services/studentActivity.service.js";

export const getRecentActivitiesController = async (req, res, next) => {
  try {
    const activities = await getRecentActivities(req.user.id);

    res.status(200).json({
      success: true,
      activities,
    });
  } catch (error) {
    next(error);
  }
};
