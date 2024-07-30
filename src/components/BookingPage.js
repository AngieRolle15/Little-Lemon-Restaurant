import React from "react";
import BookingForm from './BookingForm';
import BookingList from "./BookingList";

function BookingPage({ availableTimes, dispatch }) {
    return (
        <>
         <div className="booking-page">
            <h1>Book Now</h1>
           
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                <BookingList availableTimes={availableTimes} />
            </div>
        </>
    );
}

export default BookingPage;
