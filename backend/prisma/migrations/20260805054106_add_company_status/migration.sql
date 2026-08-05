-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "employer_profiles" ADD COLUMN     "status" "CompanyStatus" NOT NULL DEFAULT 'PENDING';
