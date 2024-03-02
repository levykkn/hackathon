import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Content: React.FC = () => {
  return (
    <Flex h="100%" w="100%" justifyContent="center" align="center">
      <Flex w="90%" h="80%">
        <Box>
          <Image 
          src="/main.jpeg" 
          alt="Main Image" 
          w="90%"
          />
        </Box>
        <Flex direction="column" w="100%" h="100%" p="5" justify="space-between">
          <Box>
            <Heading as="h1" pb="5">
              Fast charging batteries will change the future
            </Heading>
            <Heading as="h6" size="xs" pb="5">
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