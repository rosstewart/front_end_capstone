import { HStack, VStack } from '@chakra-ui/react'
import DeliveryIcon from '../icons_assets/delivery_icon.png';

function SpecialsCard(props) {
    return (
        <VStack spacing="0px">
            <div>
                <img className="specialsImage" style={{ borderRadius: "16px 16px 0px 0px" }} src={props.image} /></div>
            <div style={{ width: "264.667px", height: "253.742px", borderRadius: "0px 0px 16px 16px" }} className="lightGrayBackground" >
                <HStack height="25.462px" marginTop="19.32px" marginLeft="25px" marginRight="13px" justifyContent="space-between">
                    <h6 className="cardTitleText">{props.name}</h6>
                    <p className="priceText">$ {props.price}</p>
                </HStack>
                <div style={{ width: "216.736px", height: "120.286px", marginTop: "22.83px", marginLeft: "25px", marginRight: "25px" }} >
                    <p className="cardBodyText">{props.description}</p>
                </div>
                <HStack style={{ height: "28.096px", marginTop: "17.56px", marginLeft: "25px", marginBottom: "20.19px" }} spacing="12px" alignItems="start" >
                    <p className="orderADeliveryText">Order a delivery</p>
                    <img style={{ marginTop: "5px" }} width="16.672px" height="10.536px" src={DeliveryIcon} />
                </HStack>
            </div>
        </VStack>
    )
}

export default SpecialsCard;