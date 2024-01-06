import { useState } from 'react'
import { Name } from './components/Name'
import { Desc } from './components/Desc'
import { Interest } from './components/Interest'
import { Button } from './components/Button'
import './App.css'


function App() {
  const interests = ["Coding", "Reading", "Riding"]
  return (
    <div className="app">
      <Name Name={"Mahi"} />
      <Desc Desc={"Software Engineer"} />
      <Interest Interest={interests} />
      <div style={{
        display: 'flex'
      }}>
        <Button ButtonName={"LinkedIn"} />
        <Button ButtonName={"Twitter"} />
      </div>
    </div>
  )
}

export default App
