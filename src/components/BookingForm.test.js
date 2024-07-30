import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm occasion label', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const occasionLabel = screen.getByText("Occasion");
  expect(occasionLabel).toBeInTheDocument();
});
