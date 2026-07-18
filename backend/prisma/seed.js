import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const password = await bcrypt.hash("password123", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Admin User",
        email: "admin@skillnova.com",
        password,
        role: "ADMIN",
      },
      {
        name: "Student User",
        email: "nehapandit9817@gmail.com",
        password,
        role: "STUDENT",
      },
      {
        name: "Employer User",
        email: "employer@skillnova.com",
        password,
        role: "EMPLOYER",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed completed successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
