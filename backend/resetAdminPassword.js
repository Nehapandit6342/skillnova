import prisma from "./src/config/prisma.js";
import bcrypt from "bcryptjs";

const resetPassword = async () => {

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  await prisma.user.update({

    where:{
      email:"admin@test.com"
    },

    data:{
      password: hashedPassword
    }

  });


  console.log("Admin password updated");

  process.exit();

};


resetPassword();