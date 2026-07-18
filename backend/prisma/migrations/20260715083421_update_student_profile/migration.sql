-- AlterTable
ALTER TABLE "employer_profiles" ADD COLUMN     "companySize" TEXT,
ADD COLUMN     "foundedYear" INTEGER,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "logo" TEXT;

-- AlterTable
ALTER TABLE "student_profiles" ADD COLUMN     "cgpa" DOUBLE PRECISION,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "portfolio" TEXT,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "semester" INTEGER;
