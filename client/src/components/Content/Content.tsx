import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Content: React.FC = () => {
  return (
    <Flex h="90%" w="100%" justifyContent="center" align="center">
      <Flex w="90%" h="80%">
        <Box>
          <Image src="/main.jpeg" alt="Main Image" w="90%"/>
        </Box>
        <Flex direction="column" w="100%" p="5">
          <Heading as="h1">
            Fast charging batteries will change the future
          </Heading>
          <Heading as="h6" size="xs">
            Unlocking the potential of recharging batteries to deliver a
            sustainable and clean energy solution, powering a greener and
            brighter tomorrow
          </Heading>
          <Button colorScheme="teal" variant="outline">
            Get in touch
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;