import prisma from "../config/prisma.js";

/**
 * Get logged-in student's profile
 */
export const getProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,

      isActive: true,
      studentProfile: {
        include: {
          resumeAnalysis: true,
          applications: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

/**
 * Update logged-in student's profile
 */

export const updateProfile = async (userId, data) => {
  const {
    name,
    profileImage,
    phone,
    location,
    dateOfBirth,
    bio,
    college,
    degree,
    semester,
    cgpa,
    careerGoal,
    preferredInternship,
    workMode,
    preferredLocation,
    preferredCompanySize,
    github,
    linkedin,
    portfolio,
    skills,
  } = data;

  // Update user table
  if (name !== undefined) {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    });
  }

  // Only include provided fields
  const studentData = {};

  Object.entries({
    profileImage,
    phone,
    location,
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
    bio,
    college,
    degree,
    semester:
      semester !== undefined && semester !== "" ? Number(semester) : undefined,
    cgpa: cgpa !== undefined && cgpa !== "" ? Number(cgpa) : undefined,
    careerGoal,
    preferredInternship,
    workMode,
    preferredLocation,
    preferredCompanySize,

    github,
    linkedin,
    portfolio,
    skills,
  }).forEach(([key, value]) => {
    if (value !== undefined) {
      studentData[key] = value;
    }
  });
  console.log(studentData.skills);
  console.log(typeof studentData.skills);
  await prisma.studentProfile.upsert({
    where: {
      userId,
    },
    update: studentData,
    create: {
      userId,
      ...studentData,
    },
  });

  return getProfile(userId);
};
export const getUpcomingDeadlinesService = async (userId) => {
  // Find the student's profile first
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  // Get applications with internship details
  const applications = await prisma.application.findMany({
    where: {
      studentId: student.id,
    },
    include: {
      internship: {
        include: {
          employer: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Keep only internships with future deadlines
  return applications
    .filter(
      (application) =>
        application.internship.deadline &&
        application.internship.deadline > new Date(),
    )
    .map((application) => ({
      id: application.id,
      internshipId: application.internship.id,
      role: application.internship.title,
      company: application.internship.employer.companyName,
      deadline: application.internship.deadline,
      status: application.status,
      location: application.internship.location,
      type: application.internship.type,
    }));
};
export const getCareerRoadmapService = async (userId) => {
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
    return [];
  }

  return student.resumeAnalysis.careerRoadmap || [];
};
