import React from 'react';
import { Message } from '../types';
import { simulateAiResponse } from '../utils/simulateAiResponse';
import { scrollToBottom } from '../utils/scrollToBottom';

export const useChat = () => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const [dialogue, setDialogue] = React.useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isAiTyping, setIsAiTyping] = React.useState(false);

  const handleSendMessage = React.useCallback(() => {
    if (currentMessage.trim() !== '') {
      const userMessage: Message = {
        content: currentMessage, isUser: true,
        displayContent: ''
      };
      setDialogue(prevDialogue => [...prevDialogue, userMessage]);
      setCurrentMessage('');
      setIsLoading(true);
      setIsAiTyping(true);
      simulateAiResponse(userMessage, setDialogue, setIsLoading, setIsAiTyping, scrollToBottom);
    }
  }, [currentMessage]);

  const handleKeyPress = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isAiTyping) {
        event.preventDefault();
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage, isAiTyping]
  );

  return {
    chatContainerRef,
    dialogue,
    currentMessage,
    isLoading,
    handleSendMessage,
    handleKeyPress,
    setCurrentMessage,
  };
};