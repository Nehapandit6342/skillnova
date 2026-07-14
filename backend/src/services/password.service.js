import prisma from "../config/prisma.js";
import crypto from "crypto";

import { sendPasswordResetOtp } 
from "./email.service.js";



function generateOTP(){

    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();

}



export const forgotPasswordService = async(email)=>{


    const user = await prisma.user.findUnique({

        where:{
            email
        }

    });



    if(!user){

        throw new Error(
            "User not found"
        );

    }



    const otp = generateOTP();



    const otpHash = crypto
        .createHash("sha256")
        .update(otp)
        .digest("hex");



    await prisma.passwordResetToken.create({

        data:{

            userId:user.id,

            otpHash,

            expiresAt:
                new Date(
                    Date.now() + 10 * 60 * 1000
                )

        }

    });



    await sendPasswordResetOtp(
        email,
        otp
    );

};