import prisma from "../config/prisma.js";

export const saveResumeAnalysis = async ({
  userId,
  resumeUrl,
  resumeText,
  analysis,
  aiModel,
}) => {
  // Find student profile
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  // Update student profile
  await prisma.studentProfile.update({
    where: {
      id: student.id,
    },
    data: {
      resumeUrl,
      resumeText,
      resumeUploadedAt: new Date(),
    },
  });

  // Upsert analysis
  return prisma.resumeAnalysis.upsert({
    where: {
      studentId: student.id,
    },
    update: {
      atsScore: analysis.atsScore,
      summary: analysis.summary,
      strengths: analysis.strengths,
      weaknesses: analysis.weaknesses,
      missingSkills: analysis.missingSkills,
      recommendedProjects: analysis.recommendedProjects,
      recommendedInternships: analysis.recommendedInternships,
      careerRoadmap: analysis.careerRoadmap,
      improvementSuggestions: analysis.improvementSuggestions,
      learningPlan: analysis.learningPlan,
      aiModel,
    },
    create: {
      studentId: student.id,
      atsScore: analysis.atsScore,
      summary: analysis.summary,
      strengths: analysis.strengths,
      weaknesses: analysis.weaknesses,
      missingSkills: analysis.missingSkills,
      recommendedProjects: analysis.recommendedProjects,
      recommendedInternships: analysis.recommendedInternships,
      careerRoadmap: analysis.careerRoadmap,
      improvementSuggestions: analysis.improvementSuggestions,
      learningPlan: analysis.learningPlan,
      aiModel,
    },
  });
};

export const getResumeAnalysis = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  return {
    resumeUrl: student.resumeUrl,
    resumeUploadedAt: student.resumeUploadedAt,
    analysis: student.resumeAnalysis,
  };
};
export const getSkillGap = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!student.resumeAnalysis) {
    throw new Error("Resume analysis not found.");
  }

  return {
    currentSkills: student.skills,
    missingSkills: student.resumeAnalysis.missingSkills,
    recommendedSkills: student.resumeAnalysis.missingSkills,
  };
};
export const getCareerRoadmap = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!student.resumeAnalysis) {
    throw new Error("Resume analysis not found.");
  }

  return student.resumeAnalysis.careerRoadmap;
};

export const getRecommendedProjects = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!student.resumeAnalysis) {
    throw new Error("Resume analysis not found.");
  }

  return student.resumeAnalysis.recommendedProjects;
};

export const getResumeImprovements = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!student.resumeAnalysis) {
    throw new Error("Resume analysis not found.");
  }

  return student.resumeAnalysis.improvementSuggestions;
};
