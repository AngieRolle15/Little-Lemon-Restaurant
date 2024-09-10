import React from 'react';

function ConfirmedBooking() {
    return (
        <div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description" className='confirm'>
    <h2 className="dialog-title">Reservation Confirmation</h2>
    <p className="dialog-description">Your reservation has been successfully made. 
        <br/>Thank you for booking with us.</p>
</div>

    );
}

export default ConfirmedBooking;

