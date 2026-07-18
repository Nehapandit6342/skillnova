import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./config/prisma.js";
import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import employerRoutes from "./routes/employer.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/test", testRoutes);

// Routes
app.use("/api/auth", authRoutes);

app.use(
    "/api/employer",
    employerRoutes
);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "SkillNova API is running 🚀",
    });
});


async function startServer() {
    try {

        await prisma.$connect();

        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch(error) {

        console.error("Database connection failed", error);

    }
}


startServer();
