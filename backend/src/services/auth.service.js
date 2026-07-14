import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";

export const registerUser = async (data) => {
  const {
    name,
    email,
    password,
    role,
    college,
    degree,
    careerGoal,
    companyName,
    industry,
    website,
  } = data;

  // Check if email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    const error = new Error("User with this email already exists");
    error.statusCode = 409;
    throw error;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user and profile together
  const user = await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    if (role === "STUDENT") {
      await tx.studentProfile.create({
        data: {
          userId: newUser.id,
          college,
          degree,
          careerGoal,
        },
      });
    }

    if (role === "EMPLOYER") {
      await tx.employerProfile.create({
        data: {
          userId: newUser.id,
          companyName,
          industry,
          website: website || null,
        },
      });
    }

    return newUser;
  });

  // Never return password
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
    createdAt: user.createdAt,
  };
};