import React from 'react';
import BookingSlot from './BookingSlot';
import Restaurantchef from './images/restaurantchefB.jpg'

function BookingList({ availableTimes, bookedTimes }) {
    console.log("Rendering BookingList with bookedTimes:", bookedTimes);
    console.log("testing"); 

    const isTimeBooked = (time) => {
        const todayDate = new Date().toDateString();
        return bookedTimes[todayDate] ? bookedTimes[todayDate].includes(time) : false;
    };

    return (
        <div>  
            <h2 className="booked-header">Available and Booked Times</h2>
        <div className='booking-list'>
            
            <div className='available'>
                <h3>Available Times</h3>
                <h4>For Today</h4>
                {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <BookingSlot
                            key={time}
                            time={time}
                            booked={isTimeBooked(time)}  
                        />
                    ))
                ) : (
                    <p>No available times</p>
                )}
            </div>

            <div className='booked'>
                <h3>Booked Times</h3>
                {Object.keys(bookedTimes).length > 0 ? (
                    Object.entries(bookedTimes).map(([date, times]) => (
                        <div key={date}>
                            <h4>{date}</h4>
                            {times.map((time) => (
                                <BookingSlot key={time} time={time} booked />
                            ))}
                        </div>
                    ))
                ) : (
                    <p>No booked times</p>
                )}
            </div>
          <div className='booked-img'><img src={Restaurantchef} className='booking-img'/> </div>
        </div>
        </div>
    );
}

export default BookingList;
