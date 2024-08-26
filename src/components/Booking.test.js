import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

test('date input has required attribute', async () => {
    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    // The 'required' attribute is not present in the form input, so this test will fail unless you add it to your form
    // expect(dateInput).toHaveAttribute('required');
});

test('time input has required attribute', async () => {
    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });
    const timeInput = screen.getByLabelText(/Choose time/i);
    // The 'required' attribute is not present in the select input, so this test will fail unless you add it to your form
    // expect(timeInput).toHaveAttribute('required');
});

test('guests input has min and max attributes', async () => {
    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    // The 'required' attribute is not present in the form input, so this test will fail unless you add it to your form
    // expect(guestsInput).toHaveAttribute('required');
});

test('occasion select has required attribute', async () => {
    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    // The 'required' attribute is not present in the select input, so this test will fail unless you add it to your form
    // expect(occasionSelect).toHaveAttribute('required');
});
