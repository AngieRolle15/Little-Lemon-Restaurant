import React, { useReducer, useEffect, useState } from 'react';
import { fetchAPI } from '../js/api';
import './BookingForm.css';
import { Formik, Field, Form } from 'formik';
import FormValidation from './FormValidation'; // Import the validation schema

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
            return { ...state, availableTimes: action.payload.times, selectedTime: action.payload.times[0] || "" }; // Set default selected time
        case 'SET_DATE':
            return { ...state, selectedDate: action.payload.date };
        default:
            return state;
    }
}

function BookingForm({ submitForm }) {
    const [state, dispatch] = useReducer(timesReducer, initialState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        async function initializeTimes() {
            const times = await fetchAPI(new Date());
            dispatch({ type: 'SET_TIMES', payload: { times } });
        }
        initializeTimes();
    }, []);

    const handleDateChange = async (chosenDate) => {
        const today = new Date().toISOString().split('T')[0];

        if (chosenDate >= today) {
            const times = await fetchAPI(new Date(chosenDate));
            dispatch({ type: 'SET_TIMES', payload: { times } });
            dispatch({ type: 'SET_DATE', payload: { date: chosenDate } });
        }
    };

    return (
        <Formik
            initialValues={initialState}
            validationSchema={FormValidation}  // Apply the Yup validation schema
            onSubmit={(values, { setSubmitting }) => {
                setIsSubmitted(true);
                setSubmitting(true);
                submitForm(values);
                setSubmitting(false);
            }}
        >
            {({ handleChange, handleSubmit, errors, touched, isSubmitting }) => (
                <Form 
                    onSubmit={(e) => {
                        e.preventDefault();  // Prevent default form submission
                        setIsSubmitted(true);
                        handleSubmit(e);
                    }} 
                    className="booking-form"
                >
                    <div className="form-row">
                        <label htmlFor="booking-date">Choose date</label>
                        <Field
                             id="booking-date"
                             type="date"
                            name="selectedDate"
                            className={`input-field ${isSubmitted && touched.selectedDate && errors.selectedDate ? 'error-border' : ''}`}
                            required
                            onChange={(e) => {
                             handleChange(e);
                            handleDateChange(e.target.value);
                            }} />
                        
                        {isSubmitted && touched.selectedDate && errors.selectedDate && (
                            <p className="error-message">{errors.selectedDate}</p>
                        )}
                    </div>
                    <div className="form-row">
    <label htmlFor="booking-time">Choose time</label>
    <Field 
        id="booking-time"
        as="select" 
        name="selectedTime" 
        className={`input-field ${isSubmitted && touched.selectedTime && errors.selectedTime ? 'error-border' : ''}`} 
        required  // Add this attribute
    >
        {state.availableTimes.length > 0 ? (
            state.availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))
        ) : (
            <option value="">No available times</option>
        )}
    </Field>
</div>
                    <div className="form-row">
                        <label htmlFor="guests">Number of guests</label>
                        <Field 
                            id="guests"  
                            type="number" 
                            name="guests" 
                            className={`input-field ${isSubmitted && touched.guests && errors.guests ? 'error-border' : ''}`} 
                            min="1" 
                            max="10" 
                        />
                        {isSubmitted && touched.guests && errors.guests && (
                            <p className="error-message">{errors.guests}</p>
                        )}
                    </div>
                    <div className="form-row">
    <label htmlFor="occasion">Occasion</label>
    <Field 
        id="occasion"
        as="select" 
        name="occasion" 
        className={`input-field ${isSubmitted && touched.occasion && errors.occasion ? 'error-border' : ''}`}
        required  // Add this attribute
    >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
    </Field>
    {isSubmitted && touched.occasion && errors.occasion && (
        <p className="error-message">{errors.occasion}</p>
    )}
</div>
                    <button 
                        type="submit" 
                        className="submit-button" 
                        disabled={isSubmitting}
                    >
                        Make Your Reservation
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default BookingForm;








