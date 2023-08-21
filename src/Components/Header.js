// import FullScreenWidth from "./FullScreenWidth";
import { VStack } from "@chakra-ui/react";
import HeaderPhoto from "../icons_assets/restauranfood.jpg";
import PrimaryButton from "./PrimaryButton";
import "./Header.css"
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header id="header">
            <VStack id="headerVStack">
                <div style={{ marginTop: "96px" }} id="headerGrid">
                    <div id="headerTitles">
                        <h1 className="displayText yellowText">Little Lemon</h1>
                        <h2 style={{ textAlign: "left" }} className="subTitleText whiteText">Chicago</h2>
                        <h6 style={{ marginTop: "20px", maxWidth: "300px" }} className="leadText whiteText">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h6>
                        <PrimaryButton onPressed={() => navigate('/booking')} text="Reserve a Table" style={{ marginTop: "58px" }} />
                    </div>
                    <div style={{ display: "flex" }} id="headerPhotoContainer">
                        <img style={{ justifyContent: "right" }} id="headerPhoto" src={HeaderPhoto} />
                    </div>
                </div>
            </VStack>
        </header>
    );
}

export default Header;