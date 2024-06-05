// Navbar.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const handleSignOut = () => {
    dispatch(signOut());
    history("/"); //
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">WebReinvent-Dashboard</h1>
        {currentPath === "/dashboard" ? (
          <button onClick={handleSignOut} className="text-white font-semibold">
            Sign Out
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
