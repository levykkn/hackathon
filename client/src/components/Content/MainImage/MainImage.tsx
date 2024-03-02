import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const MainImage: React.FC = () => (
  <Flex>
    <Image src="/main.jpeg" alt="Main Image" w="90%" />
  </Flex>
);

export default MainImage;
