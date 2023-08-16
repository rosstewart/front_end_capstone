import { HStack, Box } from "@chakra-ui/react";
import Logo from "../icons_assets/Logo.svg";
import FullScreenWidth from "./FullScreenWidth";
import "./Nav.css";
import React, { useEffect, useRef } from "react";

function Nav() {
    const previousScrollY = useRef(0);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

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

    // return (
    // <FullScreenWidth>
    // <nav className="navText">
    /* <HStack width="860px" display="flex" justifyContent="space-between">
                    <Box>
                        <a href=""><img id="logo" src={Logo} alt="logo" /></a>
                    </Box>
                    <HStack spacing="15px">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Menu</a>
                        <a href="/">Reservations</a>
                        <a href="/">Order Online</a>
                        <a href="/">Log in</a>
                    </HStack>
                </HStack> */
    return (
        <nav>
            <Box
                backgroundColor="#FFFFFF"
                position="fixed"
                top={0}
                left={0}
                right={0}
                translateY={0}
                transitionProperty="transform"
                transitionDuration=".3s"
                transitionTimingFunction="ease-in-out"
                id="nav"
            >
                <Box maxWidth="860px" margin="0 auto">
                    <HStack
                        px={16}
                        py={4}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={8}
                    >
                        <a href="/"><img id="logo" src={Logo} alt="logo" /></a>

                        <HStack spacing="28px">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Menu</a>
                            <a href="/">Reservations</a>
                            <a href="/">Order Online</a>
                            <a href="/">Log in</a>
                        </HStack>

                    </HStack>
                </Box>
            </Box>
        </nav>
        // </nav>
        // </FullScreenWidth>
    );
}

export default Nav;




// const Header = () => {
//     const previousScrollY = useRef(0);

//     const handleClick = (anchor) => () => {
//         const id = `${anchor}-section`;
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         }
//     };

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

//     return (
//         <Box
//             position="fixed"
//             top={0}
//             left={0}
//             right={0}
//             translateY={0}
//             transitionProperty="transform"
//             transitionDuration=".3s"
//             transitionTimingFunction="ease-in-out"
//             backgroundColor="#18181b"
//             id="header"
//         >
//             <Box color="white" maxWidth="860px" margin="0 auto">
//                 <HStack
//                     px={16}
//                     py={4}
//                     justifyContent="space-between"
//                     alignItems="center"
//                     spacing={8}
//                 >
//                     <a href=""><img id="logo" src={Logo} alt="logo" /></a>
//                     <HStack spacing={8}>
//                         <a href="/">Home</a>
//                         <a href="/">About</a>
//                         <a href="/">Menu</a>
//                         <a href="/">Reservations</a>
//                         <a href="/">Order Online</a>
//                         <a href="/">Log in</a>
//                     </HStack>
//                 </HStack>
//             </Box>
//         </Box>
//     );
// };