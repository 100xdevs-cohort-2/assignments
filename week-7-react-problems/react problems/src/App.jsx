 import { useEffect, useState } from 'react'
import './App.css'
import  {Task1 } from './components/Task1'
import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  const [bgcolor, setbgcolor] = useState("orange");
  const click = bgcolor => {
    setbgcolor(bgcolor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  },[bgcolor])

  const [numberOfPara, setnumberOfPara] = useState(0);
   const [generatedText, setGeneratedText] = useState('');

  
  const generateLoremIpsum = () => {
    setGeneratedText(<LoremIpsum p={numberOfPara} />);
  };



  return (
    <>
      <Task1 />

      <button onClick={() => {
        click("red");
      }}> change color to red</button>

      <button onClick={() => {
        click("yellow");
      }}> change color to yellow</button>

      <button onClick={() => {
        click("black");
      }}> change color to black</button>

      <button onClick={() => {
        click("purple");
      }}> change color to purple</button>

      <button onClick={() => {
        click("green");
      }}> change color to green</button>


      <button onClick={() => {
        click("blue");
      }}> change color to blue</button>



      <button onClick={() => {
        click("orange");
      }}> default</button>

      <br>
      </br>
      <br>
      </br>
      <h>
        <b>
        Paragraph Generator
        </b>

        <br>
        </br>

        
        <input  value = {numberOfPara} placeholder='enter number of words' onChange={e=> setnumberOfPara(e.target.value)} >
        </input>
        <button onClick={generateLoremIpsum}>Generate</button>
      </h>
      <div >
            <div>{generatedText}</div>
      </div>
      

      <br>
      </br>
      <br>
      </br>
    </>
  )
}

export default App
