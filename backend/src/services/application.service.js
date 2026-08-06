import prisma from "../config/prisma.js";
import { createNotification } from "./notification.service.js";


// =====================================
// CREATE APPLICATION (STUDENT)
// =====================================

export const createApplicationService = async (userId, data) => {


    const student =
    await prisma.studentProfile.findUnique({

        where:{
            userId
        },

        include:{
            user:true
        }

    });



    if(!student){

        throw new Error(
            "Student profile not found"
        );

    }



    const internship =
    await prisma.internship.findUnique({

        where:{
            id:data.internshipId
        },


        include:{

            employer:{

                select:{

                    id:true,

                    userId:true,

                    companyName:true

                }

            }

        }

    });



    if(!internship){

        throw new Error(
            "Internship not found"
        );

    }





    const alreadyApplied =
    await prisma.application.findUnique({

        where:{

            studentId_internshipId:{

                studentId:student.id,

                internshipId:data.internshipId

            }

        }

    });



    if(alreadyApplied){

        throw new Error(
            "You have already applied for this internship"
        );

    }





    const application =
    await prisma.application.create({

        data:{


            studentId:student.id,


            internshipId:data.internshipId,


            fullName:
            data.fullName || student.user.name,


            email:
            data.email || student.user.email,


            phone:
            data.phone || null,


            location:
            data.location || null,


            college:
            data.college || student.college,


            degree:
            data.degree || student.degree,


            resume:
            data.resume || null,


            coverLetter:
            data.coverLetter || null,


            whyHireMe:
            data.whyHireMe || null,


            availability:
            data.availability || null,


            expectedDuration:
            data.duration || null,


            status:"PENDING"

        }


    });





    // =====================================
    // CREATE EMPLOYER NOTIFICATION
    // =====================================


    await createNotification({

        userId:
        internship.employer.userId,


        title:
        "New Internship Application",


        message:
        `${student.user.name} applied for ${internship.title}`,


        type:
        "APPLICATION",


        link:
        "/employer/applications"

    });





    return application;


};




// =====================================
// GET STUDENT APPLICATIONS
// =====================================


export const getStudentApplicationsService = async(userId)=>{


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

                            id:true,

                            companyName:true,

                            logo:true,

                            website:true,

                            industry:true,

                            location:true

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




// =====================================
// GET EMPLOYER APPLICATIONS
// =====================================


export const getEmployerApplicationsService = async(userId)=>{


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


                employerId:employer.id


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



            internship:{


                select:{

                    title:true

                }

            }


        },



        orderBy:{

            createdAt:"desc"

        }


    });


};




// =====================================
// UPDATE APPLICATION STATUS
// =====================================


export const updateApplicationStatusService =
async(userId,id,status)=>{


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





    const application =
    await prisma.application.findUnique({

        where:{
            id
        },


        include:{

            internship:true,

            student:true

        }


    });



    if(!application){

        throw new Error(
            "Application not found"
        );

    }





    if(
        application.internship.employerId
        !==
        employer.id
    ){

        throw new Error(
            "Unauthorized action"
        );

    }






    const updatedApplication =
    await prisma.application.update({

        where:{
            id
        },


        data:{

            status

        },


        include:{


            student:{

                include:{

                    user:true

                }

            },


            internship:{

                include:{

                    employer:true

                }

            }


        }


    });






    // =====================================
    // NOTIFY STUDENT
    // =====================================


    await createNotification({

        userId:
        updatedApplication.student.id,


        title:
        "Application Status Updated",


        message:
        `Your application for ${updatedApplication.internship.title} is ${status.toLowerCase()}.`,


        type:
        "APPLICATION_STATUS",


        link:
        "/student/applications"


    });





    return updatedApplication;


};




// =====================================
// ADMIN GET ALL APPLICATIONS
// =====================================


export const getAllApplicationsService = async()=>{


    return await prisma.application.findMany({


        include:{


            student:{

                include:{

                    user:true

                }

            },


            internship:{

                include:{

                    employer:true

                }

            }


        },


        orderBy:{

            createdAt:"desc"

        }


    });


};