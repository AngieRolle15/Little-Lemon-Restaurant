import React from 'react';

function BookingSlot({ time, booked }) {
  return (
    <div className={`booking-slot ${booked ? 'booked' : 'available'}`}>
      {time} {booked ? '(Booked)' : '(Available)'}
    </div>
  );
}

export default BookingSlot;