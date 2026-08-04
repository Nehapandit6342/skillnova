import { extractResumeText } from "../utils/resumeParser.js";
import { analyzeResume } from "../services/ai.service.js";
import { uploadResumeToCloudinary } from "../utils/cloudinaryUpload.js";
import {
  saveResumeAnalysis,
  getResumeAnalysis,
  getSkillGap,
  getCareerRoadmap,
  getRecommendedProjects,
  getResumeImprovements,
} from "../services/resume.service.js";
import { getLearningPlan } from "../services/learning.service.js";

export const analyzeResumeController = async (req, res, next) => {
  try {
    // Extract resume text
    const uploadResult = await uploadResumeToCloudinary(req.file);

    const resumeUrl = uploadResult.url;

    const resumeText = await extractResumeText(req.file);

    // Analyze with AI
    const aiResponse = await analyzeResume(resumeText);
    if (!aiResponse) {
      throw new Error("AI failed to analyze resume.");
    }

    let analysis;

    try {
      analysis = JSON.parse(aiResponse);
    } catch {
      throw new Error("AI returned invalid JSON.");
    }

    // Save to database
    await saveResumeAnalysis({
      userId: req.user.id,
      resumeUrl,
      resumeText,
      analysis,
      aiModel: "openai/gpt-oss-20b:free",
    });

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    next(error);
  }
};

// get resumeanalysis
export const getSavedResumeAnalysis = async (req, res, next) => {
  try {
    const analysis = await getResumeAnalysis(req.user.id);

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "No resume analysis found.",
      });
    }

    res.json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    next(error);
  }
};
// Re-Analyze Controller
export const reAnalyzeResumeController = async (req, res, next) => {
  try {
    const uploadResult = await uploadResumeToCloudinary(req.file);

    const resumeUrl = uploadResult.url;

    const resumeText = await extractResumeText(req.file);

    const aiResponse = await analyzeResume(resumeText);

    if (!aiResponse) {
      throw new Error("AI failed to analyze resume.");
    }

    let analysis;

    try {
      analysis = JSON.parse(aiResponse);
    } catch {
      throw new Error("AI returned invalid JSON.");
    }

    await saveResumeAnalysis({
      userId: req.user.id,
      resumeUrl,
      resumeText,
      analysis,
      aiModel: "openai/gpt-oss-20b:free",
    });

    res.json({
      success: true,
      message: "Resume re-analyzed successfully.",
      analysis,
    });
  } catch (error) {
    next(error);
  }
};

//getSkillGapController
export const getSkillGapController = async (req, res, next) => {
  try {
    const skillGap = await getSkillGap(req.user.id);

    res.json({
      success: true,
      skillGap,
    });
  } catch (error) {
    next(error);
  }
};

//getCareerRoadmapController
export const getCareerRoadmapController = async (req, res, next) => {
  try {
    const roadmap = await getCareerRoadmap(req.user.id);

    res.json({
      success: true,
      careerRoadmap: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

// getrecommendedprojectsController
export const getRecommendedProjectsController = async (req, res, next) => {
  try {
    const projects = await getRecommendedProjects(req.user.id);

    res.json({
      success: true,
      recommendedProjects: projects,
    });
  } catch (error) {
    next(error);
  }
};
export const getResumeImprovementsController = async (req, res, next) => {
  try {
    const improvements = await getResumeImprovements(req.user.id);

    res.json({
      success: true,
      improvementSuggestions: improvements,
    });
  } catch (error) {
    next(error);
  }
};
export const getLearningPlanController = async (req, res, next) => {
  try {
    const learningPlan = await getLearningPlan(req.user.id);

    res.json({
      success: true,
      learningPlan,
    });
  } catch (error) {
    next(error);
  }
};
