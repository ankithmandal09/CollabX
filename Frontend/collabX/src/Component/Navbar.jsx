import React from 'react'
import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const { username, password, logout } = useAuth();
  return (
    <nav className="p-6 flex justify-between items-center flex-wrap bg-blue-200 ">
      <div className="ml-4 ">
        <img
          className="h-10 w-auto ml-10 "
          src="src/assets/logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex space-x-6">
        <Link to="/home" className="text-gray-800 hover:text-green-600">
          Home
        </Link>
        <Link to="/new-post" className="text-gray-800 hover:text-green-600">
          New Post
        </Link>
        <Link to="/login" className="text-gray-800 hover:text-green-600">
          Login
        </Link>
      </div>

      <div>
      {username ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <p>Your password: {password}</p>
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
      <button onClick={logout}>logout</button>

      <div className="mr-4">
        <img
          className="h-10 w-10 rounded-full mr-10 cursor-pointer"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="Profile"
        />
      </div>
    </nav>
  );
      
}

export default Navbar