import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Regeister from './Regeister'
import Login from './Login'

const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Regeister />} />
        <Route path='/Login' element={<Login />} />
       </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
