/*
  Warnings:

  - The values [REVIEWING] on the enum `ApplicationStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `isFeatured` on the `employer_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `employer_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `internships` table. All the data in the column will be lost.
  - You are about to drop the column `workMode` on the `internships` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faqs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimonials` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApplicationStatus_new" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');
ALTER TABLE "public"."applications" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "applications" ALTER COLUMN "status" TYPE "ApplicationStatus_new" USING ("status"::text::"ApplicationStatus_new");
ALTER TYPE "ApplicationStatus" RENAME TO "ApplicationStatus_old";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";
DROP TYPE "public"."ApplicationStatus_old";
ALTER TABLE "applications" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropIndex
DROP INDEX "applications_studentId_internshipId_key";

-- AlterTable
ALTER TABLE "employer_profiles" DROP COLUMN "isFeatured",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "internships" DROP COLUMN "duration",
DROP COLUMN "workMode";

-- DropTable
DROP TABLE "companies";

-- DropTable
DROP TABLE "faqs";

-- DropTable
DROP TABLE "testimonials";

-- DropEnum
DROP TYPE "CompanyStatus";
