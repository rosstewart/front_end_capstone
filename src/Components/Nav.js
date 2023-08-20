// import { HStack, Box } from "@chakra-ui/react";
// import Logo from "../icons_assets/Logo.svg";
// // import FullScreenWidth from "./FullScreenWidth";
// import "./Nav.css";
// import React, { useEffect, useRef } from "react";

// function Nav() {
//     const previousScrollY = useRef(0);

//     // const handleClick = (anchor) => () => {
//     //     const id = `${anchor}-section`;
//     //     const element = document.getElementById(id);
//     //     if (element) {
//     //         element.scrollIntoView({
//     //             behavior: "smooth",
//     //             block: "start",
//     //         });
//     //     }
//     // };

//     const handleScroll = () => {
//         const currentScrollY = window.scrollY;
//         const header = document.getElementById("nav");

//         if (currentScrollY > previousScrollY.current) {
//             // Scrolling down
//             header.style.transform = "translateY(-200px)";
//         } else {
//             // Scrolling up
//             header.style.transform = "translateY(0)";
//         }

//         previousScrollY.current = currentScrollY;
//     };


//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // return (
//     // <FullScreenWidth>
//     // <nav className="navText">
//     /* <HStack width="860px" display="flex" justifyContent="space-between">
//                     <Box>
//                         <a href=""><img id="logo" src={Logo} alt="logo" /></a>
//                     </Box>
//                     <HStack spacing="15px">
//                         <a href="/">Home</a>
//                         <a href="/">About</a>
//                         <a href="/">Menu</a>
//                         <a href="/">Reservations</a>
//                         <a href="/">Order Online</a>
//                         <a href="/">Log in</a>
//                     </HStack>
//                 </HStack> */
//     return (
//         <nav>
//             <Box
//                 backgroundColor="#FFFFFF"
//                 position="fixed"
//                 top={0}
//                 left={0}
//                 right={0}
//                 translateY={0}
//                 transitionProperty="transform"
//                 transitionDuration=".3s"
//                 transitionTimingFunction="ease-in-out"
//                 id="nav"
//             >
//                 <Box maxWidth="860px" margin="0 auto">
//                     <HStack
//                         px={16}
//                         py={4}
//                         justifyContent="space-between"
//                         alignItems="center"
//                         spacing={8}
//                     >
//                         <a href="/"><img id="logo" src={Logo} alt="logo" /></a>

//                         <HStack spacing="28px">
//                             <a href="/">Home</a>
//                             <a href="/">About</a>
//                             <a href="/">Menu</a>
//                             <a href="/">Reservations</a>
//                             <a href="/">Order Online</a>
//                             <a href="/">Log in</a>
//                         </HStack>

//                     </HStack>
//                 </Box>
//             </Box>
//         </nav>
//         // </nav>
//         // </FullScreenWidth>
//     );
// }

// export default Nav;



import { HStack, VStack, Box, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Logo from "../icons_assets/Logo.svg";
import "./Nav.css";
import React, { useEffect, useRef } from "react";

function Nav() {
    const previousScrollY = useRef(0);

    // const handleClick = (anchor) => () => {
    //     const id = `${anchor}-section`;
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //         });
    //     }
    // };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const header = document.getElementById("nav");

        if (currentScrollY > previousScrollY.current) {
            // Scrolling down
            header.style.transform = "translateY(-200px)";
        } else {
            // Scrolling up
            header.style.transform = "translateY(0)";
        }

        previousScrollY.current = currentScrollY;
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <nav className="navText">
            <Box
                backgroundColor="#FFFFFF"
                position="fixed"
                zIndex={2}
                top={0}
                left={0}
                right={0}
                translateY={0}
                transitionProperty="transform"
                transitionDuration=".3s"
                transitionTimingFunction="ease-in-out"
                id="nav"
            >
                <Box
                    maxWidth="860px"
                    margin="0 auto"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={4}
                    py={4}
                >
                    <Box>
                        <a href="/">
                            <img id="logo" src={Logo} alt="logo" />
                        </a>
                    </Box>
                    <Box display={{ base: "none", md: "block" }}>
                        <HStack spacing="1em" style={{ textDecoration: "underline", textDecorationThickness: "0.5px" }} >
                            <a href="/" className="menu-link">Home</a>
                            <a href="/" className="menu-link">About</a>
                            <a href="/" className="menu-link">Menu</a>
                            <a href="/" className="menu-link">Reservations</a>
                            <a href="/" className="menu-link">Order Online</a>
                            <a href="/" className="menu-link">Log in</a>
                        </HStack>
                    </Box>
                    <IconButton
                        display={{ base: "block", md: "none" }}
                        icon={isOpen ? <MdClose /> : <FaBars />}
                        onClick={isOpen ? onClose : onOpen}
                        variant="ghost"
                        padding="auto"
                    />
                </Box>
                <VStack
                    display={{ base: isOpen ? "flex" : "none", md: "none" }}
                    position="fixed"
                    top={0}
                    right={0}
                    bgColor="gray.100"
                    boxShadow="2xl"
                    h="100vh"
                    py="10px"
                    pl={4}
                    pr={isOpen ? 4 : 0}
                    transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
                    transition=".3s transform"
                    zIndex={2}
                >
                    <IconButton
                        display={{ base: isOpen ? "block" : "none", md: "none" }}
                        mr="auto"
                        padding="auto"
                        icon={<MdClose size="20px" />}
                        size="sm"
                        aria-label="Close"
                        variant="ghost"
                        onClick={onClose}
                    />
                    <Button fontWeight="500" className="menu-link"><a href="/">Home</a></Button>
                    <Button fontWeight="500" href="/" className="menu-link"><a href="/">About</a></Button>
                    <Button fontWeight="500" href="/" className="menu-link"><a href="/">Menu</a></Button>
                    <Button fontWeight="500" href="/" className="menu-link"><a href="/">Reservations</a></Button>
                    <Button fontWeight="500" href="/" className="menu-link"><a href="/">Order Online</a></Button>
                    <Button fontWeight="500" href="/" className="menu-link"><a href="/">Log in</a></Button>
                </VStack>
            </Box>
        </nav>
    );
}

export default Nav;
