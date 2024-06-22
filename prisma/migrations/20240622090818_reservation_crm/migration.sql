-- CreateTable
CREATE TABLE "Customers" (
    "id" TEXT NOT NULL,
    "CustomerName" TEXT NOT NULL,
    "Contact" TEXT,
    "Email" TEXT,
    "HotelId" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableReservation" (
    "id" TEXT NOT NULL,
    "Occasion" TEXT,
    "Date" TEXT NOT NULL,
    "Time" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "TableId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,

    CONSTRAINT "TableReservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableReservation" ADD CONSTRAINT "TableReservation_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableReservation" ADD CONSTRAINT "TableReservation_TableId_fkey" FOREIGN KEY ("TableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableReservation" ADD CONSTRAINT "TableReservation_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
