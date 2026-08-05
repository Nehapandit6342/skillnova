import prisma from "./config/prisma.js";
import bcrypt from "bcryptjs";

const createAdmin = async () => {

  const password = await bcrypt.hash(
    "nishu12345",
    10
  );

  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@skillnova.com",
      password,
      role: "ADMIN",
    },
  });

  console.log("Admin created:", admin);

  await prisma.$disconnect();
};

createAdmin();