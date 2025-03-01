import React from "react";
import Navbar from "../component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import NewPost from "../pages/NewPost";
import Comment from "../pages/Comment";
import Footer from "../component/Footer";
import HomePage from "../pages/Home";

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/comments" element={<Comment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
