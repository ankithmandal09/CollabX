import React from 'react'
import HomePage from './Component/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Login from './Pages/Login';
import Footer from './Component/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App