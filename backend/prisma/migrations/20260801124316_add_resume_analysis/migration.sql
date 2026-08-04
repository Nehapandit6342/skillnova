/*
  Warnings:

  - The `status` column on the `applications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `resume` on the `student_profiles` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'SHORTLISTED');

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "status",
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "student_profiles" DROP COLUMN "resume",
ADD COLUMN     "resumeText" TEXT,
ADD COLUMN     "resumeUploadedAt" TIMESTAMP(3),
ADD COLUMN     "resumeUrl" TEXT;

-- CreateTable
CREATE TABLE "resume_analysis" (
    "id" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "atsScore" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "strengths" JSONB NOT NULL,
    "weaknesses" JSONB NOT NULL,
    "missingSkills" JSONB NOT NULL,
    "recommendedProjects" JSONB NOT NULL,
    "recommendedInternships" JSONB NOT NULL,
    "careerRoadmap" JSONB NOT NULL,
    "aiModel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resume_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resume_analysis_studentId_key" ON "resume_analysis"("studentId");

-- AddForeignKey
ALTER TABLE "resume_analysis" ADD CONSTRAINT "resume_analysis_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
