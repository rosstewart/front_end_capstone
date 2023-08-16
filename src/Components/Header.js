import FullScreenWidth from "./FullScreenWidth";
import { Heading, VStack, Box } from "@chakra-ui/react";

function Header() {
    const greeting = "Hello";
    const bio1 = "<NAME>";
    const bio2 = "<NAME>";
    return (
        <header>
            <FullScreenWidth style={{ width: "100vw" }} background="#495E57" height="406px"
                justifyContent="center"
                alignItems="center"
            >
                <VStack>
                    <Heading as="h4" fontSize="lg">{greeting}</Heading>
                    <Box height={25}></Box>
                    <Heading as="h1" fontSize="5xl">{bio1}</Heading>
                    <Heading as="h1" fontSize="5xl">{bio2}</Heading>
                </VStack>

            </FullScreenWidth>
        </header>
    );
}

export default Header;