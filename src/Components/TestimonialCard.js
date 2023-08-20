import { HStack } from '@chakra-ui/react'

function TestimonialsCard(props) {
    let image = props.image;
    let imageElement;
    if (image === undefined) {
        imageElement = <div className="testimonialImage lightGrayBackground" style={{ borderRadius: "8px" }} />
    } else {
        imageElement = <img className="testimonialImage" style={{ borderRadius: "8px" }} src={props.image} />
    }
    return (
        <div style={{ width: "200px", height: "175px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "16px" }} >
            <p className="testimonialCardTitleText">{props.rating}</p>
            <HStack height="25.462px" marginTop="13px" spacing="12px">
                {imageElement}
                <p className="testimonialCardTitleText" style={{ width: "93px", textOverflow: "ellipsis", overflow: "hidden" }}>{props.name}</p>
            </HStack>
            <div style={{ width: "152px", height: "46px", marginTop: "17px" }} >
                <p className="testimonialReviewText">{props.description}</p>
            </div>
        </div>
    )
}

export default TestimonialsCard;