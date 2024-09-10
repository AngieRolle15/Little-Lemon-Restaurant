import React, { useReducer, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import CustomDropdown from './CustomDropdown';
import FormValidation from './FormValidation';
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
            return { 
                ...state, 
                availableTimes: action.payload.times,
                selectedTime: action.payload.times[0] || "" 
            };
        case 'SET_DATE':
            return { 
                ...state, 
                selectedDate: action.payload.date 
            };
        default:
            return state;
    }
}

function BookingForm({ onSubmit, selectedDate, availableTimes, setSelectedDate }) {
    const [state, dispatch] = useReducer(timesReducer, initialState);

    useEffect(() => {
        dispatch({ type: 'SET_DATE', payload: { date: selectedDate } });
        dispatch({ type: 'SET_TIMES', payload: { times: availableTimes } });
    }, [selectedDate, availableTimes]);

    return (
        <Formik
            initialValues={{
                selectedDate: state.selectedDate,
                selectedTime: state.selectedTime || '',
                guests: 1,
                occasion: '',
            }}
            validationSchema={FormValidation}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    await onSubmit(values);
                } catch (error) {
                    console.error("Form submission error:", error);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ handleChange, handleSubmit, touched, errors, values, isSubmitting, setFieldValue }) => (
                <Form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-row row-group">
                        <div className="form-group">
                            <label htmlFor="booking-date">Choose date</label>
                            <Field
                                id="booking-date"
                                type="date"
                                name="selectedDate"
                                className={`input-field ${touched.selectedDate && errors.selectedDate ? 'error-border' : ''}`}
                                required
                                onChange={(e) => {
                                    handleChange(e);
                                    setSelectedDate(e.target.value); // Update selected date
                                }}
                            />
                            {touched.selectedDate && errors.selectedDate && (
                                <p className="error-message">{errors.selectedDate}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="booking-time">Choose time</label>
                            <CustomDropdown
                                name="selectedTime"
                                value={values.selectedTime}
                                options={state.availableTimes}
                                onChange={(value) => setFieldValue('selectedTime', value)}
                            />
                            {touched.selectedTime && errors.selectedTime && (
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
                                className={`input-field ${touched.guests && errors.guests ? 'error-border' : ''}`} 
                                min="1" 
                                max="10" 
                            />
                            {touched.guests && errors.guests && (
                                <p className="error-message">{errors.guests}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="occasion">Occasion</label>
                            <CustomDropdown
                                name="occasion"
                                value={values.occasion}
                                options={['Birthday', 'Anniversary']}
                                onChange={(value) => setFieldValue('occasion', value)}
                            />
                            {touched.occasion && errors.occasion && (
                                <p className="error-message">{errors.occasion}</p>
                            )}
                        </div>
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
