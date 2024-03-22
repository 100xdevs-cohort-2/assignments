import { useState } from 'react'
import './App.css'
function App() {

  return (
    <div className=" border border-solid border-gray-300 rounded-lg p-5 m-5 max-w-400 shadow-md bg-gray-100">
      <h2 className=' text-3xl mb-4 text-gray-700 text-left font-bold'> yash</h2>
      <p className=' text-sm mb-4 text-gray-700 text-left'>adsfdsfas</p>
      <h3 className=' text-lg mb-4 text-gray-700 text-left font-bold'>Interests</h3>
      <ul className='list-none p-0 m-0'>
        <li className=' text-sm mb-5 text-gray-700 text-left'>asf</li>
        <li className=' text-sm mb-5 text-gray-700 text-left'>asf</li>

      </ul>
      <div className='flex-1 mb-4 text-left'>
        <a href="www.linkedin.com" className='  text-white no-underline px-4 py-2 rounded inline-block bg-blue-500 m-2 hover:shadow-md '>Linkedin</a>
        <a href="www.Twitter.com" className='  text-white no-underline px-4 py-2 rounded inline-block bg-blue-500 m-2 hover:shadow-md '>Twitter</a>
      </div>

    </div>
  )
}

export default App
