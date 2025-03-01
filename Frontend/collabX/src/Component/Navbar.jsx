import React from 'react'
import "../Styles/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md p-4 z-50 p-7 flex justify-between items-center flex-wrap bg-[#a8dadc] sticky ">
      <div className="ml-4 ">
        <img
          className="h-10 w-auto ml-10 "
          src="src/assets/logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex space-x-10">
        <Link
          to="/home"
          className="text-gray-800 font-bold hover:text-green-600"
        >
          Home
        </Link>
        <Link
          to="/new-post"
          className="text-gray-800  font-bold  hover:text-green-600"
        >
          New Post
        </Link>
        <Link
          to="/skills"
          className="text-gray-800  font-bold  hover:text-green-600"
        >
          Skills
        </Link>
        <Link
          to="/collaborate"
          className="text-gray-800  font-bold  hover:text-green-600"
        >
          Collaborate
        </Link>
      </div>
      <div className="mr-4">
        <Link to="/profile">
          <img
            className="h-10 w-10 rounded-full mr-10 cursor-pointer"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="Profile"
          />
          {/* <strong>Profile</strong> */}
        </Link>
      </div>
    </nav>
  );
      
}

export default Navbar