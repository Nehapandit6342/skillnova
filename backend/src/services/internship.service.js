import prisma from "../config/prisma.js";

// Create Internship
export const createInternshipService = async (data) => {
  return await prisma.internship.create({
    data,
  });
};

// Get All Internships
export const getAllInternshipsService = async () => {
  return await prisma.internship.findMany({
    include: {
      employer: {
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get Internship By ID
export const getInternshipByIdService = async (id) => {
  return await prisma.internship.findUnique({
    where: { id },
    include: {
      employer: {
        include: {
          user: true,
        },
      },
    },
  });
};

// Update Internship
export const updateInternshipService = async (id, data) => {
  return await prisma.internship.update({
    where: { id },
    data,
  });
};

// Delete Internship
export const deleteInternshipService = async (id) => {
  return await prisma.internship.delete({
    where: { id },
  });
};