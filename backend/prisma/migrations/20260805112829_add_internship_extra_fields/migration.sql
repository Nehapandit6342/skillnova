/*
  Warnings:

  - The values [SHORTLISTED] on the enum `ApplicationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "InternshipStatus" AS ENUM ('OPEN', 'PAUSED', 'CLOSED');

-- AlterEnum
BEGIN;
CREATE TYPE "ApplicationStatus_new" AS ENUM ('PENDING', 'REVIEWING', 'ACCEPTED', 'REJECTED');
ALTER TABLE "public"."applications" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "applications" ALTER COLUMN "status" TYPE "ApplicationStatus_new" USING ("status"::text::"ApplicationStatus_new");
ALTER TYPE "ApplicationStatus" RENAME TO "ApplicationStatus_old";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";
DROP TYPE "public"."ApplicationStatus_old";
ALTER TABLE "applications" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "applicationEmail" TEXT,
ADD COLUMN     "applicationLink" TEXT,
ADD COLUMN     "companyOverview" TEXT,
ADD COLUMN     "educationLevel" TEXT,
ADD COLUMN     "experienceLevel" TEXT,
ADD COLUMN     "salaryType" TEXT,
ADD COLUMN     "status" "InternshipStatus" NOT NULL DEFAULT 'OPEN';
