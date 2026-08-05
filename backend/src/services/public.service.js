import prisma from "../config/prisma.js";

export const getHomeDataService = async () => {
  // Statistics
  const [
    totalStudents,
    totalEmployers,
    totalInternships,
    totalApplications,
  ] = await Promise.all([
    prisma.studentProfile.count(),
    prisma.employerProfile.count(),
    prisma.internship.count(),
    prisma.application.count(),
  ]);

  // Latest Internships
  const latestInternships = await prisma.internship.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      employer: {
        select: {
          companyName: true,
          logo: true,
        },
      },
    },
  });

  // Featured Companies
  const featuredCompanies = await prisma.employerProfile.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      companyName: true,
      logo: true,
      industry: true,
      location: true,
      website: true,
    },
  });

  // Testimonials
  const testimonials = await prisma.testimonial.findMany({
    where: {
      isActive: true,
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    stats: {
      totalStudents,
      totalEmployers,
      totalInternships,
      totalApplications,
    },

    latestInternships,

    featuredCompanies,

    testimonials,
  };
};