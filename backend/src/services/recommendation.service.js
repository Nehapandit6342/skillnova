import prisma from "../config/prisma.js";

const normalize = (skill) => skill.trim().toLowerCase();

export const getRecommendedInternships = async (userId) => {
  // Get student profile + resume analysis
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

  // Student Skills
  const currentSkills = student.skills || [];

  // AI Missing Skills
  const missingSkills = student.resumeAnalysis.missingSkills || [];

  // Merge + remove duplicates
  const allSkills = [
    ...new Set([...currentSkills, ...missingSkills].map(normalize)),
  ];

  // Fetch active internships
  const internships = await prisma.internship.findMany({
    where: {
      isActive: true,
    },
    include: {
      employer: {
        select: {
          id: true,
          companyName: true,
          industry: true,
          location: true,
        },
      },
    },
  });

  // Calculate Match Score
  const recommendations = internships
    .map((internship) => {
      const requiredSkills = internship.requiredSkills?.map(normalize) || [];

      const matchedSkills = requiredSkills.filter((skill) =>
        allSkills.includes(skill),
      );

      const matchScore =
        requiredSkills.length === 0
          ? 0
          : Math.round((matchedSkills.length / requiredSkills.length) * 100);

      return {
        id: internship.id,
        title: internship.title,
        company: internship.employer.companyName,
        industry: internship.employer.industry,
        location: internship.location,
        type: internship.type,
        stipend: internship.stipend,
        deadline: internship.deadline,
        requiredSkills: internship.requiredSkills,
        matchedSkills,
        matchScore,
      };
    })

    // Keep only internships having at least one match
    .filter((internship) => internship.matchScore > 0)

    // Highest match first
    .sort((a, b) => b.matchScore - a.matchScore)

    // Top 5
    .slice(0, 5);
  console.log("Required Skills:", internships[0]?.requiredSkills);
  return recommendations;
};
