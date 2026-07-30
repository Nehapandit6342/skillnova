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




// ======================================
// STUDENT APPLY INTERNSHIP
// ======================================

export const createApplicationService = async (
    userId,
    data
)=>{


    const student =
    await prisma.studentProfile.findUnique({

        where:{
            userId
        }

    });



    if(!student){

        throw new Error(
            "Student profile not found"
        );

    }




    const existingApplication =
    await prisma.application.findFirst({

        where:{

            studentId: student.id,

            internshipId: data.internshipId

        }

    });



    if(existingApplication){

        throw new Error(
            "Already applied for this internship"
        );

    }





    return await prisma.application.create({

        data:{


            studentId: student.id,


            internshipId:data.internshipId,


            resumeUrl:data.resumeUrl || null,


            coverLetter:data.coverLetter || null


        },

        include:{


            internship:true


        }


    });


};








// ======================================
// STUDENT GET APPLICATIONS
// ======================================


export const getStudentApplicationsService = async(
    userId
)=>{


    const student =
    await prisma.studentProfile.findUnique({

        where:{
            userId
        }

    });



    if(!student){

        throw new Error(
            "Student profile not found"
        );

    }




    return await prisma.application.findMany({

        where:{

            studentId:student.id

        },


        include:{


            internship:{


                include:{


                    employer:{


                        select:{


                            companyName:true

                        }

                    }

                }


            }


        },


        orderBy:{

            createdAt:"desc"

        }


    });



};









// ======================================
// EMPLOYER GET APPLICATIONS
// ======================================


export const getEmployerApplicationsService = async(
    userId
)=>{


    const employer =
    await prisma.employerProfile.findUnique({

        where:{
            userId
        }

    });



    if(!employer){

        throw new Error(
            "Employer profile not found"
        );

    }




    return await prisma.application.findMany({

        where:{


            internship:{


                employerId: employer.id


            }


        },


        include:{


            student:{


                include:{


                    user:{


                        select:{


                            name:true,

                            email:true


                        }

                    }


                }


            },


            internship:true


        },


        orderBy:{

            createdAt:"desc"

        }


    });


};









// ======================================
// UPDATE APPLICATION STATUS
// ======================================


export const updateApplicationStatusService = async(
    id,
    status
)=>{


    return await prisma.application.update({

        where:{

            id

        },


        data:{


            status

        }


    });


};