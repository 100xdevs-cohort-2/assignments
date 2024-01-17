import { useState } from 'react'
import './App.css'
function App() {
  const [card, setCard] = useState([]);
  let id = Math.random();

  function addCard(){
    const name = document.getElementById("name").value;
    const description = document.getElementById("desc").value;
    const interest = document.getElementById("interest").value;
    const linkedIn = document.getElementById("linkedIn").value;
    const twitter = document.getElementById("twitter").value;
    

    setCard([...card, {
      name: name,
      description: description,
      interest: interest,
      linkedIn: linkedIn,
      twitter: twitter,
      id: id
    }])
  }

  return (
    <div>
      <div className='inputBox'>
        <label id='labelName'>Name:</label>
        <input type='text' id='name' required></input><br/> <br/>

        <label >Description:</label>
        <input type='text' id='desc'></input><br/> <br/>

        <label >Interest:</label>
        <input type='text' id='interest'></input><br/> <br/>

        <label >LinkedIn Id:</label>
        <input type='text' id='linkedIn'></input><br/> <br/>

        <label >Twitter Id:</label>
        <input type='text' id='twitter'></input><br/> <br/>
        
        <button onClick={addCard}>Generate card</button>
      </div>
      {card.map((c)=> {
        return <Detail {...c} key={c.id}/>
      })}

    </div>
  )
}

function Detail(props){
  return(
    <div id='detail'>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Interest</h3>
      <p>{props.interest}</p>
      <button><a href={props.linkedIn} target='_blank'>LinkedIn</a></button>
      <button id='buttonRight'><a href={props.twitter} target='_blank'>Twitter</a></button>
    </div>
  )
}

export default App
