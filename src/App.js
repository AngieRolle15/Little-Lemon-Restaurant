import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage.js';
import BookingPage from './components/BookingPage.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
     <Router>
      <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    <Header />
    <Main />
    <Footer />
    </>
    </Router>
  )
}

export default App;
