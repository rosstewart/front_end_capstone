import { VStack, HStack } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";
import "./Specials.css"
import SpecialsCard from "./SpecialsCard";

function Specials() {
    return (
        <div id="specialsContainer">
            <div style={{marginTop: "85px"}} id="specialsGrid">
                <div id="specialsTitle">
                    <h1 className="subTitleText">This Week's Specials</h1>
                </div>
                <div id="onlineMenu">
                    <PrimaryButton id="onlineMenu" text="Online Menu" />
                </div>
                <HStack spacing="34.32px" id="specialsCards" style={{ marginTop: "48px", marginBottom: "70px", maxWidth: "100%", overflowX: "auto", /* Enable horizontal scrolling */}}>
                    <SpecialsCard image={require('../icons_assets/greek salad.jpg')} name="Greek Salad" price="12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                    <SpecialsCard image={require('../icons_assets/bruschetta.png')} name="Bruschetta" price="5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <SpecialsCard image={require('../icons_assets/lemon dessert.jpg')} name="Lemon Dessert" price="5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
                </HStack>
            </div>
        </div>
    );
}

export default Specials;