-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeSubscriptionStatus" TEXT;

-- CreateTable
CREATE TABLE "ChatbotMessagesExport" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blobUrl" TEXT NOT NULL,
    "blobDownloadUrl" TEXT NOT NULL,
    "lastXDays" INTEGER NOT NULL,
    "chatbotId" TEXT NOT NULL,

    CONSTRAINT "ChatbotMessagesExport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatbotMessagesExport" ADD CONSTRAINT "ChatbotMessagesExport_chatbotId_fkey" FOREIGN KEY ("chatbotId") REFERENCES "chatbots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
