import prisma from "../config/prisma.js";


// =====================================
// CREATE APPLICATION
// =====================================

export const createApplicationService = async (
    studentId,
    data
)=>{


    const application =
    await prisma.application.create({

        data:{

            studentId,

            internshipId:data.internshipId,

            resumeUrl:data.resumeUrl || null,

            coverLetter:data.coverLetter || null,

        },


    });


    return application;

};




// =====================================
// GET STUDENT APPLICATIONS
// =====================================


export const getStudentApplicationsService = async(
    studentId
)=>{


    return await prisma.application.findMany({

        where:{
            studentId
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





// =====================================
// GET EMPLOYER APPLICATIONS
// =====================================


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


            internship:true


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
async(
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