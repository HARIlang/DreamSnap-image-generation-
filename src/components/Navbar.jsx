import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
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
=======
    <div className="container-fluid p-5 flex justify-center items-center bg-white ">
      <div onClick={()=>navigate("/")} className="cursor-pointer">
        
         <h2 className="dreamsnap text-pink-500">
              Dreamsnap
         </h2>
        
      </div>
      <div className="ms-auto">
        <ul className="inline">
          <li className="inline  text-white mx-2 bg-pink-500 p-2  rounded-2xl"> 
            <Link to="/DreamSnap">create now</Link>
          </li>
          <li className="inline ms-2 p-2 px-3 text-white rounded-2xl bg-black">
            <Link to="About"> about</Link>
          </li>
        </ul>
      </div>
    </div>
>>>>>>> 35f20bc7ec5ca7ffd8d951db9eb1ea59bb8023eb
  );
};

export default Navbar;
