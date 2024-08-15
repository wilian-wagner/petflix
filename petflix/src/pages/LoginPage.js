// src/pages/LoginPage.js
import React from 'react';
import Login from '../components/Login';
import '../pages/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <h1 style={{ textAlign: 'center' }}><img src='/assets/logo.png' /></h1>
      <h1>Faça o Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
