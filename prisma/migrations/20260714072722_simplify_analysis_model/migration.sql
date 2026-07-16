/*
  Warnings:

  - You are about to drop the column `competitorInsights` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `executiveSummary` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `marketValidation` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `monetization` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `mvpPlan` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `opportunities` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `overallScore` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `risks` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `roadmap` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `strengths` on the `Analysis` table. All the data in the column will be lost.
  - You are about to drop the column `weaknesses` on the `Analysis` table. All the data in the column will be lost.
  - Added the required column `report` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Analysis" DROP COLUMN "competitorInsights",
DROP COLUMN "executiveSummary",
DROP COLUMN "marketValidation",
DROP COLUMN "monetization",
DROP COLUMN "mvpPlan",
DROP COLUMN "opportunities",
DROP COLUMN "overallScore",
DROP COLUMN "risks",
DROP COLUMN "roadmap",
DROP COLUMN "strengths",
DROP COLUMN "weaknesses",
ADD COLUMN     "report" TEXT NOT NULL;
