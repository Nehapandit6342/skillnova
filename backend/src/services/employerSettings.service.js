import prisma from "../config/prisma.js";


// =======================================
// GET EMPLOYER SETTINGS
// =======================================

export const getEmployerSettingsService = async(userId)=>{


    const employer =
    await prisma.employerProfile.findUnique({

        where:{
            userId
        },


        include:{
            user:{
                select:{
                    name:true,
                    email:true
                }
            }
        }

    });



    if(!employer){

        throw new Error(
            "Employer profile not found"
        );

    }



    return employer;


};




// =======================================
// UPDATE EMPLOYER SETTINGS
// =======================================

export const updateEmployerSettingsService =
async(
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




    return await prisma.employerProfile.update({

        where:{
            userId
        },


        data:{


            companyName:
            data.companyName,


            website:
            data.website,


            industry:
            data.industry,


            location:
            data.location,


            companySize:
            data.companySize,


            foundedYear:
            data.foundedYear
            ?
            Number(data.foundedYear)
            :
            null,


            description:
            data.description,


        }


    });


};