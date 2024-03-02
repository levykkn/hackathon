import { Flex } from "@chakra-ui/react";
import React from "react";
import Content from "src/components/Content/Content";
import Navbar from "src/components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <Flex direction="column" h="100vh" w="100wh">
      <Navbar />
      <Content />
    </Flex>
  );
};

export default Home;