import React, { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './js/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const initializeTimes = async (date = new Date()) => {
    const times = await fetchAPI(date);
    return times.length ? times : defaultTimes;
};

export const updateTimes = (state, action) => {
    return timesReducer(state, action);
};

const initialState = {
    availableTimes: [],
    selectedDate: new Date().toISOString().split('T')[0],
    submitSuccess: false,
    submitError: false,
};

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return {
                ...state,
                availableTimes: action.payload.times,
                selectedDate: action.payload.date,
            };

        case 'SUBMIT_SUCCESS':
            return {
                ...state,
                submitSuccess: true,
                submitError: false,
            };
        case 'SUBMIT_ERROR':
            return {
                ...state,
                submitSuccess: false,
                submitError: true,
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(timesReducer, initialState);

    const submitForm = async (formData) => {
        const result = await submitAPI(formData);
        if (result) {
            dispatch({ type: 'SUBMIT_SUCCESS' });
        } else {
            dispatch({ type: 'SUBMIT_ERROR' });
        }
        return result; };

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const today = new Date();
            const times = await initializeTimes(today);  
            dispatch({
                type: 'SET_TIMES',
                payload: {
                    times,
                    date: today.toISOString().split('T')[0],
                }
            });
        };

        fetchInitialTimes();
    }, []);

    return (
        <Router>
            <>
                <Navbar />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route 
                        path="/booking" 
                        element={
                            <BookingPage 
                                availableTimes={state.availableTimes} 
                                dispatch={dispatch} 
                                selectedDate={state.selectedDate} 
                                submitSuccess={state.submitSuccess}
                                submitError={state.submitError}
                                submitForm={submitForm} />
                        } 
                    />
                    <Route path="/booking-confirmation" element={<ConfirmedBooking />} />  
                </Routes>
            </>
        </Router>
    );
}

export default App;

