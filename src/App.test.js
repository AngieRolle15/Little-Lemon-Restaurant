import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation'); // Adjust this if your Navbar has a different role or identifier
  expect(navbarElement).toBeInTheDocument();
});
