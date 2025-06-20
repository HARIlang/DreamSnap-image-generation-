import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (

  <>
   <div className="w-full px-4 py-5 flex flex-col sm:flex-row items-center bg-white shadow-md">
  {/* Logo */}
  <div onClick={() => navigate("/")} className="cursor-pointer mb-4 sm:mb-0 sm:mr-auto">
    <h2 className="text-2xl font-bold text-pink-500">Dreamsnap</h2>
  </div>

  {/* Navigation Links */}
  <ul className="flex flex-col sm:flex-row items-center gap-3">
    <li className="bg-pink-500 text-white px-4 py-2 rounded-2xl">
      <Link to="/DreamSnap">Create Now</Link>
    </li>
    <li className="bg-black text-white px-4 py-2 rounded-2xl">
      <Link to="/About">About</Link>
    </li>
  </ul>
</div>

    
  </>

  );
};

export default Navbar;
