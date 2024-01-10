import { useState } from 'react'
import { BusinessCard } from './components/BusinessCard'

function App() {
  const [count, setCount] = useState(0)
  const details = [{
    name : "Yash Ginoya",
    description: "I am a software developer",
    interests: ['MERN stack', 'C++' , 'Chess'],
    linkedin : "https://www.linkedin.com",
    twitter : "https://www.twitter.com"
  },{
    name : "Jaimin Satani",
    description: "I am a HFT developer",
    interests: ['Python', 'C++' , 'Chess','Cricket',],
    linkedin : "https://www.linkedin.com",
    twitter : "https://www.twitter.com"
  }]
  return (
    <div>
      {/* <BusinessCard name = "Lokeshwar" 
                    description="A TA in the 100xDevs Cohort 2.0" 
                    interests = {["Ionic" , "Open Source" , "App Dev"]}
                    linkedin = "https://www.linkedin.com" 
                    twitter = "https://www.twitter.com"/> */}
      {details.map((el) => {
        return <BusinessCard data = {el} />
      })}
    </div>
  )
}

export default App
