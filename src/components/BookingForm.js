import React, { useReducer, useEffect } from 'react';
import { fetchAPI } from '../js/api';
import './BookingForm.css';

const initialState = {
    availableTimes: [],
    selectedDate: new Date().toISOString().split('T')[0], 
     selectedTime: "",
    guests: 1,
    occasion: "",
};

function timesReducer(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return { ...state, availableTimes: action.payload.times };
        case 'SET_DATE':
            return { ...state, selectedDate: action.payload.date };
        case 'SET_TIME':
            return { ...state, selectedTime: action.payload };
        case 'SET_GUESTS':
            return { ...state, guests: action.payload };
        case 'SET_OCCASION':
            return { ...state, occasion: action.payload };
        default:
            return state;
    }
}

function BookingForm({ submitForm }) {
    const [state, dispatch] = useReducer(timesReducer, initialState);

    useEffect(() => {
        async function initializeTimes() {
            const times = await fetchAPI(new Date());
            dispatch({ type: 'SET_TIMES', payload: { times } });
        }
        initializeTimes();
    }, []);

    const handleDateChange = async (event) => {
        const date = event.target.value;
        const times = await fetchAPI(new Date(date));
        dispatch({ type: 'SET_TIMES', payload: { times } });
        dispatch({ type: 'SET_DATE', payload: { date } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: state.selectedDate,
            time: state.selectedTime,
            guests: state.guests,
            occasion: state.occasion,
        };
        submitForm(formData);
    };
    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
                <label htmlFor="booking-date">Choose date</label>
                <input type="date" id="booking-date" className="input-field" value={state.selectedDate} onChange={handleDateChange} />
            </div>
            <div className="form-row">
                <label htmlFor="booking-time">Choose time</label>
                <select id="booking-time" className="input-field" value={state.selectedTime} onChange={(e) => dispatch({ type: 'SET_TIME', payload: e.target.value })}>
                    {state.availableTimes.length > 0 ? (
                        state.availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))
                    ) : (
                        <option value="">No available times</option>
                    )}
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="guests" className="form-label">Number of guests</label>
                <input type="number" id="guests" className="input-field" min="1" max="10" value={state.guests} onChange={(e) => dispatch({ type: 'SET_GUESTS', payload: e.target.value })} />
            </div>
            <div className="form-row">
                <label htmlFor="occasion" className="form-label">Occasion</label>
                <select id="occasion" className="input-field" value={state.occasion} onChange={(e) => dispatch({ type: 'SET_OCCASION', payload: e.target.value })}>
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button type="submit" className="submit-button">Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;
















