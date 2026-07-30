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
