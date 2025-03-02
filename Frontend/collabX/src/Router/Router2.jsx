import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom' 
import Login from '../Component/Login'
import Register from '../Component/Register'
import Profile from '../Component/Profile'
import Collaborate from '../Component/Collaborate'
import Skills from '../Component/Skills'

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