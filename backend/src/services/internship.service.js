import prisma from "../config/prisma.js";


// ================= HELPER =================

const safeArray = (value)=>{

    if(!value){
        return [];
    }

    return Array.isArray(value)
        ? value
        : [];

};





// ================= CREATE INTERNSHIP =================

export const createInternshipService = async(data)=>{

    return await prisma.internship.create({

        data

    });

};







// ================= GET ALL INTERNSHIPS =================

export const getAllInternshipsService = async()=>{


    return await prisma.internship.findMany({

        include:{


            employer:{


                include:{


                    user:{


                        select:{


                            name:true,

                            email:true


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







// ================= GET INTERNSHIP BY ID =================

export const getInternshipByIdService = async(id)=>{


    return await prisma.internship.findUnique({


        where:{


            id


        },


        include:{


            employer:{


                include:{


                    user:true


                }


            },


            _count:{


                select:{


                    applications:true


                }


            }


        }


    });


};









// ================= UPDATE INTERNSHIP =================

export const updateInternshipService = async(

    userId,

    internshipId,

    data

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






    const internship =
    await prisma.internship.findUnique({


        where:{


            id: internshipId


        }


    });





    if(!internship){


        throw new Error(
            "Internship not found"
        );

    }







    if(internship.employerId !== employer.id){


        throw new Error(
            "Unauthorized action"
        );

    }







    return await prisma.internship.update({


        where:{


            id: internshipId


        },


        data:{


            title:data.title,

            description:data.description,

            location:data.location,


            type:data.type,


            workMode:data.workMode,


            duration:data.duration,


            stipend:data.stipend,



            openings:
            data.openings
            ?
            Number(data.openings)
            :
            null,



            responsibilities:
            safeArray(data.responsibilities),



            skills:
            safeArray(data.skills),



            qualifications:
            safeArray(data.qualifications),



            benefits:
            safeArray(data.benefits),



            selectionProcess:
            safeArray(data.selectionProcess),



            deadline:
            data.deadline
            ?
            new Date(data.deadline)
            :
            null


        }


    });


};









// ================= DELETE INTERNSHIP =================

export const deleteInternshipService = async(

    userId,

    internshipId

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







    const internship =
    await prisma.internship.findUnique({


        where:{


            id: internshipId


        }


    });






    if(!internship){


        throw new Error(
            "Internship not found"
        );

    }







    if(internship.employerId !== employer.id){


        throw new Error(
            "Unauthorized action"
        );

    }







    return await prisma.internship.delete({


        where:{


            id: internshipId


        }


    });


};









// ================= GET EMPLOYER INTERNSHIPS =================

// ================= GET EMPLOYER INTERNSHIPS =================

export const getEmployerInternshipsService = async(userId)=>{


    console.log(
        "Searching employer profile for user:",
        userId
    );


    const employer =
    await prisma.employerProfile.findUnique({

        where:{
            userId
        }

    });



    console.log(
        "Employer found:",
        employer
    );



    if(!employer){

        throw new Error(
            "Employer profile not found"
        );

    }





    const internships =
    await prisma.internship.findMany({

        where:{

            employerId: employer.id

        },


        include:{


            _count:{

                select:{

                    applications:true

                }

            }

        },


        orderBy:{

            createdAt:"desc"

        }


    });



    console.log(
        "Internships:",
        internships
    );



    return internships;


};









// ================= CREATE EMPLOYER INTERNSHIP =================

// ================= CREATE EMPLOYER INTERNSHIP =================

export const createEmployerInternshipService = async(
    userId,
    data
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



    const internship =
    await prisma.internship.create({


        data:{


            title:data.title,


            description:data.description,


            location:data.location,


            type:data.type,


            workMode:data.workMode,


            duration:data.duration,


            stipend:data.stipend || null,



            openings:
            data.openings
            ? Number(data.openings)
            : null,



            responsibilities:
            safeArray(data.responsibilities),



            skills:
            safeArray(data.skills),



            qualifications:
            safeArray(data.qualifications),



            benefits:
            safeArray(data.benefits),



            selectionProcess:
            safeArray(data.selectionProcess),



            deadline:
            data.deadline
            ? new Date(data.deadline)
            : null,



            employerId:
            employer.id


        }


    });



    return internship;


};