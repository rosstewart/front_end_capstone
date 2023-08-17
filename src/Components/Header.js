import FullScreenWidth from "./FullScreenWidth";
import { Heading, VStack, HStack, Box, Grid } from "@chakra-ui/react";

function Header() {
    const greeting = "Hello";
    const bio1 = "<NAME>";
    const bio2 = "<NAME>";
    return (
        <header>
            <VStack
                style={{
                    width: '100vw', // Full viewport width
                    height: '492px',
                }}
                backgroundColor="#495E57">
                <Box height="96px" />
                <div id="headerGrid">
                    <div id="headerTitles">
                        <h1 className="displayText yellowText">Little Lemon</h1>
                        <h2 style={{ textAlign: "left" }} className="subTitleText whiteText">Chicago</h2>
                    </div>
                    <div id="headerPhoto">
                        <h1 className="displayText yellowText">Little Lemon</h1>
                        <h2 style={{ textAlign: "left" }} className="subTitleText whiteText">Chicago</h2>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-6">
                            <h1 className="displayText yellowText">Little Lemon</h1>
                            <h2 style={{ textAlign: "left" }} className="subTitleText whiteText">Chicago</h2>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="displayText yellowText">Little Lemon</h1>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="displayText yellowText">Little Lemon</h1>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="displayText yellowText">Little Lemon</h1>
                        </div>
                    </div> */}
                </div>
                {/* <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">Nested column 1</div>
                        <div className="col-lg-6">Nested column 2</div>
                    </div>
                </div> */}
                {/* <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                    {children}
                </VStack> */}
            </VStack>
            {/* <VStack background="#495E57" height="406px">
                <div className="row">
                    <div className="col-lg-6 offset-lg-2">
                        <h1 className="displayText yellowText">Little Lemon</h1>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="displayText yellowText">Little Lemon</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">Nested column 1</div>
                        <div className="col-lg-6">Nested column 2</div>
                    </div>
                </div> */}
            {/* <Box
                    display="grid"
                    gridTemplateColumns="repeat(10,minmax(0,1fr))"
                    grid="repeat(10,minmax(0,1fr))"
                >
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box backgroundColor="blue">Testitgiroegjorgrio</Box>
                    <Box  backgroundColor="blue">Testitgiroegjorgrio</Box>
                </Box> */}
            {/* <Box
                    maxWidth="860px"
                    margin="0 auto"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={4}
                    py={4}
                    backgroundColor="red"
                >
                    <VStack width="100px" height="100px" backgroundColor="blue">
                        {/* <a href="/">
                            <img id="logo" src={Logo} alt="logo" />
                        </a> */}
            {/* </Box>
                    <HStack spacing="1em">
                        <a href="/" className="menu-link">Home</a>
                        <a href="/" className="menu-link">About</a>
                        <a href="/" className="menu-link">Menu</a>
                        <a href="/" className="menu-link">Reservations</a>
                        <a href="/" className="menu-link">Order Online</a>
                        <a href="/" className="menu-link">Log in</a>
                    </HStack> */}
            {/* <VStack>
                        <Heading as="h4" fontSize="lg">{greeting}</Heading>
                        <Box height={25}></Box>
                        <Heading as="h1" fontSize="5xl">{bio1}</Heading>
                        <Heading as="h1" fontSize="5xl">{bio2}</Heading>
                    </VStack> */}
            {/* </Box> */}
            {/* </VStack> */}
        </header>
    );
}

export default Header;