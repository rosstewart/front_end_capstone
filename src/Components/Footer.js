import { VStack } from "@chakra-ui/react";
import FooterPhoto from "../icons_assets/logo_alt.png";
import "./Footer.css"
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer>
            <VStack className="grayBackground" style={{ width: "100vw" }}>
                <div style={{ marginTop: "67px", marginBottom: "71px" }} id="footerGrid">
                    <img id="footerPhoto" src={FooterPhoto} />
                    <div id="doormatNavigation">
                        <h6 className="footerTitleText">Navigation</h6>
                        <button onClick={() => navigate("/")} className="footerText">Home</button>
                        <button className="footerText">About</button>
                        <button className="footerText">Menu</button>
                        <button onClick={() => navigate("/booking")} className="footerText">Reservations</button>
                        <button className="footerText">Order Online</button>
                        <button className="footerText">Log in</button>
                    </div>
                    <div id="contact">
                        <h6 className="footerTitleText">Contact</h6>
                        <button className="footerText">Address</button>
                        <button className="footerText">Phone Number</button>
                        <button className="footerText">Email</button>
                    </div>
                    <div id="socialMediaLinks">
                        <h6 className="footerTitleText">Social Media</h6>
                        <button className="footerText">Address</button>
                        <button className="footerText">Phone Number</button>
                        <button className="footerText">Email</button>
                    </div>
                </div>
            </VStack>
        </footer>
    );
}

export default Footer;