import { getInternshipMatch } from "../services/match.service.js";

export const getMatchScore = async (req, res) => {
  try {
    const result = await getInternshipMatch(
      req.user.id,
      req.params.internshipId,
    );

    res.status(200).json({
      success: true,
      match: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
