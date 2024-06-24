/*
  Warnings:

  - Added the required column `FSSAICode` to the `Hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotels" ADD COLUMN     "FSSAICode" TEXT NOT NULL,
ALTER COLUMN "Website" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Hotel_Owners" (
    "id" TEXT NOT NULL,
    "OwnerName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "HashedPassword" TEXT NOT NULL,
    "SaltPassword" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hotel_Owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel_Tasks" (
    "id" TEXT NOT NULL,
    "TaskName" TEXT NOT NULL,
    "CompletionDate" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hotel_Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCategories" (
    "id" TEXT NOT NULL,
    "CategoryName" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "StockName" TEXT NOT NULL,
    "GSTRate" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "CategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchasedStock" (
    "id" TEXT NOT NULL,
    "ItemId" TEXT NOT NULL,
    "Quantity" DECIMAL(65,30) NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "GSTAmount" DOUBLE PRECISION NOT NULL,
    "Status" TEXT NOT NULL,
    "SupplierId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchasedStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "id" TEXT NOT NULL,
    "SupplierName" TEXT NOT NULL,
    "Contact" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "GSTIN" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hotel_Owners" ADD CONSTRAINT "Hotel_Owners_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel_Tasks" ADD CONSTRAINT "Hotel_Tasks_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCategories" ADD CONSTRAINT "ItemCategories_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "ItemCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedStock" ADD CONSTRAINT "PurchasedStock_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedStock" ADD CONSTRAINT "PurchasedStock_SupplierId_fkey" FOREIGN KEY ("SupplierId") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedStock" ADD CONSTRAINT "PurchasedStock_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suppliers" ADD CONSTRAINT "Suppliers_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
