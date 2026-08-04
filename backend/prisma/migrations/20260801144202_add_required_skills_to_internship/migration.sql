-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "requiredSkills" TEXT[] DEFAULT ARRAY[]::TEXT[];
