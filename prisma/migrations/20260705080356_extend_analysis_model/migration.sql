/*
  Warnings:

  - You are about to drop the column `marketAnalysis` on the `Analysis` table. All the data in the column will be lost.
  - Added the required column `competitorInsights` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `executiveSummary` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketValidation` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opportunities` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallScore` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `risks` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strengths` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaknesses` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Analysis" DROP COLUMN "marketAnalysis",
ADD COLUMN     "competitorInsights" TEXT NOT NULL,
ADD COLUMN     "executiveSummary" TEXT NOT NULL,
ADD COLUMN     "marketValidation" TEXT NOT NULL,
ADD COLUMN     "opportunities" TEXT NOT NULL,
ADD COLUMN     "overallScore" TEXT NOT NULL,
ADD COLUMN     "risks" TEXT NOT NULL,
ADD COLUMN     "strengths" TEXT NOT NULL,
ADD COLUMN     "weaknesses" TEXT NOT NULL;
