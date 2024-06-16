-- CreateTable
CREATE TABLE "Hotels" (
    "id" TEXT NOT NULL,
    "HotelName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "HashedPassword" TEXT NOT NULL,
    "SaltPassword" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Speciality" TEXT[],
    "Ratings" DOUBLE PRECISION NOT NULL,
    "HotelLogo" BYTEA NOT NULL,
    "Contacts" TEXT[],
    "Website" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel_Schedule" (
    "id" TEXT NOT NULL,
    "Day" TEXT NOT NULL,
    "OpeningTime" TEXT NOT NULL,
    "ClosingTime" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,

    CONSTRAINT "Hotel_Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hotels_HotelName_key" ON "Hotels"("HotelName");

-- CreateIndex
CREATE UNIQUE INDEX "Hotels_Email_key" ON "Hotels"("Email");

-- AddForeignKey
ALTER TABLE "Hotel_Schedule" ADD CONSTRAINT "Hotel_Schedule_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
