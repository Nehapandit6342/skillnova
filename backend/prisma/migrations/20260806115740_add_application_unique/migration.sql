/*
  Warnings:

  - A unique constraint covering the columns `[studentId,internshipId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "applications_studentId_internshipId_key" ON "applications"("studentId", "internshipId");
