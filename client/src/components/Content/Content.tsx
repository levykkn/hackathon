import React from "react";
import { Flex } from "@chakra-ui/react";
import ContentLayout from "./ContentLayout/ContentLayout";
import MainImage from "./MainImage/MainImage";


const Content: React.FC = () => {
  return (
    <Flex h="90%" w="100%" justifyContent="center" align="center">
      <Flex w="90%" h="80%">
        <MainImage />
        <ContentLayout />
      </Flex>
    </Flex>
  );
};

export default Content;
