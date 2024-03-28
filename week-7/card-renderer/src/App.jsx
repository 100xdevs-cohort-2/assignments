import ProfileCard from './ProfileCard'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [searchItem, setSearchItem] = useState('')
  const [responseData, setResponseData] = useState({})
  const [dataUpdated, setDataUpdated] = useState(false)


  function searchProfiles() {
    axios.get(`https://api.github.com/users/${searchItem}`)
      .then(response => {
        setResponseData(response.data);
        setDataUpdated(true)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center pt-28">
        <h1 className="text-5xl font-medium">Search for GitHub Profiles!</h1>
        <div className="mt-7">
          <input onChange={(e) => setSearchItem(e.target.value)} className="h-14 w-[750px] border border-gray-300 px-4 py-2 focus:outline-0" type="search" name="" placeholder="Enter the github username" id="" />
          <button onClick={searchProfiles} className="inset-y-0 right-0 ml-4 h-14 rounded-2xl bg-black px-4 py-2 text-white">Search</button>
        </div>
      </div>
      {dataUpdated ? <ProfileCard dp={responseData.avatar_url} name={responseData.name} followers={responseData.followers} following={responseData.following} />: ""}
    </>
  )
}

export default App
