import HomePage from './Homepage';
import BookingPage from './BookingPage/BookingPage';
import ConfirmedBooking from './BookingPage/ConfirmedBooking';

import { Route, Routes } from 'react-router-dom';
import React, { useReducer } from 'react';
import { fetchAPI } from '../utils/API';

const formatTimes = (dataObj) => {
    const morning = dataObj.morning.map((time) => `${time} AM`);
    const afternoon = dataObj.afternoon.map((time) => `${time} PM`);
    const evening = dataObj.evening.map((time) => `${time} PM`);
    return [...morning, ...afternoon, ...evening];
}

const updateTimes = (state, action) => {
    if (action.type === "update_times") {
        const dataObj = fetchAPI(action.date);
        const data = formatTimes(dataObj);
        return { ...state, availableTimes: data };
    }
    return state;
}

const initializeTimes = () => {
    const dataObj = fetchAPI(new Date());
    const data = formatTimes(dataObj);
    return { availableTimes: data };
}

function Main() {
    const [mainState, dispatchMainState] = useReducer(updateTimes, initializeTimes());
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage mainState={mainState} dispatchMainState={dispatchMainState} />} />
                <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;