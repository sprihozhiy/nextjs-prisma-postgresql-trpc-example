/*
  Warnings:

  - Added the required column `subscriptionPlan` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokens` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subscriptionPlan" TEXT NOT NULL,
ADD COLUMN     "tokens" INTEGER NOT NULL;
