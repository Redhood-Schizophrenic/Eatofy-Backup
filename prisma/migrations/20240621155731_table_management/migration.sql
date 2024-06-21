-- CreateTable
CREATE TABLE "Tables" (
    "id" TEXT NOT NULL,
    "TableName" TEXT NOT NULL,
    "TableDescription" TEXT NOT NULL,
    "CategoryId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "PersonsOccupiable" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableCategory" (
    "id" TEXT NOT NULL,
    "CategoryName" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TableCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tables" ADD CONSTRAINT "Tables_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "TableCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tables" ADD CONSTRAINT "Tables_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableCategory" ADD CONSTRAINT "TableCategory_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
