import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Content: React.FC = () => {
  return (
    <Flex h="90%" w="100%" justifyContent="center" align="center">
      <Flex w="90%">
        <Box>
          <Image 
          src="/main.jpeg" 
          alt="Main Image" 
          w="90%"
          />
        </Box>
        <Flex direction="column" w="100%" justify="space-between">
          <Box>
            <Heading as="h1" pb="2">
              Fast charging batteries will change the future
            </Heading>
            <Heading as="h6" size="xs" >
              Unlocking the potential of recharging batteries to deliver a
              sustainable and clean energy solution, powering a greener and
              brighter tomorrow
            </Heading>
          </Box>
          <Button colorScheme="teal" variant="outline">
            Get in touch
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;