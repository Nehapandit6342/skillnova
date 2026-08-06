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
export const sendWelcomeEmail = async(
    email,
    name,
    role
)=>{


    await transporter.sendMail({


        from:`"SkillNova" <${process.env.SMTP_USER}>`,


        to:email,


        subject:"Welcome to SkillNova 🚀",



        html:`


        <div style="
            font-family:Arial,sans-serif;
            background:#f8fafc;
            padding:30px;
        ">


        <div style="
            max-width:600px;
            margin:auto;
            background:white;
            padding:30px;
            border-radius:12px;
            border:1px solid #e5e7eb;
        ">


        <h1 style="
            color:#2563eb;
        ">
            Welcome to SkillNova 🚀
        </h1>



        <p>
            Hello <b>${name}</b>,
        </p>



        <p>
            Thank you for joining SkillNova as a 
            <b>${role}</b>.
        </p>



        ${
            role === "STUDENT"

            ?

            `
            <p>
            You can now create your resume,
            improve your skills and apply for
            internship opportunities.
            </p>
            `

            :

            `
            <p>
            You can now create internship posts,
            manage applications and discover
            talented candidates.
            </p>
            `

        }




        <br>


        <p>
        Regards,
        <br>

        <b>
        SkillNova Team
        </b>

        </p>



        </div>


        </div>


        `


    });


};