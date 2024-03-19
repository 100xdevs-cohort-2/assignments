// import { useContext, useState } from "react"
// import {CountContext} from "./context"

// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <CountContext.Provider value={{count, setCount}}>
//         <Count/>
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count() {
//   return <div>
//     <CountRenderer/>
//     <Buttons/>
//   </div>
// }
// function CountRenderer(){
//   const {count}=useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons() {
//   const {count, setCount}=useContext(CountContext);

//   return <div>
//     <button onClick={() => {
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

// export default App

import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
    if(secondsPassed>1){
      handleStop();
    }
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

