import bcrypt from "bcryptjs";
import prisma from "./src/config/prisma.js";

const resetPassword = async () => {
  try {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await prisma.user.update({
      where: {
        email: "admin@test.com",
      },
      data: {
        password: hashedPassword,
      },
    });

    console.log("✅ Admin password updated successfully");

    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

resetPassword();