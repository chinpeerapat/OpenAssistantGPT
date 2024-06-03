import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Akhilesh Rangani',
      email: 'akhileshrangani4@gmail.com',
      createdAt: new Date(),
      // Additional fields can be added here
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      createdAt: new Date(),
      // Additional fields can be added here
    },
  });

  // Create OpenAIConfig
  await prisma.openAIConfig.create({
    data: {
      userId: user1.id,
      globalAPIKey: 'sk-proj-OakqASj5h26sMAPeLVPOT3BlbkFJSMkmHd54zvJMmznvfwTL',
      createdAt: new Date(),
    },
  });

  // Create Chatbot Models
  const chatbotModel1 = await prisma.chatbotModel.create({
    data: {
      name: 'Model 1',
    },
  });

  // Create Chatbots
  const chatbot1 = await prisma.chatbot.create({
    data: {
      name: 'Chatbot 1',
      userId: user1.id,
      openaiId: 'openai-123',
      openaiKey: 'sk-proj-OakqASj5h26sMAPeLVPOT3BlbkFJSMkmHd54zvJMmznvfwTL',
      modelId: chatbotModel1.id,
      welcomeMessage: 'Welcome to Chatbot 1',
      createdAt: new Date(),
    },
  });

  // Create Files
  const file1 = await prisma.file.create({
    data: {
      userId: user1.id,
      name: 'File 1',
      openAIFileId: 'file-123',
      blobUrl: 'http://example.com/blob1',
      createdAt: new Date(),
    },
  });

  const file2 = await prisma.file.create({
    data: {
      userId: user2.id,
      name: 'File 2',
      openAIFileId: 'file-456',
      blobUrl: 'http://example.com/blob2',
      createdAt: new Date(),
    },
  });

  // Create ChatbotFiles
  await prisma.chatbotFiles.create({
    data: {
      chatbotId: chatbot1.id,
      fileId: file1.id,
      assignedAt: new Date(),
    },
  });


  // You can extend this to create other records for ChatbotErrors, ClientInquiries, etc.
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
