import React, { useState } from 'react'
import '../Designing/css/Login.css'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import '../Designing/css/Toast.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault()
      const response=await axios.post("/api/login",{
        email:email,
        password:password
      })
      console.log(response.data)
      if(response.status===200){
        toast.success("Login Successfull");
        sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("userId",response.data._id)
        // navigate("/")
      }
      setTimeout(()=>{
        navigate("/")
      },3000)
    } catch (error) {
       toast.error("Something went wrong. Please try again.");
    }
  }
  return (
    <div>
     <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <div className="login-container">
      <div className="form-section">
        <h1>
          <span className="welcome">WELCOME</span> <span className="back">BACK</span>
        </h1>
        <p>Please Enter Your Details</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <span className="icon">👁️</span>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <span className="icon">👁️</span>
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <p>
  Don’t have an account?{" "}
  <Link to="/signup" className="signup text-blue-500 underline hover:text-blue-700">
    Signup
  </Link>
</p>

      </div>
      <div className="image-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1671718111613-4dfa066d6011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjB3aXRoJTIwb3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Decorative"
        />
      </div>
    </div>
    </div>
  )
}

export default Login
