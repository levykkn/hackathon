import React from "react";
import { Flex } from "@chakra-ui/react";
import ArticleHeading from "../ArticleHeading/ArticleHeading";
import ContactButton from "../ContactButton/ContactButton";

const ContentLayout: React.FC = () => (
  <Flex direction="column" w="100%" h="100%" justify="space-between">
    <ArticleHeading />
    <ContactButton />
  </Flex>
);

export default ContentLayout;
