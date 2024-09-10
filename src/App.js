import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';
import { fetchAPI, submitAPI } from './js/api';

const initialState = {
    availableTimes: [],
    selectedDate: new Date().toISOString().split('T')[0],
};


const timesReducer = (state, action) => {
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
};


async function initializeTimes(date = new Date()) {
    const times = fetchAPI(date);
    console.log("Fetched times from API:", times);
    return times.length ? times : ["17:00", "18:00", "19:00",
         "20:00", "21:00", "22:00"]; }

async function updateTimes(dispatch, selectedDate) {
    try {
        const times = fetchAPI(new Date(selectedDate));
        console.log("Available times:", times); 
        dispatch({ type: 'SET_TIMES', payload: { times } });
    } catch (error) {
        console.error("Error fetching available times:", error);
    }
}

function App() {
    const [state, dispatch] = useReducer(timesReducer, initialState);

    const submitForm = async (formData) => {
        const result = await submitAPI(formData);
        return result; 
    };

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

    useEffect(() => {
        updateTimes(dispatch, state.selectedDate);
    }, [state.selectedDate]);

    return (
        <Router>
            <>    
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route 
                        path="/booking" 
                        element={
                            <BookingPage
                            availableTimes={state.availableTimes}
                            dispatch={dispatch}
                            selectedDate={state.selectedDate}
                            submitForm={submitForm}
                        />
                        } 
                    />
                    <Route path="/confirmation" element={<ConfirmedBooking />} />  
                </Routes>
            </>
        </Router>
    );
}

export default App;
