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
      isEmailVerified: true,
      isActive: true,
      studentProfile: true,
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
    profileImage,
    phone,
    location,
    bio,
    college,
    degree,
    semester,
    cgpa,
    careerGoal,
    github,
    linkedin,
    portfolio,
    skills,
  } = data;

  await prisma.studentProfile.upsert({
    where: {
      userId,
    },
    update: {
      profileImage,
      phone,
      location,
      bio,
      college,
      degree,
      semester,
      cgpa,
      careerGoal,
      github,
      linkedin,
      portfolio,
      skills,
    },
    create: {
      userId,
      profileImage,
      phone,
      location,
      bio,
      college,
      degree,
      semester,
      cgpa,
      careerGoal,
      github,
      linkedin,
      portfolio,
      skills,
    },
  });

  return getProfile(userId);
};
