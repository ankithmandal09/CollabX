import React, { useEffect } from "react";
import "../styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from "react";
import { useAuth } from '../Context/AuthContext';
// import logo from "../assets/logo.png"


function Login() {
  const [usersData, setUsersData] = useState([])
  const [userCheck, setuserCheck] = useState({username:"",password:''})
  const { username, password, login, logout } = useAuth();
  
  async function getData() {
    try {
      const response = await axios.get('https://hackathonfeb2025users-default-rtdb.asia-southeast1.firebasedatabase.app/.json');
      let arr = [];
      let obj = {}
      Object.entries(response.data).forEach(e => {
        obj = {
          id:e[0],
          username:e[1].username,
          password:e[1].password
        }
        arr.push(obj)
      });
      setUsersData(arr);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function loginCheck(e){
    e.preventDefault()
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].username === userCheck.username && usersData[i].password === userCheck.password) {
        login(userCheck.username, userCheck.password);
        alert('Logged in successfully');
        return;
      }
    }

    alert('Invalid username or password');
  };

  function inputValue(e){
    setuserCheck({...userCheck,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    getData()
  }, [])
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 login">
        <div className="w-full sm:w-3/6 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">Sign in to your account</h1>
          <p className="text-center text-gray-600 mt-2">
            New to collabX? &nbsp;
            <Link to='/register' className="text-[#1CC896] hover:underline">
              Create account
            </Link>
          </p>
  
          <form id="login-form" className="mt-6" onSubmit={loginCheck}>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="text"
              name="username"
              id="loginEmail"
              placeholder="Email or username"
              onChange={inputValue}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CC896] text-gray-700"
              type="password"
              name="password"
              id="loginPassword"
              placeholder="Password"
              onChange={inputValue}
            />
            <button
              type="submit"
              className="w-full py-3 mb-4 text-white bg-[#1CC896] rounded-3xl font-semibold hover:bg-[#16a779] focus:outline-none"
            >
              Continue
            </button>
          </form>
  
          <div className="w-full text-center my-4">
            <span className="border-t border-gray-300 w-full inline-block mt-4 mb-4"></span>
            <span className="text-gray-600">or</span>
          </div>
  
          <div className="w-full">
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
          </div>
  
          <div className="flex items-center justify-center mt-4">
            <input
              type="checkbox"
              id="stay-signed-in"
              className="mr-2 text-[#1CC896] focus:ring-0"
            />
            <label htmlFor="stay-signed-in" className="text-gray-600">
              Stay signed in
            </label>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
