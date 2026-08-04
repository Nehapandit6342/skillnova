import prisma from "../config/prisma.js";

export const getLearningPlan = async (userId) => {
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

  return student.resumeAnalysis.learningPlan;
};
