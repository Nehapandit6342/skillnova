import prisma from "../config/prisma.js";


export const getEmployerCandidatesService = async(userId)=>{


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



    const candidates =
    await prisma.application.findMany({


        where:{


            internship:{


                employerId:
                employer.id


            }


        },


        include:{


            student:{


                include:{


                    user:true


                }


            },


            internship:true


        },


        orderBy:{


            createdAt:"desc"


        }


    });



    return candidates;


};