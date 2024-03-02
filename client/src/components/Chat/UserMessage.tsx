import React from 'react';
import { Avatar, Box, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { Message } from '../../types'

interface UserMessageProps {
    message: Message;
}

const UserMessage: React.FC<UserMessageProps> = ({message}) =>{
    const {content} = message;

    return (
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
          borderRadius="md"
          my={1}
          bg="inherit"
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
          <Text>You</Text>
        </GridItem>
        <GridItem pl={3} pt={2.5} area={'text'}>
          {content}
        </GridItem>
      </Grid>
    </Box>
    
    </VStack>
    </Flex>
  );
};

export default UserMessage;
