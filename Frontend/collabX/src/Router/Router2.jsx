import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom' 
import Login from '../Components/Login'
import Register from '../Components/Register'
import Profile from '../Components/Profile'
import Collaborate from '../Components/Collaborate'
import Skills from '../Components/Skills'

function Router2() {
    return (
        <>
          <Routes>
          <Route path='' element={<Navigate to="/login"/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/Collaborate' element={<Collaborate/>}/>
          </Routes> 
        </>
      )
}

export default Router2