-- AlterTable
ALTER TABLE "chatbots" ADD COLUMN     "chatInputStyle" TEXT NOT NULL DEFAULT 'default',
ADD COLUMN     "rightToLeftLanguage" BOOLEAN NOT NULL DEFAULT false;
