import prisma from "../config/prisma.js";


export const getEmployerDashboardStats = async(userId)=>{


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



    return {


        activeInternships:0,


        totalApplications:0,


        candidates:0,


        profileViews:0


    };


};