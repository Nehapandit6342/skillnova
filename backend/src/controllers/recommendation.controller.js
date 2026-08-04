import { getRecommendedInternships } from "../services/recommendation.service.js";

export const getRecommendedInternshipsController = async (req, res, next) => {
  try {
    const recommendedInternships = await getRecommendedInternships(req.user.id);

    res.status(200).json({
      success: true,
      recommendedInternships,
    });
  } catch (error) {
    next(error);
  }
};
