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



// ================= CREATE GENERIC =================

<<<<<<< HEAD
export const createInternshipService = async(data)=>{

    return prisma.internship.create({

        data
=======
export const createInternshipService = async (data) => {
>>>>>>> 0bde86d (Add admin settings and profile management)

    const internship = await prisma.internship.create({
        data,
    });

    await prisma.notification.create({
        data: {
            title: "New Internship Posted",
            message: `${internship.title} internship has been posted`,
            type: "INTERNSHIP",
        },
    });

    return internship;
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





    if(!data.title || !data.description){

        throw new Error(
            "Title and description are required"
        );

    }






    return prisma.internship.create({

        data:{


            title:data.title,


            description:data.description,



            category:data.category || null,


            companyOverview:data.companyOverview || null,


            experienceLevel:data.experienceLevel || null,


            educationLevel:data.educationLevel || null,


            salaryType:data.salaryType || null,


            applicationEmail:data.applicationEmail || null,



            location:data.location || null,


            type:data.type || null,


            workMode:data.workMode || null,


            duration:data.duration || null,


            stipend:data.stipend || null,



            openings:
            data.openings
            ?
            Number(data.openings)
            :
            null,



            deadline:
            data.deadline
            ?
            new Date(data.deadline)
            :
            null,



            responsibilities:
            safeArray(
                data.responsibilities
            ),



            skills:
            safeArray(
                data.skills
            ),



            qualifications:
            safeArray(
                data.qualifications
            ),



            benefits:
            safeArray(
                data.benefits
            ),



            selectionProcess:
            safeArray(
                data.selectionProcess
            ),



            employerId:
            employer.id


        },


        include:{


            employer:true


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






    return prisma.internship.findMany({

        where:{

            employerId:
            employer.id

        },


        include:{


            _count:{


                select:{


                    applications:true


                }


            },


            employer:{


                select:{


                    companyName:true,


                    logo:true


                }


            }


        },


        orderBy:{


            createdAt:"desc"


        }


    });


};







// ================= GET ALL INTERNSHIPS =================

export const getAllInternshipsService = async()=>{


    return prisma.internship.findMany({

        where:{


            isActive:true


        },


        include:{


            employer:{


                select:{


                    companyName:true,

                    logo:true,

                    industry:true


                }


            }


        },


        orderBy:{


            createdAt:"desc"


        }


    });


};







// ================= GET LATEST =================

export const getLatestInternshipsService = async()=>{


    return prisma.internship.findMany({

        where:{


            isActive:true


        },


        select:{


            id:true,

            title:true,

            description:true,

            location:true,

            type:true,

            stipend:true,

            deadline:true,


            employer:{


                select:{


                    companyName:true,

                    logo:true,

                    industry:true


                }


            }


        },


        orderBy:{


            createdAt:"desc"


        },


        take:6


    });


};








// ================= GET BY ID =================

export const getInternshipByIdService = async(id)=>{


    return prisma.internship.findUnique({

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







// ================= UPDATE =================

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




    if(
        internship.employerId !== employer.id
    ){

        throw new Error(
            "Unauthorized action"
        );

    }






    return prisma.internship.update({

        where:{


            id:internshipId


        },


        data:{


            ...data,


            openings:
            data.openings
            ?
            Number(data.openings)
            :
            undefined,



            deadline:
            data.deadline
            ?
            new Date(data.deadline)
            :
            undefined,


            responsibilities:
            safeArray(
                data.responsibilities
            ),


            skills:
            safeArray(
                data.skills
            ),


            qualifications:
            safeArray(
                data.qualifications
            ),


            benefits:
            safeArray(
                data.benefits
            ),


            selectionProcess:
            safeArray(
                data.selectionProcess
            )


        }


    });


};








// ================= DELETE =================

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




    if(
        internship.employerId !== employer.id
    ){

        throw new Error(
            "Unauthorized action"
        );

    }




    return prisma.internship.delete({

        where:{
            id:internshipId
        }

<<<<<<< HEAD
=======

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


};









// ================= CREATE EMPLOYER INTERNSHIP =================

export const createEmployerInternshipService = async (
    userId,
    data
) => {

    const employer = await prisma.employerProfile.findUnique({
        where: {
            userId
        }
    });

    if (!employer) {
        throw new Error("Employer profile not found");
    }

    const internship = await prisma.internship.create({

        data: {

            title: data.title,

            description: data.description,

            location: data.location,

            type: data.type,

            workMode: data.workMode,

            duration: data.duration,

            stipend: data.stipend,

            openings: data.openings
                ? Number(data.openings)
                : null,

            responsibilities: safeArray(data.responsibilities),

            skills: safeArray(data.skills),

            qualifications: safeArray(data.qualifications),

            benefits: safeArray(data.benefits),

            selectionProcess: safeArray(data.selectionProcess),

            deadline: data.deadline
                ? new Date(data.deadline)
                : null,

            employerId: employer.id

        }

    });

    await prisma.notification.create({

        data: {

            title: "New Internship Posted",

            message: `${internship.title} internship has been posted`,

            type: "INTERNSHIP"

        }

>>>>>>> 0bde86d (Add admin settings and profile management)
    });

    return internship;

};