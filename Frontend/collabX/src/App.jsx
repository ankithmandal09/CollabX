import { useState } from 'react'
import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom' 
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='' element={<Navigate to="/login"/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> 
    </>
  )
}

export default App
