import React, {useEffect, useState} from 'react';
import { Avatar, Box, Grid, GridItem, Text, VStack, Flex } from '@chakra-ui/react';
import { Message } from '../../types'

interface BotMessageProps{
    message: Message;
}


export const BotMessage: React.FC<BotMessageProps> = ({message}) => {
    const {content}=message;
    const [displayContent, setDisplayContent] = useState('');
    const typingAnimation = true;

    //Function has to be separated to utils if possible
    useEffect(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayContent(content.slice(0, i));
        i++;
  
        if (i > content.length) {
          clearInterval(intervalId);
        }
      }, 1);
  
      return () => clearInterval(intervalId);
    }, [content]);

      return(
        <Flex
        justify='start'
        align='start'
        >
          <VStack
          align='start'   
          spacing={3}
          >     
          <Box
            p={3}
            boxShadow= "md"
            borderRadius="md"
            my={1}
            bg= 'white'
            color="gray.900"
          >
          <Grid
            templateAreas={`"avatar navbar"
                              "avatar text"`}
          >
          <GridItem area={'avatar'}>
          <Avatar my={0.5}/>
          </GridItem>
          <GridItem pl={3} area={'navbar'} >
          <Text>Nyobolt Support</Text>
          </GridItem>
          <GridItem pl={3} pt={2.5} area={'text'}>
            {typingAnimation ? displayContent : content}
          </GridItem>
          </Grid>
          </Box>
        
        </VStack>
        </Flex>
      );
};

export default BotMessage;