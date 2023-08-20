import { VStack } from "@chakra-ui/react";
import AboutPhoto1 from "../icons_assets/restaurant chef B.jpg";
import AboutPhoto2 from "../icons_assets/Mario and Adrian A.jpg";
import "./About.css"

function About() {
    return (
        <VStack className="greenBackground" style={{ width: "100vw" }}>
            <div style={{ marginTop: "87px", marginBottom: "36px" }} id="aboutGrid">
                <div id="aboutTitles">
                    <h1 className="displayText yellowText">About</h1>
                    <h2 style={{ textAlign: "left" }} className="subTitleText whiteText">Little Lemon</h2>
                    <h6 style={{ marginTop: "20px" }} className="leadText whiteText">Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</h6>
                </div>
                <div style={{ display: "flex" }} id="aboutPhotoContainer">
                    <img className="aboutPhoto" id="aboutPhoto1" src={AboutPhoto1} />
                    <img className="aboutPhoto" id="aboutPhoto2" src={AboutPhoto2} />
                </div>
            </div>
        </VStack>
    );
}

export default About;