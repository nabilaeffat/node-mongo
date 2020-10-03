import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Booking = () => {
    const history = useHistory()

    const handleProceedBooking = () => {
        history.push('/destination');
    }
    return (
        <div>
            This is booking
            <button onClick={handleProceedBooking} >Book Now</button>

        </div>
    );
};

export default Booking;