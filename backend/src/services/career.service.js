import prisma from "../config/prisma.js";

// =====================================
// GET CAREER PREFERENCES
// =====================================

export const getCareerPreferencesService = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    select: {
      careerGoal: true,
      preferredInternship: true,
      workMode: true,
      preferredLocation: true,
      preferredCompanySize: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  return student;
};

// =====================================
// UPDATE CAREER PREFERENCES
// =====================================

export const updateCareerPreferencesService = async (userId, data) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  return await prisma.studentProfile.update({
    where: {
      userId,
    },
    data: {
      careerGoal: data.careerGoal,
      preferredInternship: data.preferredInternship,
      workMode: data.workMode,
      preferredLocation: data.preferredLocation,
      preferredCompanySize: data.preferredCompanySize,
    },
    select: {
      careerGoal: true,
      preferredInternship: true,
      workMode: true,
      preferredLocation: true,
      preferredCompanySize: true,
    },
  });
};
