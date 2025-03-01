import React from 'react'
import Navbar from '../Component/Navbar';
import {Routes, Route } from "react-router-dom";
import { Home } from 'lucide-react';
import NewPost from '../Pages/NewPost';
import Login from '../Pages/Login';
import Comment from '../Pages/Comment';
import HomePage from '../Component/HomePage';
import Footer from "../Component/Footer"

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comments" element={<Comment />} />
      </Routes>
      <HomePage />
      <Footer />
    </div>
  );
}

export default Router