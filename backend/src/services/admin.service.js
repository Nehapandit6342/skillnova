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

            studentProfile: true

        }

    });

    return student;

};
// ================= DELETE STUDENT =================

export const deleteStudentService = async (id) => {

    // Delete Student Profile first
    await prisma.studentProfile.deleteMany({
        where: {
            userId: id
        }
    });

    // Delete User
    await prisma.user.delete({
        where: {
            id
        }
    });

    return true;

};
// ================= CREATE STUDENT =================

export const createStudentService = async (data) => {

    const student = await prisma.user.create({

        data: {

            name: data.name,

            email: data.email,

            password: data.password, // Later bcrypt hash karenge

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