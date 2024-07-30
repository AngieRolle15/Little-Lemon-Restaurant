export const initializeTimes = () => [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); 
    default:
      return state;
  }
};

// The rest of your App component...
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
