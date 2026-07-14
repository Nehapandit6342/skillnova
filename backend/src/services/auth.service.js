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

  const existingUser = await prisma.user.findUnique({

    where:{
      email
    }

  });


  if(existingUser){

    const error = new Error(
      "User with this email already exists"
    );

    error.statusCode = 409;

    throw error;

  }



  // Hash password

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );




  // Generate email verification OTP

  const otp = Math.floor(
    100000 + Math.random() * 900000
  ).toString();




  // Hash OTP

  const otpHash = await bcrypt.hash(
    otp,
    10
  );





  const user = await prisma.$transaction(async(tx)=>{


    // Create User

    const newUser = await tx.user.create({

      data:{

        name,

        email,

        password:hashedPassword,

        role,

        isActive:false,

        isEmailVerified:false

      }

    });





    // Create Student Profile

    if(role === "STUDENT"){


      await tx.studentProfile.create({

        data:{

          userId:newUser.id,

          college,

          degree,

          careerGoal

        }

      });


    }





    // Create Employer Profile

    if(role === "EMPLOYER"){


      await tx.employerProfile.create({

        data:{

          userId:newUser.id,

          companyName,

          industry,

          website: website || null

        }

      });


    }





    // Remove old OTP

    await tx.emailVerificationToken.deleteMany({

      where:{

        userId:newUser.id

      }

    });







    // Store verification OTP

    await tx.emailVerificationToken.create({

      data:{

        userId:newUser.id,

        otpHash,

        expiresAt:new Date(

          Date.now() + 
          10 * 60 * 1000

        )

      }

    });





    return newUser;


  });







  return {

    user:{

      id:user.id,

      name:user.name,

      email:user.email,

      role:user.role,

      isActive:user.isActive,

      isEmailVerified:user.isEmailVerified,

      createdAt:user.createdAt

    },

    otp

  };


};