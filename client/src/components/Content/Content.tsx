import { Box, Button, Flex, Heading, Image} from "@chakra-ui/react"
import React from "react"

const Content: React.FC = () => {
    return (
        <Flex h="90%" w="100%" >
            <Flex w="100%" h="80%">
                <Box>
                    <Image src="main.jpeg"></Image>
                </Box>
                <Flex direction="column">
                    <Heading as="h1">Fast charging batteries will change the future</Heading>
                    <Heading as="h6" size="xs">Unlocking the potential of recharging batteries to deliver a sustainable and clean energy solution, powering a greener and brighter tommorow</Heading>
                    <Button colorScheme="teal" variant="outline">
            Get in touch
          </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Content;