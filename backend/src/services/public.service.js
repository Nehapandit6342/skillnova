import prisma from "../config/prisma.js";

export const getHomeDataService = async () => {
  const [totalStudents, totalEmployers, totalInternships, totalApplications] =
    await Promise.all([
      prisma.studentProfile.count(),
      prisma.employerProfile.count(),
      prisma.internship.count(),
      prisma.application.count(),
    ]);

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

  const testimonials = await prisma.testimonial.findMany({
    where: {
      isActive: true,
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

  // FAQ DATA
  const faqs = await prisma.faqs.findMany({
    where: {
      isActive: true,
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

  // TECHNOLOGIES TEMP DATA
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Prisma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },

    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

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

    faqs,

    technologies,
  };
};
