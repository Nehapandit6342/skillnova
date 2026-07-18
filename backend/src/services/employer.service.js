import prisma from "../config/prisma.js";


// GET EMPLOYER PROFILE
export const getEmployerProfile = async (userId) => {


    const profile = await prisma.employerProfile.findUnique({

        where:{
            userId
        },

        select:{

            id:true,
            companyName:true,
            website:true,
            industry:true,
            description:true,

            user:{
                select:{
                    name:true,
                    email:true
                }
            }

        }

    });



    if(!profile){

        const error = new Error(
            "Employer profile not found"
        );

        error.statusCode = 404;

        throw error;

    }


    return profile;

};





// UPDATE EMPLOYER PROFILE

export const updateEmployerProfile = async(
    userId,
    data
)=>{


    const {

        companyName,
        website,
        industry,
        description

    } = data;



    const profile =
    await prisma.employerProfile.update({

        where:{
            userId
        },


        data:{


            companyName,

            website,

            industry,

            description


        },


        select:{


            companyName:true,

            website:true,

            industry:true,

            description:true


        }


    });



    return profile;


};