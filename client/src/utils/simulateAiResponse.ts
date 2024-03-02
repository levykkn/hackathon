import { Message } from '../types';

export const simulateAiResponse = async (
  userMessage: Message,
  setDialogue: React.Dispatch<React.SetStateAction<Message[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsAiTyping: React.Dispatch<React.SetStateAction<boolean>>,
  scrollToBottom: () => void
) => {
  setIsLoading(true);
  setIsAiTyping(true);

  try {
    const response = await fetch('https://hipsum.co/api/?type=hipster-centric&sentences=5');
    const responseData = await response.json();
    const responseText = responseData[0];

    const responseMessage: Message = {
      content: responseText,
      isUser: false,
      displayContent: ''
    };

    setDialogue(prevDialogue => [...prevDialogue, responseMessage]);
    scrollToBottom();
  } catch (error) {
    console.error('Failed to fetch AI response:', error);
  }

  setIsLoading(false);
  setIsAiTyping(false);
};