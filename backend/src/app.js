import studentRoutes from "./routes/student.routes.js";
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
