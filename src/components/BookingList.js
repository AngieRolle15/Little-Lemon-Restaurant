import React from 'react';

function BookingList({ availableTimes }) {
    return (
        <div>
            <h2>Available Times</h2>
            <ul>
                {availableTimes.map((time) => (
                    <li key={time}>{time}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookingList;

