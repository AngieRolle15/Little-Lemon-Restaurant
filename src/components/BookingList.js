import React from 'react';
import BookingSlot from './BookingSlot';

function BookingList({ availableTimes }) {
    return (
        <div>
            <h2>Available Times</h2>
            <ul>
                {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <li key={time}>
                            <BookingSlot time={time} booked={false} />
                        </li>
                    ))
                ) : (
                    <li>No available times</li>
                )}
            </ul>
        </div>
    );
}

export default BookingList;




