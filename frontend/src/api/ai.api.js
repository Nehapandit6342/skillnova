import api from "./axios";

// Resume Analysis
export const getResumeAnalysis = async () => {
  const response = await api.get("/ai/resume-analysis");
  return response.data;
};

// Resume Improvements
export const getResumeImprovements = async () => {
  const response = await api.get("/ai/resume-improvements");
  return response.data;
};

// Skill Gap
export const getSkillGap = async () => {
  const response = await api.get("/ai/skill-gap");
  return response.data;
};

// Career Roadmap
export const getCareerRoadmap = async () => {
  const response = await api.get("/ai/career-roadmap");
  return response.data;
};

// Learning Plan
export const getLearningPlan = async () => {
  const response = await api.get("/ai/learning-plan");
  return response.data;
};

// Re-analyze Resume
export const reAnalyzeResume = async (formData) => {
  const response = await api.post("/ai/reanalyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
// Recommended Internships
export const getRecommendedInternships = async () => {
  const response = await api.get("/recommendation/recommended-internships");
  return response.data;
};
// Upload & Analyze Resume
export const analyzeResume = async (formData) => {
  const response = await api.post("/ai/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
