import prisma from "../config/prisma.js";

export const getTestimonialsService = async () => {

  return await prisma.testimonial.findMany({

    where: {
      isActive: true,
    },

    select: {
      id: true,
      name: true,
      designation: true,
      company: true,
      image: true,
      message: true,
      rating: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 6,

  });

};