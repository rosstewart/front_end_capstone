import { VStack, HStack } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard.js";
import "./Testimonials.css";

function Testimonials() {
    return (
        <div className="grayBackground" style={{ width: "100vw" }}>
            <div id="testimonialsGrid">
                <h2 style={{ marginTop: "122px" }} id="testimonialsText">Testimonials</h2>
                <HStack spacing="20px" id="testimonialCards" style={{ marginTop: "66px", marginBottom: "181px", maxWidth: "100%", overflowX: "auto", /* Enable horizontal scrolling */ }}>
                    <TestimonialCard rating="Rating" name="Name" description="Review text" />
                    <TestimonialCard rating="Rating" name="Name" description="Review text" />
                    <TestimonialCard rating="Rating" name="Name" description="Review text" />
                    <TestimonialCard rating="Rating" name="Name" description="Review text" />
                </HStack>
            </div>
        </div>
    );
}

export default Testimonials;