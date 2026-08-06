import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";

// =================================================
// DASHBOARD
// =================================================

export const dashboardService = async () => {

  const [
    totalStudents,
    totalEmployers,
    totalInternships,
    totalApplications,
    pendingApplications,
    acceptedApplications,
    rejectedApplications,
  ] = await Promise.all([

    prisma.user.count({
      where: {
        role: "STUDENT",
      },
    }),

    prisma.user.count({
      where: {
        role: "EMPLOYER",
      },
    }),

    prisma.internship.count(),

    prisma.application.count(),

    prisma.application.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.application.count({
      where: {
        status: "APPROVED",
      },
    }),

    prisma.application.count({
      where: {
        status: "REJECTED",
      },
    }),

  ]);

  const recentStudents = await prisma.user.findMany({

    where: {
      role: "STUDENT",
    },

    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 5,

  });

  const recentInternships = await prisma.internship.findMany({

    take: 5,

    orderBy: {
      createdAt: "desc",
    },

    include: {

      employer: {

        select: {
          id: true,
          companyName: true,
        },

      },

      _count: {

        select: {
          applications: true,
        },

      },

    },

  });

  const recentApplications = await prisma.application.findMany({

    take: 5,

    orderBy: {
      appliedAt: "desc",
    },

    include: {

      student: {

        include: {

          user: {

            select: {
              name: true,
              email: true,
            },

          },

        },

      },

      internship: {

        include: {

          employer: {

            select: {
              companyName: true,
            },

          },

        },

      },

    },

  });

  return {

    totalStudents,
    totalEmployers,
    totalInternships,

    totalApplications,
    pendingApplications,
    acceptedApplications,
    rejectedApplications,

    recentStudents,
    recentInternships,
    recentApplications,

  };

};
// =================================================
// STUDENTS
// =================================================

// GET ALL STUDENTS

export const getAllStudentsService = async () => {

  return await prisma.user.findMany({

    where: {
      role: "STUDENT",
    },

    select: {

      id: true,
      name: true,
      email: true,
      isActive: true,
      createdAt: true,

      studentProfile: {

        select: {

          profileImage: true,
          college: true,
          degree: true,
          semester: true,
          cgpa: true,
          skills: true,
          careerGoal: true,

        },

      },

    },

    orderBy: {
      createdAt: "desc",
    },

  });

};

// GET STUDENT BY ID

export const getStudentByIdService = async (id) => {

  return await prisma.user.findUnique({

    where: {
      id,
    },

    include: {
      studentProfile: true,
    },

  });

};

// CREATE STUDENT

export const createStudentService = async (data) => {

  return await prisma.user.create({

    data: {

      name: data.name,
      email: data.email,
      password: data.password,
      role: "STUDENT",

      studentProfile: {

        create: {

          profileImage: data.profileImage || null,
          college: data.college,
          degree: data.degree,
          semester: data.semester,
          cgpa: data.cgpa,
          bio: data.bio,
          careerGoal: data.careerGoal,
          skills: data.skills || [],

        },

      },

    },

    include: {
      studentProfile: true,
    },

  });

};

// UPDATE STUDENT

export const updateStudentService = async (id, data) => {

  return await prisma.user.update({

    where: {
      id,
    },

    data: {

      name: data.name,
      email: data.email,
      isActive: data.isActive,

      studentProfile: {

        update: {

          profileImage: data.profileImage,
          college: data.college,
          degree: data.degree,
          semester: data.semester,
          cgpa: data.cgpa,
          bio: data.bio,
          careerGoal: data.careerGoal,
          skills: data.skills || [],

        },

      },

    },

    include: {
      studentProfile: true,
    },

  });

};

// DELETE STUDENT

export const deleteStudentService = async (id) => {

  await prisma.user.delete({

    where: {
      id,
    },

  });

  return true;

};
// =================================================
// EMPLOYERS
// =================================================

// GET ALL EMPLOYERS

export const getAllEmployersService = async () => {

  return await prisma.employerProfile.findMany({

    include: {

      user: {

        select: {
          id: true,
          name: true,
          email: true,
          isActive: true,
          createdAt: true,
        },

      },

      _count: {

        select: {
          internships: true,
        },

      },

    },

    orderBy: {
      createdAt: "desc",
    },

  });

};

// GET EMPLOYER BY ID

export const getEmployerByIdService = async (id) => {

  return await prisma.employerProfile.findUnique({

    where: {
      id,
    },

    include: {

      user: {

        select: {
          id: true,
          name: true,
          email: true,
          isActive: true,
          createdAt: true,
        },

      },

      internships: {

        include: {

          _count: {

            select: {
              applications: true,
            },

          },

        },

        orderBy: {
          createdAt: "desc",
        },

      },

    },

  });

};

// UPDATE EMPLOYER

export const updateEmployerService = async (id, data) => {

  return await prisma.employerProfile.update({

    where: {
      id,
    },

    data: {

      logo: data.logo,
      companyName: data.companyName,
      website: data.website,
      industry: data.industry,
      location: data.location,
      description: data.description,
      companySize: data.companySize,
      foundedYear: data.foundedYear,

    },

    include: {
      user: true,
    },

  });

};

// DELETE EMPLOYER

export const deleteEmployerService = async (id) => {

  await prisma.employerProfile.delete({

    where: {
      id,
    },

  });

  return true;

};

// =================================================
// INTERNSHIPS
// =================================================

// GET ALL INTERNSHIPS

export const getAllInternshipsService = async () => {

  return await prisma.internship.findMany({

    include: {

      employer: {

        select: {
          id: true,
          companyName: true,
          industry: true,
          location: true,
        },

      },

      _count: {

        select: {
          applications: true,
        },

      },

    },

    orderBy: {
      createdAt: "desc",
    },

  });

};

// COUNT INTERNSHIPS

export const countInternshipsService = async () => {

  return await prisma.internship.count();

};

// GET INTERNSHIP BY ID

export const getInternshipByIdService = async (id) => {

  return await prisma.internship.findUnique({

    where: {
      id,
    },

    include: {

      employer: {

        select: {
          id: true,
          companyName: true,
          industry: true,
          location: true,
          website: true,
          description: true,
        },

      },

      applications: {

        include: {

          student: {

            include: {

              user: {

                select: {
                  id: true,
                  name: true,
                  email: true,
                },

              },

            },

          },

        },

        orderBy: {
          appliedAt: "desc",
        },

      },

    },

  });

};

// UPDATE INTERNSHIP

export const updateInternshipService = async (id, data) => {

  return await prisma.internship.update({

    where: {
      id,
    },

    data: {

      title: data.title,
      description: data.description,
      location: data.location,
      type: data.type,
      stipend: data.stipend,
      deadline: data.deadline
        ? new Date(data.deadline)
        : null,
      employerId: data.employerId,
      isActive: data.isActive,

    },

    include: {
      employer: true,
    },

  });

};

// CREATE INTERNSHIP

export const createInternshipService = async (data) => {

  return await prisma.internship.create({

    data: {

      title: data.title,
      description: data.description,
      location: data.location,
      type: data.type,
      stipend: data.stipend,
      deadline: data.deadline
        ? new Date(data.deadline)
        : null,
      employerId: data.employerId,
      isActive: true,

    },

    include: {
      employer: true,
    },

  });

};

// DELETE INTERNSHIP

export const deleteInternshipService = async (id) => {

  await prisma.internship.delete({

    where: {
      id,
    },

  });

  return true;

};
// =================================================
// APPLICATIONS
// =================================================

// GET ALL APPLICATIONS

export const getAllApplicationsService = async () => {

  return await prisma.application.findMany({

    include: {

      student: {

        include: {

          user: {

            select: {
              id: true,
              name: true,
              email: true,
            },

          },

        },

      },

      internship: {

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

      },

    },

    orderBy: {
      appliedAt: "desc",
    },

  });

};

// GET APPLICATION BY ID

export const getApplicationByIdService = async (id) => {

  return await prisma.application.findUnique({

    where: {
      id,
    },

    include: {

      student: {
        include: {
          user: true,
        },
      },

      internship: {
        include: {
          employer: true,
        },
      },

    },

  });

};

// UPDATE APPLICATION STATUS

export const updateApplicationService = async (id, data) => {

  return await prisma.application.update({

    where: {
      id,
    },

    data: {
      status: data.status,
    },

    include: {

      student: {
        include: {
          user: true,
        },
      },

      internship: {
        include: {
          employer: true,
        },
      },

    },

  });

};

// DELETE APPLICATION

export const deleteApplicationService = async (id) => {

  await prisma.application.delete({

    where: {
      id,
    },

  });

  return true;

};

// =================================================
// ADMIN SETTINGS
// =================================================

// GET ADMIN SETTINGS

export const getAdminSettingsService = async (id) => {

  return await prisma.user.findUnique({

    where: {
      id,
    },

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },

  });

};

// UPDATE ADMIN SETTINGS

export const updateAdminSettingsService = async (id, data) => {

  const updateData = {
    name: data.name,
    email: data.email,
  };

  if (data.password && data.password.trim() !== "") {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  return await prisma.user.update({

    where: {
      id,
    },

    data: updateData,

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },

  });

};

// =================================================
// TESTIMONIALS
// =================================================

export const getTestimonialsService = async () => {

  return await prisma.testimonial.findMany({

    orderBy: {
      createdAt: "desc",
    },

  });

};

export const createTestimonialService = async (data) => {

  return await prisma.testimonial.create({

    data,

  });

};

export const updateTestimonialService = async (id, data) => {

  return await prisma.testimonial.update({

    where: {
      id,
    },

    data,

  });

};

export const deleteTestimonialService = async (id) => {

  return await prisma.testimonial.delete({

    where: {
      id,
    },

  });

};

export const toggleTestimonialService = async (id) => {

  const testimonial = await prisma.testimonial.findUnique({

    where: {
      id,
    },

  });

  return await prisma.testimonial.update({

    where: {
      id,
    },

    data: {
      isActive: !testimonial.isActive,
    },

  });

};
// =================================================
// COMPANIES
// =================================================

export const getCompaniesService = async () => {

  return await prisma.company.findMany({

    orderBy: {
      createdAt: "desc",
    },

  });

};

export const createCompanyService = async (data) => {

  return await prisma.company.create({

    data,

  });

};

export const updateCompanyService = async (id, data) => {

  return await prisma.company.update({

    where: {
      id,
    },

    data,

  });

};

export const deleteCompanyService = async (id) => {

  return await prisma.company.delete({

    where: {
      id,
    },

  });

};

export const toggleCompanyService = async (id) => {

  const company = await prisma.company.findUnique({

    where: {
      id,
    },

  });

  if (!company) {
    throw new Error("Company not found");
  }

  return await prisma.company.update({

    where: {
      id,
    },

    data: {
      isActive: !company.isActive,
    },

  });

};

// =================================================
// FAQ
// =================================================

export const getFAQsService = async () => {

  return await prisma.fAQ.findMany({

    orderBy: {
      createdAt: "desc",
    },

  });

};

export const createFAQService = async (data) => {

  return await prisma.fAQ.create({

    data,

  });

};

export const updateFAQService = async (id, data) => {

  return await prisma.fAQ.update({

    where: {
      id,
    },

    data,

  });

};

export const deleteFAQService = async (id) => {

  return await prisma.fAQ.delete({

    where: {
      id,
    },

  });

};

export const toggleFAQService = async (id) => {

  const faq = await prisma.fAQ.findUnique({

    where: {
      id,
    },

  });

  if (!faq) {
    throw new Error("FAQ not found");
  }

  return await prisma.fAQ.update({

    where: {
      id,
    },

    data: {
      isActive: !faq.isActive,
    },

  });

};

// =================================================
// ADMIN PROFILE
// =================================================

export const getAdminProfileService = async (id) => {

  return await prisma.user.findUnique({

    where: {
      id,
    },

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,

      adminProfile: {

        select: {
          phone: true,
          avatar: true,
        },

      },

    },

  });

};

export const updateAdminProfileService = async (id, data) => {

  const updateData = {
    name: data.name,
    email: data.email,
  };

  if (data.password && data.password.trim() !== "") {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  return await prisma.user.update({

    where: {
      id,
    },

    data: {

      ...updateData,

      adminProfile: {

        upsert: {

          create: {
            phone: data.phone || null,
            avatar: data.avatar || null,
          },

          update: {
            phone: data.phone,
            avatar: data.avatar,
          },

        },

      },

    },

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,

      adminProfile: {

        select: {
          phone: true,
          avatar: true,
        },

      },

    },

  });

};