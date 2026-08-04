import { getStudentDashboardStats } from "../services/studentDashboard.service.js";

export const getStudentDashboardStatsController = async (req, res, next) => {
  try {
    const stats = await getStudentDashboardStats(req.user.id);

    res.status(200).json({
      success: true,
      stats,
    });
  } catch (error) {
    next(error);
  }
};
