import { useState } from 'react'
import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom' 
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='' element={<Navigate to="/login"/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes> 
    </>
  )
}

export default App
