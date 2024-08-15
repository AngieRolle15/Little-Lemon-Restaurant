import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function BookingPage({ availableTimes, dispatch, selectedDate, submitSuccess, submitError, submitForm }) {
    const navigate = useNavigate();

    const handleSubmitForm = async (formData) => {
        const result = await submitForm(formData); 
        if (result) {
            navigate('/booking-confirmation');
        }
        return result;
    };

    return (
        <div className="booking-page">
            <h1>Book Now</h1>
            {submitSuccess && <p>Booking submitted successfully!</p>}
            {submitError && <p>Failed to submit booking.</p>}
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                selectedDate={selectedDate} 
                submitForm={handleSubmitForm} 
            />
            <BookingList availableTimes={availableTimes} />
        </div>
    );
}

export default BookingPage;

