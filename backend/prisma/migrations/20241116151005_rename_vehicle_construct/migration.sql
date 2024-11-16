/*
  Warnings:

  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "Construct" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "requires" TEXT[],

    CONSTRAINT "Construct_pkey" PRIMARY KEY ("id")
);
