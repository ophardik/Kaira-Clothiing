import React, { useState } from 'react'
import '../Designing/css/Signup.css'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import '../Designing/css/Toast.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("")
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    try {
      e.preventDefault();
      const response=await axios.post("/api/signup",{
        userName,
        password,
        email
      })
      console.log(response.data)
      if (response.status === 201) {
        toast.success("Account created successfully!");
      }
      setTimeout(()=>{
        navigate("/login")
      },3000)
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }
  return (
<div>
  <ToastContainer/>
    <div className="signup-container">
  <div className="form-section">
    <h1>
      <span className="welcome">CREATE </span> <span className="back">ACCOUNT</span>
    </h1>
    <p>Please Enter Your Details to Create an Account</p>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="email" placeholder="Email"
        value={email}
         onChange={(event)=>setEmail(event.target.value)}
         required />
        <span className="icon">📧</span>
      </div>
      <div className="input-group">
        <input type="text" placeholder="Username" 
        value={userName}
        onChange={(event)=>setUserName(event.target.value)}
        required />
        <span className="icon">👤</span>
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password"
        value={password}
        onChange={(event)=>setPassword(event.target.value)}
        required />
        <span className="icon">🔒</span>
      </div>
      <button type="submit" className="signup-button">
        Create Account
      </button>
    </form>
    <p>
  Already have an account?{" "}
  <Link to="/login" className="login text-blue-500 underline hover:text-blue-700">
    Login
  </Link>
</p>
  </div>
  <div className="image-section">
    <img
      src="https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyZWF0ZSUyMGFjY291bnR8ZW58MHx8MHx8fDA%3D"
      alt="Decorative"
    />
  </div>
</div>
</div>

  )
}

export default Signup
