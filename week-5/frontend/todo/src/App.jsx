import { useState } from 'react'
import './App.css'
import List  from "./components/List"
import CardDetail from './components/CardDetail'
import {Routes,Link, Route} from "react-router-dom"

function App() {

  return (
    <>
      {/* <List></List> */}
      <Link to="/">HOME</Link>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/todo/:id" element={<CardDetail></CardDetail>}></Route>
      </Routes>
    </>
  )
}

export default App
