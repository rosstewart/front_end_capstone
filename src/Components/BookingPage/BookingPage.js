import { VStack } from "@chakra-ui/react";
import "./BookingPage.css"
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/API';
import LoadingIndicator from "./LoadingIndicator";

const ErrorMessage = (props) => {
    return <p className="FieldError">{props.children}</p>;
};

const SubmittingErrorMessage = (props) => {
    return <p className="SubmittingError">{props.children}</p>;
};

function BookingPage(props) {
    const navigate = useNavigate();
    const [date, setDate] = useState({ value: "", isTouched: false });
    const [time, setTime] = useState(props.mainState.availableTimes.length > 0 ? props.mainState.availableTimes[0] : "");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [submitting, setSubmitting] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    // useEffect(() => {
    //     console.log(`date: ${date.value} touched: ${date.isTouched} time: ${time} guests: ${guests} occasion: ${occasion}, showDateError: ${showDateError()}`);
    // }, [date, time, guests, occasion]);

    const getIsFormValid = () => {
        return !(date.value.length === 0 || isDateTimeBeforeNow(date.value, time));
    };

    const clearForm = () => {
        setDate({ value: "", isTouched: false });
        setTime('');
        setGuests(1);
        setOccasion("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (getIsFormValid()) {
            setSubmitting(true);
            if (submitFailed) setSubmitFailed(false);
            if (await submitAPI({ date: date.value, time: time, guests: guests, occasion: occasion })) {
                clearForm();
                setSubmitFailed(false);
                navigate("/booking-confirmation");
            } else {
                setSubmitFailed(true);
            }
            setSubmitting(false);
        }
    };

    const handleDateFocus = () => {
        if (!date.isTouched) {
            setDate({ value: date.value, isTouched: true });
        }
    }

    function isDateTimeBeforeNow(dateString, timeString) {
        if (timeString.endsWith("PM")) {
            timeString = timeString.substring(0, timeString.length - 3);
            const split = timeString.split(":");
            const newHour = 12 + + split[0];
            timeString = `${newHour}:${split[1]}`;
        } else {
            timeString = timeString.substring(0, timeString.length - 3);
            if (timeString.length > 1 && timeString[1] === ":") {
                timeString = `0${timeString}`;
            }
        }
        // console.log(`dateString: ${dateString}, timeString: ${timeString}`);
        const inputDateTime = new Date(`${dateString}T${timeString}`);
        const currentDateTime = new Date();
        // console.log(`inputDateTime: ${inputDateTime}, currentDateTime: ${currentDateTime}`);
        return inputDateTime < currentDateTime;
    }

    const showDateError = () => {
        return date.isTouched && (date.value.length === 0 || isDateTimeBeforeNow(date.value, time));
    }

    return (
        <VStack className="greenBackground" minHeight="80vh">
            <h1 style={{ marginTop: "126px", marginBottom: "30px" }} className="testimonialsText yellowText">Booking Page</h1>
            <form onSubmit={handleSubmit} style={{ display: "grid", marginBottom: "50px", maxWidth: "200px" }}>
                <div className="Field">
                    <label htmlFor="res-date" style={{ overflow: "visible" }} className="cardTitleText whiteText">Choose date <sup>*</sup></label>
                    <input value={date.value} onBlur={handleDateFocus} onChange={(event) => {
                        setDate({ value: event.target.value, isTouched: date.isTouched });
                        props.dispatchMainState({ type: 'update_times', date: new Date(event.target.value) });
                    }} type="date" id="res-date" style={showDateError() === true ? { marginBottom: "0px", border: "rgb(255,80,80) solid 2px" } : {}} />
                    {showDateError() === true ? <ErrorMessage>{date.value.length === 0 ? "Please enter a date" : "Date cannot be in the past"}</ErrorMessage> : null}
                </div>
                {showDateError() === true ? <div style={{ height: "20px" }} /> : null}
                <div className="Field">
                    <label htmlFor="res-time" style={{ overflow: "visible" }} className="cardTitleText whiteText">Choose time <sup>*</sup></label>
                    <select value={time} onChange={(event) => setTime(event.target.value)} id="res-time ">
                        {/* {props.mainState.availableTimes.map(time => <option key={time}>{time}</option>)} */}
                        {props.mainState.availableTimes.map((theTime) => <option key={theTime}>{theTime}</option>)}
                    </select>
                </div>
                <div className="Field">
                    <label htmlFor="guests" style={{ overflow: "visible", marginBottom: "10px" }} className="cardTitleText whiteText">Number of guests <sup>*</sup></label>
                    <div style={{ display: "flex" }}>
                        <input value={guests} onChange={(event) => setGuests(event.target.value)} style={{ maxWidth: "165px", marginTop: "7px", marginRight: "20px" }} className="custom-range" type="range" min="1" max="10" id="guests" />
                        <span className="whiteText">{guests}</span>
                    </div>
                </div>
                <div className="Field">
                    <label htmlFor="occasion" style={{ overflow: "visible" }} className="cardTitleText whiteText">Occasion <sup>*</sup></label>
                    <select value={occasion} onChange={(event) => setOccasion(event.target.value)} id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                {submitting === false ? <PrimaryButton props={{ disabled: !getIsFormValid() && !submitting }} style={{ fontWeight: "normal" }} text="Make Your Reservation" /> : // show progress bar while submitting
                    <LoadingIndicator />}
                {submitFailed === true ? <SubmittingErrorMessage>Something went wrong. Please try again.</SubmittingErrorMessage> : null}
            </form>
        </VStack>
    )
}

export default BookingPage;