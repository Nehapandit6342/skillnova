import bcrypt from "bcryptjs";
import prisma from "./src/config/prisma.js";
console.log("Script started...");

const createEmployer = async () => {
  try {
        console.log("Inside try...");

    // Check if employer already exists

    const existingEmployer = await prisma.user.findUnique({
      where: {
        email: "employer@test.com",
      },
    });
    console.log("Existing employer:", existingEmployer);

    if (existingEmployer) {
      console.log("Employer already exists.");
      process.exit();
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("employer123", 10);

    // Create employer user + profile
    const employer = await prisma.user.create({
      data: {
        name: "ABC Company HR",
        email: "employer@test.com",
        password: hashedPassword,
        role: "EMPLOYER",

        employerProfile: {
          create: {
            companyName: "ABC Technologies",
            website: "https://abcteck.com",
            industry: "Software",
            location: "Kathmandu",
            description: "Leading Software Company",
            companySize: "50-100",
            foundedYear: 2020,
          },
        },
      },
      include: {
        employerProfile: true,
      },
    });

    console.log("✅ Employer created successfully!");
    console.log(employer);

    process.exit();
  } catch (error) {
    console.log("❌ Error:", error);
    process.exit(1);
  }
};

createEmployer();