import prisma from "../config/prisma.js";


// ================= GET EMPLOYER PROFILE =================

export const getEmployerProfile = async (userId)=>{


    const profile =
    await prisma.employerProfile.findUnique({

        where:{
            userId,
        },

        select:{

            id:true,

            companyName:true,

            logo:true,

            website:true,

            industry:true,

            location:true,

            companySize:true,

            foundedYear:true,

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

        const error =
        new Error(
            "Employer profile not found"
        );

        error.statusCode=404;

        throw error;

    }


    return profile;


};





// ================= UPDATE EMPLOYER PROFILE =================


export const updateEmployerProfile =
async(userId,data)=>{


    const {
        name,
        companyName,
        website,
        industry,
        location,
        companySize,
        foundedYear,
        description

    } = data;



    const [profile,user] =
    await prisma.$transaction([


        prisma.employerProfile.update({

            where:{
                userId
            },


            data:{

                ...(companyName && {
                    companyName
                }),

                ...(website !== undefined && {
                    website
                }),

                ...(industry !== undefined && {
                    industry
                }),

                ...(location !== undefined && {
                    location
                }),

                ...(companySize !== undefined && {
                    companySize
                }),

                ...(foundedYear !== undefined && {

                    foundedYear:
                    Number(foundedYear)

                }),

                ...(description !== undefined && {
                    description
                })


            },


            select:{

                companyName:true,

                website:true,

                industry:true,

                location:true,

                companySize:true,

                foundedYear:true,

                description:true

            }

        }),





        prisma.user.update({

            where:{
                id:userId
            },


            data:{

                ...(name && {
                    name
                })

            },


            select:{

                name:true,

                email:true

            }

        })


    ]);




    return {


        ...profile,


        user:{


            name:user.name,

            email:user.email


        }


    };


};






<<<<<<< HEAD

// ================= GET ALL EMPLOYERS ADMIN =================
=======
  return await prisma.employerProfile.findMany({

    select: {

      id: true,

      companyName: true,

      website: true,

      industry: true,

      description: true,

      createdAt: true,
>>>>>>> 0bde86d (Add admin settings and profile management)

      status: true,

export const getAllEmployers =
async()=>{


    return await prisma.employerProfile.findMany({


        select:{


            id:true,

            companyName:true,

            website:true,

            industry:true,

            description:true,

            createdAt:true,


            user:{


                select:{


                    id:true,

                    name:true,

                    email:true,

                    isActive:true


                }


            }


        },


        orderBy:{

<<<<<<< HEAD

            createdAt:"desc"
=======
    orderBy: {
>>>>>>> 0bde86d (Add admin settings and profile management)


        }


    });

};


<<<<<<< HEAD






=======
>>>>>>> 0bde86d (Add admin settings and profile management)
// ================= GET EMPLOYER BY ID =================


export const getEmployerById =
async(id)=>{


    return await prisma.employerProfile.findUnique({


        where:{
            id
        },


        select:{


            id:true,

            companyName:true,

            website:true,

            industry:true,

            description:true,

            createdAt:true,


            user:{


                select:{


                    id:true,

                    name:true,

                    email:true,

                    isActive:true


                }


            }


        }


    });


};










// ================= EMPLOYER DASHBOARD STATS =================


export const getEmployerDashboardStats =
async(userId)=>{


    const employer =
    await prisma.employerProfile.findUnique({


        where:{
            userId
        }


    });



    if(!employer){


        const error =
        new Error(
            "Employer profile not found"
        );


        error.statusCode=404;


        throw error;


    }




    const totalInternships =
    await prisma.internship.count({


        where:{


            employerId:
            employer.id


        }


    });







    const activeInternships =
    await prisma.internship.count({


        where:{


            employerId:
            employer.id,


            isActive:true


        }


    });







    const totalApplications =
    await prisma.application.count({


        where:{


            internship:{


                employerId:
                employer.id


            }


        }


    });







    // FIXED: only selected candidates

    const candidates =
    await prisma.application.count({


        where:{


            internship:{


                employerId:
                employer.id


            },


            status:"ACCEPTED"


        }


    });







    return {


        totalInternships,


        activeInternships,


        totalApplications,


        candidates,


        profileViews:0


    };


};









// ================= APPLICATION TREND =================


export const getApplicationTrend =
async(userId)=>{


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




    const applications =
    await prisma.application.findMany({


        where:{


            internship:{


                employerId:
                employer.id


            }


        },


        select:{


            createdAt:true


        }


    });







    const months=[

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

    ];






    const monthlyData={};





    applications.forEach(application=>{


        const month =
        months[
            application.createdAt.getMonth()
        ];



        monthlyData[month] =
        (monthlyData[month] || 0)+1;


    });








    return months.map(month=>({


        month,


        applications:
        monthlyData[month] || 0


    }));


};









// ================= APPLICATION STATUS =================


export const getApplicationStatus =
async(userId)=>{


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





    const applications =
    await prisma.application.findMany({


        where:{


            internship:{


                employerId:
                employer.id


            }


        },


        select:{


            status:true


        }


    });







    const statusCount={};





    applications.forEach(application=>{


        statusCount[application.status] =

        (statusCount[application.status] || 0)+1;


    });








    return Object.keys(statusCount)
    .map(status=>({


        name:status,


        value:
        statusCount[status]


    }));



};









// ================= GET FEATURED EMPLOYERS =================


export const getFeaturedEmployers =
async()=>{


    return await prisma.employerProfile.findMany({


        select:{


            id:true,

            companyName:true,

            logo:true,

            website:true,

            industry:true,

            location:true,

            description:true


        },


        take:6,


        orderBy:{


            createdAt:"desc"


        }


    });


};
// ================= UPDATE EMPLOYER STATUS =================

export const updateEmployerStatus = async (
  employerId,
  status
) => {

  return await prisma.employerProfile.update({

    where: {

      id: employerId,

    },

    data: {

      status,

    },

  });

};