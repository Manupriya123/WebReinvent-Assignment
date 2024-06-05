import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AppDispatch } from "../store";
import { registerUser } from "../store/authSlice";
import FormInput from "../components/FormInput";
import Card from "../components/Card";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await dispatch(registerUser(email, password));
      navigate("/dashboard"); // Navigate to the dashboard page upon successful registration
    } catch (error) {
      // Handle registration failure if needed
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card
        header={<h1 className="text-2xl font-bold">Sign Up</h1>}
        body={
          <>
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
          </>
        }
        footer={
          <>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <div className="mt-4">
              <span>Already have an account? </span>
              <Link to="/" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </>
        }
      />
    </div>
  );
};

export default SignUpPage;
