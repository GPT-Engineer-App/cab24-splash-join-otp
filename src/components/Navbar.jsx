import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">CABs 24</Link>
        <div className="flex space-x-4">
          <Link to="/join" className="text-white">Join</Link>
          <Link to="/otp" className="text-white">OTP</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;