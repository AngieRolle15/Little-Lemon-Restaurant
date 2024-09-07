import React, { useReducer, useEffect, useState } from 'react';
import { fetchAPI } from '../js/api';
import './BookingForm.css';
import { Formik, Field, Form } from 'formik';
import FormValidation from './FormValidation'; 
import CustomDropdown from './CustomDropdown';
import Glasses from './images/glasses.png'

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
            return { 
                ...state, 
                availableTimes: action.payload.times, 
                selectedTime: action.payload.times[0] || "" 
            }; 
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
            initialValues={{
                selectedDate: state.selectedDate,
                selectedTime: state.selectedTime || (state.availableTimes[0] || ""), 
                guests: initialState.guests,
                occasion: initialState.occasion,
            }}  
            validationSchema={FormValidation}  
            onSubmit={(values, { setSubmitting }) => {
                setIsSubmitted(true);
                setSubmitting(true);
                submitForm(values);
                setSubmitting(false);
            }}
        >
            {({ handleChange, handleSubmit, errors, touched, isSubmitting, values }) => (
                <Form 
                    onSubmit={(e) => {
                        e.preventDefault();  
                        setIsSubmitted(true);
                        handleSubmit(e);
                    }} 
                    className="booking-form"
                >
                    <div className="form-row row-group">
                        <div className="form-group">
                            <label htmlFor="booking-date">Choose date</label>
                            <Field
                            id="booking-date"
                            type="date"
                            name="selectedDate"
                            className={`input-field ${isSubmitted && touched.selectedDate && errors.selectedDate ? 'error-border' : ''}`}
                            style={{ borderColor: isSubmitted && touched.selectedDate && errors.selectedDate ? 'red' : '#f4f4f4' }}
                            required
                            onChange={(e) => {
                            handleChange(e);
                            handleDateChange(e.target.value); 
  }} 
/>
{isSubmitted && touched.selectedDate && errors.selectedDate && (
  <p className="error-message">{errors.selectedDate}</p>
)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="booking-time">Choose time</label>
                            <CustomDropdown
                                name="selectedTime"
                                value={values.selectedTime}
                                options={state.availableTimes}
                                onChange={handleChange}
                                style={{ borderColor: isSubmitted && touched.selectedTime && errors.selectedTime ? 'red' : '#f4f4f4' }}
                            />
                          {isSubmitted && touched.selectedTime && errors.selectedTime && (
  <p className="error-message">{errors.selectedTime}</p>
)}
                        </div>
                    </div>

                    <div className="form-row row-group">
                        <div className="form-group">
                            <label htmlFor="guests">Number of guests</label>
                            <Field 
                                id="guests"  
                                type="number" 
                                name="guests" 
                                className={`input-field ${isSubmitted && touched.guests && errors.guests ? 'error-border' : ''}`} 
                                min="1" 
                                max="10" 
                                aria-required="true" 
                                aria-invalid={touched.guests && errors.guests ? 
                                    "true" : "false"}
                            />
                            {isSubmitted && touched.guests && errors.guests && (
                                <p className="error-message">{errors.guests}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="occasion">
                                <img className="glasses" src={Glasses} alt="champagne"/>
                                Occasion
                                </label>
                            <CustomDropdown
                            name="occasion"
                            value={values.occasion}
                            options={['Birthday', 'Anniversary']}
                            onChange={handleChange}
                            style={{ borderColor: isSubmitted && touched.occasion && errors.occasion ? 'red' : '#f4f4f4' }}
                                />
                            {isSubmitted && touched.occasion && errors.occasion && (
                            <p className="error-message">{errors.occasion}</p>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button" 
                        aria-label="On Click"
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
