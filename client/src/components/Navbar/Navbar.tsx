import { Flex } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex h="10%" w="100%">
      <Flex justifyContent="space-between">
        <Image src="/logo.svg" alt="Navbar Image" boxSize="200" />
      </Flex>
    </Flex>
  );
};

export default Navbar;