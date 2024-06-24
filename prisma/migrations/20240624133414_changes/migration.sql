/*
  Warnings:

  - You are about to drop the column `TaskName` on the `Hotel_Tasks` table. All the data in the column will be lost.
  - Added the required column `Task` to the `Hotel_Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel_Tasks" DROP COLUMN "TaskName",
ADD COLUMN     "Task" TEXT NOT NULL;
