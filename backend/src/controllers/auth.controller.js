import { registerSchema } from "../validators/auth.validator.js";
import { registerUser } from "../services/auth.service.js";

import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
    sendPasswordResetOtp,
    sendEmailVerificationOtp
} from "../services/mail.service.js";



// ================= REGISTER =================
export const register = async (req,res)=>{

    try{

        const validatedData = registerSchema.parse(req.body);


        const result = await registerUser(validatedData);



        await sendEmailVerificationOtp(
            result.user.email,
            result.otp
        );



        return res.status(201).json({

            success:true,

            message:
            "Account created. Please verify your email.",

            data:{
                user:result.user
            }

        });



    }catch(error){


        if(error.name==="ZodError"){

            return res.status(400).json({

                success:false,

                message:"Validation failed",

                errors:error.issues

            });

        }



        return res.status(error.statusCode || 500).json({

            success:false,

            message:error.message || "Server error"

        });

    }

};

// ================= VERIFY EMAIL OTP =================


export const verifyEmailOtp = async(req,res)=>{


    try{


        const {
            email,
            otp
        }=req.body;



        if(!email || !otp){

            return res.status(400).json({

                success:false,

                message:
                "Email and OTP are required"

            });

        }




        const user =
        await prisma.user.findUnique({

            where:{
                email
            }

        });



        if(!user){

            return res.status(404).json({

                success:false,

                message:
                "User not found"

            });

        }




        const token =
        await prisma.emailVerificationToken.findFirst({

            where:{

                userId:user.id,

                used:false,

                expiresAt:{
                    gt:new Date()
                }

            },

            orderBy:{
                createdAt:"desc"
            }

        });




        if(!token){

            return res.status(400).json({

                success:false,

                message:
                "OTP expired or invalid"

            });

        }




        const validOtp =
        await bcrypt.compare(

            otp,

            token.otpHash

        );




        if(!validOtp){

            return res.status(400).json({

                success:false,

                message:
                "Invalid OTP"

            });

        }




        await prisma.$transaction([


            prisma.user.update({

                where:{
                    id:user.id
                },

                data:{

                    isEmailVerified:true,

                    isActive:true

                }

            }),



            prisma.emailVerificationToken.update({

                where:{
                    id:token.id
                },

                data:{

                    used:true

                }

            })


        ]);




        return res.json({

            success:true,

            message:
            "Email verified successfully"

        });



    }catch(error){


        console.log(error);


        return res.status(500).json({

            success:false,

            message:
            "Something went wrong"

        });

    }


};







// ================= LOGIN =================


export const login = async(req,res)=>{


    try{


        const {
            email,
            password
        }=req.body;




        if(!email || !password){

            return res.status(400).json({

                success:false,

                message:
                "Email and password are required"

            });

        }





        const user =
        await prisma.user.findUnique({

            where:{
                email
            }

        });




        if(!user){

            return res.status(401).json({

                success:false,

                message:
                "Invalid email or password"

            });

        }





        const validPassword =
        await bcrypt.compare(

            password,

            user.password

        );




        if(!validPassword){

            return res.status(401).json({

                success:false,

                message:
                "Invalid email or password"

            });

        }




        if(!user.isEmailVerified){

            return res.status(403).json({

                success:false,

                message:
                "Please verify your email first"

            });

        }




        const token =
        jwt.sign(

            {

                id:user.id,

                role:user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn:"7d"

            }

        );




        return res.json({

            success:true,

            message:
            "Login successful",

            data:{

                user:{

                    id:user.id,

                    name:user.name,

                    email:user.email,

                    role:user.role

                },

                token

            }

        });



    }catch(error){


        console.log(error);


        return res.status(500).json({

            success:false,

            message:
            "Server error"

        });

    }

};









// ================= FORGOT PASSWORD =================


export const forgotPassword = async(req,res)=>{


    try{


        const {
            email
        }=req.body;



        const user =
        await prisma.user.findUnique({

            where:{
                email
            }

        });




        if(!user){

            return res.status(404).json({

                success:false,

                message:
                "User not found"

            });

        }




        const otp =
        Math.floor(
            100000 + Math.random()*900000
        ).toString();



        const otpHash =
        await bcrypt.hash(
            otp,
            10
        );




        await prisma.passwordResetToken.create({

            data:{

                userId:user.id,

                otpHash,

                expiresAt:
                new Date(
                    Date.now()+10*60*1000
                )

            }

        });





        await sendPasswordResetOtp(

            email,

            otp

        );





        return res.json({

            success:true,

            message:
            "Password reset OTP sent to your email"

        });



    }catch(error){


        console.log(error);


        return res.status(500).json({

            success:false,

            message:
            "Something went wrong"

        });

    }

};









// ================= VERIFY RESET OTP =================


export const verifyResetOtp = async(req,res)=>{


    try{


        const {
            email,
            otp
        }=req.body;




        const user =
        await prisma.user.findUnique({

            where:{
                email
            }

        });



        const token =
        await prisma.passwordResetToken.findFirst({

            where:{

                userId:user.id,

                used:false,

                expiresAt:{
                    gt:new Date()
                }

            },

            orderBy:{
                createdAt:"desc"
            }

        });





        if(!token){

            return res.status(400).json({

                success:false,

                message:
                "OTP expired or invalid"

            });

        }





        const valid =
        await bcrypt.compare(

            otp,

            token.otpHash

        );




        if(!valid){

            return res.status(400).json({

                success:false,

                message:
                "Invalid OTP"

            });

        }




        return res.json({

            success:true,

            message:
            "OTP verified successfully"

        });



    }catch(error){


        console.log(error);


        return res.status(500).json({

            success:false,

            message:
            "Something went wrong"

        });

    }

};









// ================= RESET PASSWORD =================


export const resetPassword = async(req,res)=>{


    try{


        const {
            email,
            otp,
            newPassword
        }=req.body;




        const user =
        await prisma.user.findUnique({

            where:{
                email
            }

        });




        const token =
        await prisma.passwordResetToken.findFirst({

            where:{

                userId:user.id,

                used:false,

                expiresAt:{
                    gt:new Date()
                }

            },

            orderBy:{
                createdAt:"desc"
            }

        });




        if(!token){

            return res.status(400).json({

                success:false,

                message:
                "OTP expired or invalid"

            });

        }




        const validOtp =
        await bcrypt.compare(

            otp,

            token.otpHash

        );




        if(!validOtp){

            return res.status(400).json({

                success:false,

                message:
                "Invalid OTP"

            });

        }




        const hashedPassword =
        await bcrypt.hash(

            newPassword,

            10

        );




        await prisma.$transaction([


            prisma.user.update({

                where:{
                    id:user.id
                },

                data:{

                    password:
                    hashedPassword

                }

            }),



            prisma.passwordResetToken.update({

                where:{
                    id:token.id
                },

                data:{

                    used:true

                }

            })


        ]);




        return res.json({

            success:true,

            message:
            "Password reset successfully"

        });



    }catch(error){


        console.log(error);


        return res.status(500).json({

            success:false,

            message:
            "Something went wrong"

        });

    }

};
export const verifyEmail = async (req, res) => {

    try {

        const {
            email,
            otp
        } = req.body;


        if(!email || !otp){

            return res.status(400).json({

                success:false,

                message:"Email and OTP are required"

            });

        }



        // Find user

        const user = await prisma.user.findUnique({

            where:{
                email
            }

        });



        if(!user){

            return res.status(404).json({

                success:false,

                message:"User not found"

            });

        }




        // Find OTP

        const verificationToken =
        await prisma.emailVerificationToken.findFirst({

            where:{

                userId:user.id,

                used:false,

                expiresAt:{
                    gt:new Date()
                }

            },

            orderBy:{

                createdAt:"desc"

            }

        });




        if(!verificationToken){

            return res.status(400).json({

                success:false,

                message:"OTP expired or invalid"

            });

        }





        // Compare OTP

        const isValidOTP =
        await bcrypt.compare(

            otp,

            verificationToken.otpHash

        );




        if(!isValidOTP){

            return res.status(400).json({

                success:false,

                message:"Invalid OTP"

            });

        }





        // Activate user

        await prisma.user.update({

            where:{
                id:user.id
            },

            data:{

                isActive:true,

                isEmailVerified:true

            }

        });





        // Mark OTP used

        await prisma.emailVerificationToken.update({

            where:{
                id:verificationToken.id
            },

            data:{

                used:true

            }

        });





        return res.json({

            success:true,

            message:"Email verified successfully. You can login now."

        });



    } catch(error){

        console.log(error);


        return res.status(500).json({

            success:false,

            message:"Something went wrong"

        });

    }

};
