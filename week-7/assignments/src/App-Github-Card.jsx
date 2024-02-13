import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://api.github.com/users/tanishq-arya")
      .then((res) => {
        const {url, avatar_url, name, bio, public_repos, followers} = res.data
        setData({url: url, avatar_url: avatar_url, name:name, bio:bio, public_repos:public_repos, followers:followers})
        console.log(data)
      })
    return () => {
      setData({})
      console.log("exit")
    }
  }, [])

  return (
    <div className='w-screen h-screen p-4 flex justify-center'>
      <div className='flex flex-col m-2 p-2 w-[350px] h-[450px] border-[1px] border-200 rounded-lg shadow-lg shadow-black-500/50'>
        <div className='flex-1 m-2 h-auto w-[full] border-[1px] border-black rounded-lg' style={{backgroundSize:'cover', backgroundImage: `url(${data.avatar_url})`}}></div>
        <div className='flex-1 m-2 flex flex-col'>
          <h2 className='font-bold text-xl'>{data.name}</h2>
          <h3 className='font-semibold text-md'>Github Url:</h3>
          <h4 className='text-sm text-sky-400 underline hover:cursor-pointer hover:font-semibold'>{data.url}</h4>
          <br></br>
          <p className='text-md'>{data.bio}</p>
          <div className='mt-4 flex justify-start'>
            <button className='mr-2 p-3 rounded-full bg-black text-white font-semibold hover:text-black hover:bg-white hover:border-2'>Repositories: {data.public_repos}</button> 
            <button className='mr-2 p-3 rounded-full bg-black text-white font-semibold hover:text-black hover:bg-white hover:border-2'>Followers: {data.followers}</button>
          </div>
        </div>

      </div>
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default App
