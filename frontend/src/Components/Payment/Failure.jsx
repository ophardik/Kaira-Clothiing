import React from 'react';
import { Link } from 'react-router-dom';

const Failure = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#fff5f5',
      }}
    >
      <h1 style={{ color: '#FF0000', marginBottom: '20px' }}>Payment Failed</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Unfortunately, your transaction could not be completed. Please try again later.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          textDecoration: 'none',
          backgroundColor: '#dc3545',
          border: 'none',
          borderRadius: '5px',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Failure;
