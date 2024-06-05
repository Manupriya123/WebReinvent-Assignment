import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AppDispatch } from "../store";
import { registerUser } from "../store/authSlice";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await dispatch(registerUser(email, password));
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default SignUpPage;
