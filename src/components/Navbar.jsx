import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Navbar;
