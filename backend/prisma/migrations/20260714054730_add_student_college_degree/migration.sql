/*
  Warnings:

  - You are about to drop the column `education` on the `student_profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_profiles" DROP COLUMN "education",
ADD COLUMN     "college" TEXT,
ADD COLUMN     "degree" TEXT;
