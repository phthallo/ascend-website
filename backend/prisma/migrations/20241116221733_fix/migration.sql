/*
  Warnings:

  - Changed the type of `requires` on the `Component` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `requires` on the `Construct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Component" DROP COLUMN "requires",
ADD COLUMN     "requires" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Construct" DROP COLUMN "requires",
ADD COLUMN     "requires" JSONB NOT NULL;
