import prisma from "../config/prisma.js";

export const getStudentDashboardStats = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
      applications: true,
    },
  });

  if (!student) {
    const error = new Error("Student profile not found.");
    error.statusCode = 404;
    throw error;
  }

  // -----------------------
  // Resume Score
  // -----------------------

  const resumeScore = student.resumeAnalysis?.atsScore ?? 0;

  // -----------------------
  // Learning Plan
  // -----------------------

  const learningTasks = student.resumeAnalysis?.learningPlan?.length ?? 0;

  // -----------------------
  // Recommended Internships
  // -----------------------

  const recommendedInternships =
    student.resumeAnalysis?.recommendedInternships?.length ?? 0;

  // -----------------------
  // Applications
  // -----------------------

  const applications = student.applications.length;

  // -----------------------
  // Profile Completion
  // -----------------------

  const profileFields = [
    student.profileImage,
    student.resumeUrl,
    student.phone,
    student.location,
    student.dateOfBirth,
    student.bio,
    student.college,
    student.degree,
    student.semester,
    student.cgpa,
    student.github,
    student.linkedin,
    student.portfolio,
    student.careerGoal,
    student.preferredInternship,
    student.workMode,
    student.preferredLocation,
    student.preferredCompanySize,
    student.skills.length > 0,
  ];

  const completedFields = profileFields.filter(Boolean).length;

  const profileCompletion = Math.round(
    (completedFields / profileFields.length) * 100,
  );

  return {
    resumeScore,
    profileCompletion,
    learningTasks,
    recommendedInternships,
    applications,
  };
};
