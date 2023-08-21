import { VStack } from "@chakra-ui/react";
import "./ConfirmedBooking.css"
import PrimaryButton from "../PrimaryButton";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <VStack className="greenBackground" minHeight="80vh">
            <h1 style={{ marginTop: "126px", marginBottom: "30px" }} className="testimonialsText whiteText">You're all set.</h1>
            <PrimaryButton onPressed={() => navigate("/")} style={{ fontWeight: "normal" }} text="Go back home" />
        </VStack>
    )
}

export default ConfirmedBooking;