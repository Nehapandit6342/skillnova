import prisma from "../config/prisma.js";
import { validate as isUUID } from "uuid";




// =====================================
// GET EMPLOYER ACCEPTED CANDIDATES
// =====================================

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


                employerId: employer.id


            },


            status:"ACCEPTED"


        },



        include:{


            student:{


                select:{


                    id:true,

                    college:true,

                    degree:true,

                    semester:true,

                    cgpa:true,

                    skills:true,

                    github:true,

                    linkedin:true,

                    portfolio:true,

                    bio:true,

                    phone:true,

                    resumeUrl:true,

                    resumeFileName:true,


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


                    id:true,

                    title:true


                }


            }



        },



        orderBy:{


            createdAt:"desc"


        }



    });



    return candidates;


};









// =====================================
// GET SINGLE CANDIDATE DETAILS
// =====================================

export const getCandidateDetailsService = async(
    userId,
    applicationId
)=>{


    // UUID CHECK

    if(!isUUID(applicationId)){


        throw new Error(
            "Invalid application id"
        );


    }






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





    const application =
    await prisma.application.findFirst({


        where:{


            id:applicationId,


            status:"ACCEPTED",



            internship:{


                employerId:employer.id


            }


        },



        include:{


            student:{


                select:{


                    id:true,

                    college:true,

                    degree:true,

                    semester:true,

                    cgpa:true,

                    skills:true,

                    github:true,

                    linkedin:true,

                    portfolio:true,

                    bio:true,

                    phone:true,

                    resumeUrl:true,

                    resumeFileName:true,


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


                    id:true,

                    title:true,

                    description:true


                }


            }



        }



    });







    if(!application){


        throw new Error(
            "Candidate not found"
        );


    }





    return application;


};