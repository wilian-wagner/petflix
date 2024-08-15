// src/pages/HomePage.js
import React from 'react';
import Home from '../components/Home';
import '../pages/HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1 style={{ textAlign: 'center' }}><img src='/assets/logo.png' /></h1>
      <Home />
    </div>
  );
};

export default HomePage;
