import { getHomeDataService } from "../services/public.service.js";

export const getHomeData = async (req, res) => {
  try {
    const data = await getHomeDataService();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("HOME API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};