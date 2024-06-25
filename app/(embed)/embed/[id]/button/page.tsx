import ChatbotButton from '@/components/chatbot-button';
import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

export interface ChatComponentProps {
  params: { id: string };
}

export default async function Button({ params }: ChatComponentProps) {
  
    <iframe src="http://localhost:3000/embed/clxdvhnl3000ewhe4hi1z5s47/window"
    style={{ overflow: 'hidden', height: '80vh', border: 'none', width: '480px', bottom: '-30px' }} allowFullScreen
    ></iframe>
   

  const chatbot = await db.chatbot.findUnique({
    where: {
      id: params.id
    }
  });

  if (!chatbot) {
    return notFound();
  }

  return (
    <ChatbotButton textColor={chatbot?.bubbleTextColor} backgroundColor={chatbot?.bubbleColor} />
  )
}