import React from 'react';
import { Flex, Box, Input, Button, Spinner, Text } from '@chakra-ui/react';
import { useChat } from '../../hooks/useChat';
import BotMessage from './BotMessage'; 
import UserMessage from './UserMessage'; 
import { SendHorizontal, User } from 'lucide-react'; 

const Chat: React.FC = () => {
  const {
    chatContainerRef, // Reference to the chat container element
    dialogue,
    currentMessage, // Current message being typed by the user
    isLoading, 
    handleSendMessage, 
    handleKeyPress, // Function to handle key presses (e.g., Enter key)
    setCurrentMessage, // Function to update current message state
  } = useChat();

  return (
    <Flex
     w="100wh" 
     h="100vh" 
     direction="column" 
     align='center'
     >
      <Text fontSize="50px">Have more questions? Ask our trained AI assistant!</Text>
      <Box
        ref={chatContainerRef}
        flex="1"
        overflow="auto"
        w="90%"
        maxHeight="100%"
        mb="2"
      >
        {dialogue.map((message, index) => (
          message.isUser ? <UserMessage key={index} message={message}/> : <BotMessage key={index} message={message}/>
        ))}
      </Box>
      <Flex pb="6" width="90%">
        <Input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your question here!"
          _placeholder={{color: 'green.400'}}
          focusBorderColor='black.400'
          borderColor='teal'
          bg="white"
          mr={2}
        />
        <Button colorScheme="teal" onClick={handleSendMessage}>
          {isLoading ? <Spinner size="sm" /> : <SendHorizontal />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Chat;

