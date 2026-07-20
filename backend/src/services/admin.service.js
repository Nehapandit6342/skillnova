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