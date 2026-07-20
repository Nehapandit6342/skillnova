import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./config/prisma.js";

import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import testRoutes from "./routes/test.routes.js";
import employerRoutes from "./routes/employer.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import internshipRoutes from "./routes/internship.routes.js"; // ✅ New Import

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
<<<<<<< HEAD
=======

// Routes
>>>>>>> 5521b9e (Connect admin dashboard and students module with backend)
app.use("/api/test", testRoutes);

app.use("/api/auth", authRoutes);
<<<<<<< HEAD
app.use("/api/students", studentRoutes);
=======

app.use("/api/employer", employerRoutes);

app.use("/api/admin", adminRoutes);

// ✅ Internship Routes
app.use("/api/internships", internshipRoutes);
>>>>>>> 5521b9e (Connect admin dashboard and students module with backend)

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
  } catch (error) {
    console.error("Database connection failed", error);
  }
}

<<<<<<< HEAD
startServer();
=======
startServer();
>>>>>>> 5521b9e (Connect admin dashboard and students module with backend)
