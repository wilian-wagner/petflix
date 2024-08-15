// src/pages/RegisterPage.js
import React from 'react';
import Register from '../components/Register';
import '../pages/RegisterPage';

const RegisterPage = () => {
  return (

    <div className='register-page'>
      <h1 style={{ textAlign: 'center' }}><img src='/assets/logo.png' /></h1>
      <Register />
    </div>
  );
};

export default RegisterPage;
