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
    <Flex
     w="100wh" 
     h="100vh" 
     direction="column" 
     p="5%"
     >
      <Box
        ref={chatContainerRef}
        flex="1"
        overflow="auto"
        w="100%"
        maxHeight="100%"
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
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress} // depreceated should be updated
          placeholder="Enter your question here!"
          _placeholder={{color: 'green.400'}}
          focusBorderColor='green'
          borderColor='green'
          bg="white"
          mr={2}
        />
        <Button colorScheme="green" onClick={handleSendMessage}>
          {isLoading ? <Spinner size="sm" /> : <SendHorizontal />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Chat;