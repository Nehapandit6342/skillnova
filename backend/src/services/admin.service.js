import prisma from "../config/prisma.js";


// ================= DASHBOARD =================

export const dashboardService = async () => {

    const totalStudents = await prisma.user.count({
        where: {
            role: "STUDENT"
        }
    });


    const totalEmployers = await prisma.user.count({
        where: {
            role: "EMPLOYER"
        }
    });


    const totalInternships = await prisma.internship.count();


    const recentStudents = await prisma.user.findMany({

        where: {
            role: "STUDENT"
        },

        select: {

            id: true,
            name: true,
            email: true,
            createdAt: true

        },

        orderBy: {

            createdAt: "desc"

        },

        take: 5

    });


    return {

        totalStudents,

        totalEmployers,

        totalInternships,

        pendingApplications: 0,

        recentStudents

    };

};





// ================= GET ALL STUDENTS =================

export const getAllStudentsService = async () => {

    const students = await prisma.user.findMany({

        where: {

            role: "STUDENT"

        },


        select: {

            id: true,

            name: true,

            email: true,

            createdAt: true,


            studentProfile: {

                select: {

                    college: true,

                    degree: true,

                    skills: true

                }

            }

        },


        orderBy: {

            createdAt: "desc"

        }

    });


    return students;

};






// ================= GET STUDENT BY ID =================

export const getStudentByIdService = async (id) => {

    const student = await prisma.user.findUnique({

        where: {

            id

        },


        select: {

            id: true,

            name: true,

            email: true,

            createdAt: true,


            studentProfile: {

                select: {

                    college: true,

                    degree: true,

                    skills: true,

                    bio: true,

                    careerGoal: true

                }

            }

        }

    });


    return student;

};







// ================= CREATE STUDENT =================

export const createStudentService = async (data) => {


    const student = await prisma.user.create({

        data: {

            name: data.name,

            email: data.email,

            password: data.password,

            role: "STUDENT",


            studentProfile: {

                create: {

                    college: data.college,

                    degree: data.degree,

                    bio: data.bio,

                    careerGoal: data.careerGoal,

                    skills: data.skills || []

                }

            }

        },


        include: {

            studentProfile: true

        }

    });


    return student;

};






// ================= UPDATE STUDENT =================

export const updateStudentService = async (id, data) => {


    const student = await prisma.user.update({

        where: {

            id

        },


        data: {


            name: data.name,

            email: data.email,


            studentProfile: {

                update: {

                    college: data.college,

                    degree: data.degree,

                    bio: data.bio,

                    careerGoal: data.careerGoal,

                    skills: data.skills || []

                }

            }


        },


        include: {

            studentProfile:true

        }

    });


    return student;

};






// ================= DELETE STUDENT =================

export const deleteStudentService = async (id) => {


    await prisma.studentProfile.deleteMany({

        where: {

            userId:id

        }

    });



    await prisma.user.delete({

        where: {

            id

        }

    });


    return true;

};







// ================= GET ALL EMPLOYERS =================

export const getAllEmployersService = async () => {


    const employers = await prisma.employerProfile.findMany({

        include: {

            user: {

                select: {

                    id:true,

                    name:true,

                    email:true,

                    isActive:true

                }

            }

        },


        orderBy: {

            createdAt:"desc"

        }

    });


    return employers;

};







// ================= GET EMPLOYER BY ID =================

export const getEmployerByIdService = async (id) => {


    const employer = await prisma.employerProfile.findUnique({

        where: {

            id

        },


        include: {

            user: {

                select: {

                    id:true,

                    name:true,

                    email:true,

                    isActive:true

                }

            }

        }

    });


    return employer;

};

// ================= UPDATE EMPLOYER =================

export const updateEmployerService = async (id, data) => {


    const employer = await prisma.employerProfile.update({

        where: {
            id
        },


        data: {

            companyName: data.companyName,

            website: data.website,

            industry: data.industry,

            location: data.location,

            description: data.description,

            companySize: data.companySize,

            foundedYear: data.foundedYear

        },


        include: {

            user: {

                select: {

                    id: true,
                    name: true,
                    email: true,
                    isActive: true

                }

            }

        }

    });



    // update user details also

    if(data.name || data.email){

        await prisma.user.update({

            where:{
                id: employer.userId
            },


            data:{

                name: data.name,

                email: data.email

            }

        });

    }


    return employer;

};