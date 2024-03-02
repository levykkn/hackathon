import React from 'react';
import { Flex, Box, Input, Button, Spinner } from '@chakra-ui/react';
import { useChat } from '../../hooks/useChat';
import  BotMessage  from './BotMessage'
import  UserMessage  from './UserMessage'
import { SendHorizontal, User } from 'lucide-react';

const Chat: React.FC = () => {
  const {
    chatContainerRef,
    dialogue,
    currentMessage,
    isLoading,
    handleSendMessage,
    handleKeyPress,
    setCurrentMessage,
  } = useChat();

  return (
    <Flex w="60%" h="100%" direction="column">
      <Box
        ref={chatContainerRef}
        flex="1"
        overflow="auto"
        w="100%"
        maxHeight="100%"
        p="3"
        mb="2"
      >
        {
          dialogue.map((message, index) => (
            message.isUser ? (
              <UserMessage key={index} message={message}/>
            ) : (
              <BotMessage key={index} message={message}/>
            )
          ))
        }
      </Box>
      <Flex pb="6">
        <Input
          flex="1"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress} // depreceated should be updated
          placeholder="Enter a prompt here..."
          bg="white"
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          {isLoading ? <Spinner size="sm" /> : <SendHorizontal />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Chat;