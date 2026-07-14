import transporter from "../config/mail.js";



export const sendPasswordResetOtp = async(email, otp)=>{


    await transporter.sendMail({

        from:`"SkillNova" <${process.env.SMTP_USER}>`,

        to:email,

        subject:"SkillNova Password Reset OTP",


        text:`

Your SkillNova password reset OTP is:

${otp}


This OTP will expire in 10 minutes.


If you did not request this password reset, ignore this email.

        `

    });


};




export const sendEmailVerificationOtp = async(email, otp)=>{


    await transporter.sendMail({

        from:`"SkillNova" <${process.env.SMTP_USER}>`,

        to:email,

        subject:"Verify your SkillNova account",


        text:`

Welcome to SkillNova 🚀


Your email verification OTP is:

${otp}


This code expires in 10 minutes.


        `

    });


};