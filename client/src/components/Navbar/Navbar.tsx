import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import Logo from "src/ui/Images/Logo";

const Navbar: React.FC = () => {
  return (
    <Flex h="10%" w="100%">
      <Flex justifyContent="space-between" w="90%" pt="6" align="center">
        <Box w="50%">
          <Image as={Logo} />
        </Box>
        <Flex justify="space-between" w="50%" align="center">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Panels</Link>
          <Link>Service</Link>
          <Button colorScheme="teal" variant="outline">
            Get in touch
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
