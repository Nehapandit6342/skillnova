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







    // Internship active check

    if(!internship.isActive){

        throw new Error(
            "This internship is no longer available"
        );

    }







    // Deadline check

    if(
        internship.deadline
        &&
        new Date(internship.deadline)
        <
        new Date()
    ){

        throw new Error(
            "Application deadline has expired"
        );

    }









    // Duplicate application check

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



            // ==========================
            // APPLICANT INFORMATION
            // ==========================


            fullName:
            data.fullName || null,


            email:
            data.email || null,


            phone:
            data.phone || null,


            location:
            data.location || null,


            college:
            data.college || null,


            degree:
            data.degree || null,





            // ==========================
            // APPLICATION INFORMATION
            // ==========================


            resume:
            data.resume || null,


            coverLetter:
            data.coverLetter || null,


            whyHireMe:
            data.whyHireMe || null,


            availability:
            data.availability || null,


            expectedDuration:
            data.expectedDuration || null,



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


                select:{


                    college:true,

                    degree:true,

                    semester:true,

                    cgpa:true,

                    skills:true,

                    github:true,

                    linkedin:true,

                    portfolio:true,

                    bio:true,


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