import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Landing } from './components/Landing'

const Dashboard = React.lazy(()=>import ('./components/Dashboard'))


function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        {/* <Route path ="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard/></Suspense>}/> */}
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/" element={<Landing/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
      <button onClick={()=>{
        navigate("/");
      }}>Landing Page</button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard Page</button>
  </div>
}

export default App
