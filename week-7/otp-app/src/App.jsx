import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [phoneNumberState, setPhoneNumberState] = useState(true)
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
]
const handleInput = (index, e) => {
    if(e.target.value === ''){
        
        index - 1 >= 0 ? inputRefs[index - 1].current.focus() : null
    }
    const inputLength = e.target.value.length;
    if (inputLength === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
const handelBackspace = (index, e) => {
    
    if(e.keyCode === 8 && index > 0 && e.target.value.length === 0){
        console.log("backspace")
        inputRefs[index - 1].current.focus()
    }
}
  return (
    <>
    {phoneNumberState ? 
    
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div class="relative h-[300px] bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md flex flex-col align-middle justify-center items-center">
                <div class="text-4xl font-bold">Login Via OTP</div>
                <div class="relative">
                    <input class="mt-10 w-full h-9 rounded-md border-gray-400 border-2 text-center" type="text" name="" placeholder="Enter your phone number" id="" />
                </div>
                <button onClick={(e) => {setPhoneNumberState(false)}} class=" mt-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-[120px] ">
            Send OTP
            </button>
                </div>
            </div>
        </div>
    
    
    : 
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative h-[300px] bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto flex max-w-md flex-col items-center justify-center align-middle">
                <div className="text-4xl font-bold">Login Via OTP</div>
                <div className="relative">
                    
                {[...Array(4)].map((_, index) => (
                    <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength="1"
                    style={{ marginRight: '0.5em', marginTop: '2.5rem', height: '2.25rem', width: '35px', borderRadius: '0.375rem', borderWidth: '0.1rem', borderColor: 'rgb(164 163 175)', textAlign: 'center' }}
                    onChange={(e) => handleInput(index, e)}
                    onKeyDown={(e) => handelBackspace(index, e)}
                    />
                ))}
                    
                    
                </div>
                <button className="mt-10 w-[100px] rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700">Verify</button>
                </div>
            </div>
        </div>
    
    }
    </>
  )
}

export default App
