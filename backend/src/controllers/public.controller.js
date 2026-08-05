import prisma from "../config/prisma.js";

// Static technology showcase (branded as the stack behind SkillNova)
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
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

// ================= GET PUBLIC HOME DATA =================

export const getHomeData = async (req, res) => {
  try {
    const [
      totalStudents,
      totalEmployers,
      totalInternships,
      totalApplications,
      latestInternships,
    ] = await Promise.all([
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.user.count({ where: { role: "EMPLOYER" } }),
      prisma.internship.count({ where: { isActive: true } }),
      prisma.application.count(),
      prisma.internship.findMany({
        where: { isActive: true },
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
        orderBy: { createdAt: "desc" },
        take: 6,
      }),
    ]);

    return res.json({
      success: true,
      data: {
        stats: {
          totalStudents,
          totalEmployers,
          totalInternships,
          totalApplications,
        },
        latestInternships,
        technologies,
      },
    });
  } catch (error) {
    console.error("getHomeData error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load home data",
    });
  }
};
