import { useState } from 'react'
import './App.css'
import { Login } from './component/LoginPage'
import { Otp } from './component/OtpPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './component/Error'
import { Sucess } from './component/SucessPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />  } />
        <Route path='/sucess' element={<Otp />} />
        <Route path='/error' element={<Error />} />
        <Route path='/verified' element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
