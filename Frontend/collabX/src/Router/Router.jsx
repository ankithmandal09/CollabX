import React from "react";
import Navbar from "../component/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import NewPost from "../Pages/NewPost";
import Comment from "../pages/Comment";
import Footer from "../Component/Footer";
import HomePage from "../pages/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Profile from "../Component/Profile";
import Skills from "../Component/Skills";
import Collaborate from "../Component/Collaborate";
import { useAuth } from '../Context/AuthContext';

const Router = () => {
  const { username } = useAuth();

  return (
    <div>
      {username ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comments" element={<Comment />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Collaborate" element={<Collaborate />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};

export default Router;



// const Router = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="" element={<Navigate to="/login" />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/new-post" element={<NewPost />} />
//         <Route path="/login" element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/profile' element={<Profile/>}/>
//         <Route path="/comments" element={<Comment />} />
//         <Route path='/skills' element={<Skills/>}/>
//         <Route path='/Collaborate' element={<Collaborate/>}/>
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default Router;