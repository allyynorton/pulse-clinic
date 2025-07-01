-- CreateTable
CREATE TABLE "ConsultBooking" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConsultBooking_pkey" PRIMARY KEY ("id")
);
