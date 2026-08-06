/*
  Warnings:

  - You are about to drop the column `appliedAt` on the `applications` table. All the data in the column will be lost.
  - The `status` column on the `applications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[studentId,internshipId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'REVIEWING', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "appliedAt",
ADD COLUMN     "availability" TEXT,
ADD COLUMN     "coverLetter" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE UNIQUE INDEX "applications_studentId_internshipId_key" ON "applications"("studentId", "internshipId");
