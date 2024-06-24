-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "Task" TEXT NOT NULL,
    "CompletionDate" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
