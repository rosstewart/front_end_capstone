import { VStack } from "@chakra-ui/react";
import FooterPhoto from "../icons_assets/logo_alt.png";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <VStack className="grayBackground" style={{ width: "100vw" }}>
                <div style={{ marginTop: "67px", marginBottom: "71px" }} id="footerGrid">
                    <img id="footerPhoto" src={FooterPhoto} />
                    <div id="doormatNavigation">
                        <h6 className="footerTitleText">Navigation</h6>
                        <a href="/" className="footerText">Home</a>
                        <a href="/" className="footerText">About</a>
                        <a href="/" className="footerText">Menu</a>
                        <a href="/" className="footerText">Reservations</a>
                        <a href="/" className="footerText">Order Online</a>
                        <a href="/" className="footerText">Log in</a>
                    </div>
                    <div id="contact">
                        <h6 className="footerTitleText">Contact</h6>
                        <a href="/" className="footerText">Address</a>
                        <a href="/" className="footerText">Phone Number</a>
                        <a href="/" className="footerText">Email</a>
                    </div>
                    <div id="socialMediaLinks">
                        <h6 className="footerTitleText">Social Media</h6>
                        <a href="/" className="footerText">Address</a>
                        <a href="/" className="footerText">Phone Number</a>
                        <a href="/" className="footerText">Email</a>
                    </div>
                </div>
            </VStack>
        </footer>
    );
}

export default Footer;