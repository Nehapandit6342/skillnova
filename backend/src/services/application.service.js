import prisma from "../config/prisma.js";


// =====================================
// CREATE APPLICATION (STUDENT)
// =====================================

export const createApplicationService = async (
    userId,
    data
) => {


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




    const internship =
    await prisma.internship.findUnique({

        where:{
            id:data.internshipId
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





    return await prisma.application.create({

        data:{


            studentId:student.id,


            internshipId:data.internshipId,


            phone:data.phone || null,


            resume:data.resume || null,


            coverLetter:data.coverLetter || null,


            availability:data.availability || null,


            status:"PENDING"


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


        }


    });



};







// =====================================
// GET STUDENT APPLICATIONS
// =====================================

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

export const updateApplicationStatusService = async(
    id,
    status
)=>{


    const application =
    await prisma.application.findUnique({

        where:{
            id
        }

    });



    if(!application){

        throw new Error(
            "Application not found"
        );

    }




    return await prisma.application.update({

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


            internship:true


        }



    });



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