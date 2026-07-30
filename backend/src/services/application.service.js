import prisma from "../config/prisma.js";


// =====================================
// CREATE APPLICATION (STUDENT)
// =====================================

export const createApplicationService = async (
  userId,
  data
) => {

  const student = await prisma.studentProfile.findUnique({

    where: {
      userId,
    },

  });


  if (!student) {

    throw new Error("Student profile not found");

  }



  const internship = await prisma.internship.findUnique({

    where: {
      id: data.internshipId,
    },

  });



  if (!internship) {

    throw new Error("Internship not found");

  }



  const alreadyApplied =
    await prisma.application.findFirst({

      where: {

        studentId: student.id,

        internshipId: data.internshipId,

      },

    });



  if (alreadyApplied) {

    throw new Error(
      "You have already applied for this internship"
    );

  }



  const application =
    await prisma.application.create({

      data: {

        studentId: student.id,

        internshipId: data.internshipId,

        status: "PENDING",

      },


      include: {

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



  return application;

};





// =====================================
// GET STUDENT APPLICATIONS
// =====================================

export const getStudentApplicationsService = async (
  userId
) => {


  const student =
    await prisma.studentProfile.findUnique({

      where: {

        userId,

      },

    });



  if (!student) {

    throw new Error(
      "Student profile not found"
    );

  }



  return await prisma.application.findMany({

    where: {

      studentId: student.id,

    },


    include: {


      internship: {

        include: {

          employer: {

            select: {

              companyName:true,

            },

          },

        },

      },

    },


    orderBy: {

      appliedAt:"desc",

    },

  });


};






// =====================================
// GET EMPLOYER APPLICATIONS
// =====================================

export const getEmployerApplicationsService = async (
  userId
) => {


  const employer =
    await prisma.employerProfile.findUnique({

      where: {

        userId,

      },

    });



  if (!employer) {

    throw new Error(
      "Employer profile not found"
    );

  }



  return await prisma.application.findMany({

    where: {

      internship: {

        employerId: employer.id,

      },

    },



    include: {


      student: {

        include: {

          user: {

            select: {

              id:true,

              name:true,

              email:true,

            },

          },

        },

      },



      internship: {

        include: {

          employer: {

            select: {

              companyName:true,

            },

          },

        },

      },


    },



    orderBy: {

      appliedAt:"desc",

    },


  });


};






// =====================================
// UPDATE APPLICATION STATUS
// =====================================

export const updateApplicationStatusService = async (
  id,
  status
) => {


  const application =
    await prisma.application.findUnique({

      where: {

        id,

      },

    });



  if (!application) {

    throw new Error(
      "Application not found"
    );

  }



  return await prisma.application.update({

    where: {

      id,

    },



    data: {

      status,

    },



    include: {


      student: {

        include: {

          user: {

            select: {

              id:true,

              name:true,

              email:true,

            },

          },

        },

      },



      internship: {

        include: {

          employer: {

            select: {

              companyName:true,

            },

          },

        },

      },


    },


  });


};






// =====================================
// GET ALL APPLICATIONS (ADMIN)
// =====================================

export const getAllApplicationsService = async () => {


  return await prisma.application.findMany({

    include: {


      student: {

        include: {

          user: {

            select: {

              id:true,

              name:true,

              email:true,

            },

          },

        },

      },



      internship: {

        include: {

          employer: {

            select: {

              companyName:true,

            },

          },

        },

      },


    },


    orderBy: {

      appliedAt:"desc",

    },


  });


};