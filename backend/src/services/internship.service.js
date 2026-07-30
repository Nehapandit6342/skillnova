import prisma from "../config/prisma.js";


// ================= CREATE INTERNSHIP =================

export const createInternshipService = async (data) => {

    return await prisma.internship.create({

        data

    });

};




// ================= GET ALL INTERNSHIPS =================

export const getAllInternshipsService = async () => {

    return await prisma.internship.findMany({

        include: {

            employer: {

                include: {

                    user: {

                        select: {

                            name:true,
                            email:true

                        }

                    }

                }

            }

        },

        orderBy: {

            createdAt:"desc"

        }

    });

};




// ================= GET INTERNSHIP BY ID =================

export const getInternshipByIdService = async (id)=>{


    return await prisma.internship.findUnique({

        where:{
            id
        },


        include:{

            employer:{

                include:{

                    user:true

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
            id:internshipId
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
            id:internshipId
        },


        data:{


            title:data.title,

            description:data.description,

            location:data.location,

            type:data.type,

            stipend:data.stipend,


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
            id:internshipId
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
            id:internshipId
        }

    });


};



// ================= GET EMPLOYER INTERNSHIPS =================

export const getEmployerInternshipsService = async(userId)=>{


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



    return await prisma.internship.findMany({

        where:{

            employerId: employer.id

        },


        orderBy:{

            createdAt:"desc"

        }

    });


};




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


            stipend:data.stipend,


            deadline:data.deadline
            ?
            new Date(data.deadline)
            :
            null,


            employerId:employer.id


        }

    });



    return internship;


};