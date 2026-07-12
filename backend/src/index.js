import express from "express";
import prisma from "./config/prisma.js";

const app = express();

const PORT = process.env.PORT || 5000;


async function startServer(){

    try {

        await prisma.$connect();

        console.log("Database connected successfully");

        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        });

    } catch(error){

        console.error("Database connection failed",error);

    }

}


startServer();