import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";


export const registerUser = async (data) => {

    const {
        name,
        email,
        password,
        role,
        college,
        degree,
        careerGoal,
        companyName,
        industry,
        website,
    } = data;



    // Check existing user

    const existingUser =
        await prisma.user.findUnique({

            where:{
                email
            }

        });



    if(existingUser){

        const error =
            new Error(
                "User with this email already exists"
            );

        error.statusCode = 409;

        throw error;

    }





    // Hash password

    const hashedPassword =
        await bcrypt.hash(

            password,

            10

        );







    const user =
        await prisma.$transaction(async(tx)=>{



            // Create User

            const newUser =
                await tx.user.create({

                    data:{


                        name,


                        email,


                        password:hashedPassword,


                        role,


                        isActive:true


                    }

                });







            // Create Student Profile

            if(role === "STUDENT"){


                await tx.studentProfile.create({

                    data:{


                        userId:newUser.id,


                        college: college || null,


                        degree: degree || null,


                        careerGoal: careerGoal || null


                    }

                });


            }








            // Create Employer Profile

            if(role === "EMPLOYER"){


                await tx.employerProfile.create({

                    data:{


                        userId:newUser.id,


                        companyName,


                        industry: industry || null,


                        website: website || null


                    }

                });


            }







            return newUser;


        });









    return {


        user:{


            id:user.id,


            name:user.name,


            email:user.email,


            role:user.role,


            isActive:user.isActive,


            createdAt:user.createdAt


        }


    };


};