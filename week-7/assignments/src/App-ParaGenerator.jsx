import { useEffect, useState } from 'react'

function App() {
  const [words, setWords] = useState(0)
  const [output, setOutput] = useState("")

  function handleOnChange(e) {
    setWords(e.target.value)
  }

  function generateRandomWord() {
    const length = Math.floor(Math.random() * 10) + 1; // Random length between 1 and 10
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomWord = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];
    }
    return randomWord;
  }

  function handleGenerate() {
    var finalOutput = ""
    for(let i=0; i<words; i++) {
      finalOutput += generateRandomWord() + " "
    }
    setOutput(finalOutput)
  }

  return (
  <div className='flex flex-col justify-center h-screen w-[720px] p-45 m-25'>
    <h1 className='font-bold text-xl self-center'>Para Generator</h1>
    <div className='m-4 flex justify-center space-between w-full h-[75px] self-center'>
      <input onChange={handleOnChange} className='m-4 p-4 flex-1 border-2' type='number' placeholder='Enter number of words'/>
      <button onClick={handleGenerate} className='m-4 p-4 flex-none rounded bg-red-400'>Generate</button>
    </div>
    <div className='m-4 p-4'>{output}</div>
  </div>
  )
}

export default App
