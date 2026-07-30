import prisma from "./src/config/prisma.js";
import bcrypt from "bcryptjs";

const createAdmin = async () => {

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );


  const admin = await prisma.user.create({

    data: {

      name: "Admin",

      email: "admin@test.com",

      password: hashedPassword,

      role: "ADMIN",

      isActive: true,

      isEmailVerified: true

    }

  });


  console.log("Admin created:", admin.email);


  process.exit();

};


createAdmin();