import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Success = () => {

  const clearCart=async()=>{
    try {
      const userId=sessionStorage.getItem('userId')
      if(!userId){
        toast.error('Please login to clear cart')
      }
      const response=await axios.delete(`/cart/clearCart?userId=${userId}`,{
        headers:{
          'Content-Type': 'application/json',
        }
      })
    } catch (error) {
      toast.error('Failed to clear the cart. Please try again.',error)
    }
  }
  useEffect(()=>{
    clearCart()
  },[])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f0f8ff',
      }}
    >
      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>Payment Successful!</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Thank you for your purchase. Your transaction has been completed successfully.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          textDecoration: 'none',
          backgroundColor: '#007bff',
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

export default Success;
