-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "benefits" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "openings" INTEGER,
ADD COLUMN     "qualifications" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "responsibilities" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "selectionProcess" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "workMode" TEXT;
