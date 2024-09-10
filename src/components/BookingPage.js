import React, { useState, useEffect } from 'react';
import BookingList from './BookingList';
import { fetchAPI, submitAPI } from '../js/api';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

function BookingPage() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Current date in yyyy-mm-dd
    const [availableTimes, setAvailableTimes] = useState([]);
    const [bookedTimes, setBookedTimes] = useState(() => {
  
        const savedTimes = localStorage.getItem('bookedTimes');
        return savedTimes ? JSON.parse(savedTimes) : {};
    });
    const navigate = useNavigate();

    
    useEffect(() => {
        const fetchAvailableTimes = async () => {
            if (selectedDate) {
                const date = new Date(selectedDate);
                const times = fetchAPI(date);
                setAvailableTimes(times);
            }
        };
        fetchAvailableTimes();
    }, [selectedDate]);


    const saveBookedTimes = (newBookedTimes) => {
        localStorage.setItem('bookedTimes', JSON.stringify(newBookedTimes));
    };

    useEffect(() => {
        const storedBookedTimes = bookedTimes;
        console.log("Loaded booked times from localStorage:", storedBookedTimes);
        setBookedTimes(storedBookedTimes);
    }, []);

    const handleSubmitForm = async (formData) => {
        console.log("Submitting form data:", formData);
        try {
            const result = await submitAPI(formData);  
            if (result) {
                const newBookedTimes = { ...bookedTimes };
                const dateStr = new Date(formData.selectedDate).toDateString();

                if (!newBookedTimes[dateStr]) {
                    newBookedTimes[dateStr] = [];
                }
                newBookedTimes[dateStr].push(formData.selectedTime);

                setBookedTimes(newBookedTimes);
                saveBookedTimes(newBookedTimes); 
                navigate('/confirmation');
            } else {
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    };
    
    return (
        <div>
            <BookingForm 
                onSubmit={handleSubmitForm} 
                selectedDate={selectedDate} 
                availableTimes={availableTimes} 
                setSelectedDate={setSelectedDate} 
            />
            <BookingList
                availableTimes={availableTimes}
                bookedTimes={bookedTimes} 
                selectedDate={selectedDate} />
        </div>
    );
}

export default BookingPage;
