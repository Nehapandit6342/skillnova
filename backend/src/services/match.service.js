import prisma from "../config/prisma.js";

const normalize = (skill) => skill.trim().toLowerCase();

export const getInternshipMatch = async (userId, internshipId) => {
  // Student
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

  // Internship
  const internship = await prisma.internship.findUnique({
    where: {
      id: internshipId,
    },
    include: {
      employer: {
        select: {
          companyName: true,
        },
      },
    },
  });

  if (!internship) {
    throw new Error("Internship not found.");
  }

  const studentSkills = student.skills || [];

  const missingSkills = student.resumeAnalysis?.missingSkills || [];

  const allSkills = [
    ...new Set([...studentSkills, ...missingSkills].map(normalize)),
  ];

  const requiredSkills = internship.requiredSkills?.map(normalize) || [];

  const matchedSkills = requiredSkills.filter((skill) =>
    allSkills.includes(skill),
  );

  const unmatchedSkills = requiredSkills.filter(
    (skill) => !allSkills.includes(skill),
  );

  const matchScore =
    requiredSkills.length === 0
      ? 0
      : Math.round((matchedSkills.length / requiredSkills.length) * 100);

  let recommendation = "";

  if (matchScore >= 80) {
    recommendation = "Excellent match! You should definitely apply.";
  } else if (matchScore >= 60) {
    recommendation = "Good match. Learn the remaining skills before applying.";
  } else if (matchScore >= 40) {
    recommendation =
      "Average match. Strengthen your skills to improve your chances.";
  } else {
    recommendation = "Low match. Focus on learning the missing skills first.";
  }

  return {
    internship: internship.title,
    company: internship.employer.companyName,
    matchScore,
    matchedSkills,
    missingSkills: unmatchedSkills,
    recommendation,
  };
};
