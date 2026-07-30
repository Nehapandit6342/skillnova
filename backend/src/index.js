import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import prisma from "./config/prisma.js";


// Routes

import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import testRoutes from "./routes/test.routes.js";
import employerRoutes from "./routes/employer.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import internshipRoutes from "./routes/internship.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import candidateRoutes
from "./routes/candidate.routes.js";

dotenv.config();



const app = express();


const PORT = process.env.PORT || 5000;



// ================= MIDDLEWARE =================


app.use(cors());


app.use(express.json());





// ================= ROUTES =================


app.use(
    "/api/test",
    testRoutes
);


app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/students",
    studentRoutes
);



app.use(
    "/api/employer",
    employerRoutes
);



app.use(
    "/api/admin",
    adminRoutes
);



app.use(
    "/api/internships",
    internshipRoutes
);


app.use(
"/api/applications",
applicationRoutes
);

app.use(
"/api/candidates",
candidateRoutes
);

// ================= HEALTH CHECK =================


app.get("/",(req,res)=>{


    res.json({

        message:
        "SkillNova API is running 🚀"

    });


});







// ================= SERVER =================


async function startServer(){


    try{


        await prisma.$connect();


        console.log(
            "Database connected successfully"
        );



        app.listen(PORT,()=>{


            console.log(
                `Server running on port ${PORT}`
            );


        });



    }catch(error){


        console.error(
            "Database connection failed",
            error
        );


    }


}



startServer();