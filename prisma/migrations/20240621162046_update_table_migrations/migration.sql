/*
  Warnings:

  - Changed the type of `PersonsOccupiable` on the `Tables` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tables" DROP COLUMN "PersonsOccupiable",
ADD COLUMN     "PersonsOccupiable" DECIMAL(65,30) NOT NULL;
