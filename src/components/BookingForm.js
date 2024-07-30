import React, { useState } from "react";
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with details:", { guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="date-time-container">
                <div>
                    <label htmlFor="booking-date">Choose date</label>
                    <input type="date" id="booking-date" className="input-field" onChange={handleDateChange} />
                </div>
                <div>
                    <label htmlFor="booking-time">Choose time</label>
                    <select id="booking-time" className="input-field">
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                className="input-field"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={handleGuestsChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" className="input-field" value={occasion} onChange={handleOccasionChange}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" className="submit-button" />
        </form>
    );
}

export default BookingForm;
