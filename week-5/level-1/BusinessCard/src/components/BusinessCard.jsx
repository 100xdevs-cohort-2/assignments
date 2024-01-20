import React from 'react'

function BusinessCard(props) {
 const {name,designation,interests, socials}=props;
  return (
   <>
   <div className='w-[100vw] h-[100vh] bg-black flex justify-center items-center'>
    <div className='w-[30vw] h-[50vh] bg-white rounded-md overflow-auto shadow-lg  shadow-white'>
        <h1 className='text-3xl text-black capitalize mt-6 ml-4 mb-2'>{name}</h1>
        <p className='text-lg text-slate-700 capitalize ml-4'>{designation}</p>
        <h2 className='text-xl text-black capitalize mt-4 ml-4 mb-2'>Interests</h2>
        <ul className='text-md text-slate-700 ml-4'>
            {interests.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul className='flex flex-col md:flex-row'>
            {socials.map((item,index)=>(
                <button type='button' className='bg-blue-500 hover:bg-blue-800 rounded-md m-3 text-center w-[80px] h-[30px]' key={index}>{item}</button>
            ))}
        </ul>
    </div>
   </div>
   </>
  )
}

export default BusinessCard