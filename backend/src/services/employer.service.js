import prisma from "../config/prisma.js";


// ================= GET EMPLOYER PROFILE =================

export const getEmployerProfile = async (userId) => {

  const profile = await prisma.employerProfile.findUnique({

    where: {
      userId,
    },

    select: {

      id: true,

      companyName: true,

      website: true,

      industry: true,

      description: true,

      user: {

        select: {

          name: true,

          email: true,

        },

      },

    },

  });


  if (!profile) {

    const error = new Error("Employer profile not found");
    error.statusCode = 404;
    throw error;

  }


  return profile;

};





// ================= UPDATE EMPLOYER PROFILE =================

export const updateEmployerProfile = async (userId, data) => {

  const {
    companyName,
    website,
    industry,
    description,
  } = data;


  const profile = await prisma.employerProfile.update({

    where: {
      userId,
    },


    data: {

      companyName,

      website,

      industry,

      description,

    },


    select: {

      companyName: true,

      website: true,

      industry: true,

      description: true,

    },

  });


  return profile;

};





// ================= GET ALL EMPLOYERS (ADMIN) =================

export const getAllEmployers = async () => {


  return await prisma.employerProfile.findMany({

    select: {

      id: true,

      companyName: true,

      website: true,

      industry: true,

      description: true,

      createdAt: true,


      user: {

        select: {

          id: true,

          name: true,

          email: true,

          isActive: true,

        },

      },

    },


    orderBy: {

      createdAt: "desc",

    },

  });


};






// ================= GET EMPLOYER BY ID =================

export const getEmployerById = async (id) => {


  return await prisma.employerProfile.findUnique({

    where: {

      id,

    },


    select: {

      id: true,

      companyName: true,

      website: true,

      industry: true,

      description: true,

      createdAt: true,


      user: {

        select: {

          id: true,

          name: true,

          email: true,

          isActive: true,

        },

      },

    },

  });


};






// ================= EMPLOYER DASHBOARD STATS =================

export const getEmployerDashboardStats = async (userId) => {


  const employer = await prisma.employerProfile.findUnique({

    where: {

      userId,

    },

  });



  if (!employer) {

    const error = new Error("Employer profile not found");
    error.statusCode = 404;
    throw error;

  }



  const totalInternships = await prisma.internship.count({

    where: {

      employerId: employer.id,

    },

  });



  const totalApplications = await prisma.application.count({

    where: {

      internship: {

        employerId: employer.id,

      },

    },

  });



  return {

    totalInternships,

    totalApplications,

  };


};