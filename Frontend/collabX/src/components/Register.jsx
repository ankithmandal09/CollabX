import React from 'react'
import "../styles/register.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Register() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 register">
        <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">Create your account</h1>
          <p className="text-center text-gray-600 mt-2">
            Already have an account? &nbsp;
            <Link to='/login' className="text-[#1CC896] hover:underline">
              Sign in
            </Link>
          </p>
  
          <form id="register-form" className="mt-6">
            <div className="flex space-x-4 mb-4">
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
  
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
  
            <div className="flex space-x-4 mb-4">
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
  
            <div className="flex space-x-4 mb-4">
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
              />
              <input
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                type="date"
                name="dob"
                id="dob"
              />
            </div>
  
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
  
            <div className="w-full mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                name="gender"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
  
            <div className="w-full mb-4">
              <label className="block text-gray-700">Country</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
                name="country"
                id="country"
              >
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="india">India</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
            >
              Register
            </button>
          </form>
                    {/* <div className="w-full text-center my-4">
            <span className="border-t border-gray-300 w-full inline-block mt-4 mb-4"></span>
            <span className="text-gray-600">or</span>
          </div> */}
  
          {/* <div className="w-full">
            <button
              type="button"
              className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-3" />
              Continue with Google
            </button>
  
            <button
              type="button"
              className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-3" />
              Continue with Facebook
            </button>
  
            <button
              type="button"
              className="w-full flex justify-center items-center py-3 mb-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-3xl hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faApple} className="mr-3" />
              Continue with Apple
            </button>
          </div> */}
        </div>
      </div>
    );
  }
  
  export default Register;