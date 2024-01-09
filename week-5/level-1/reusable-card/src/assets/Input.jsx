// Input.js
import { useEffect, useState } from 'react';
import './input.css';

function Input({ onInputchange }) {
  const [name, setName] = useState("Lokeshwar");
  const [description, setDescription] = useState("A TA in the 100xDevs Cohort 2.0");
  const [interest1, setInterest1] = useState("Iconic");
  const [interest2, setInterest2] = useState("Open Source");
  const [interest3, setInterest3] = useState("App Dev");
  const [send, setSend] = useState(false);


  useEffect(() => {
    if (send) {
      const inputData = {
        name,
        description,
        interest1,
        interest2,
        interest3
      };
      onInputchange(inputData);
      setSend(false)
    }
  }, [send, name, description, interest1, interest2, interest3]);

  return (
    <div className='box'>
      <div className='box1'>
        <h3>Title</h3>
        <input
          type="text"
          placeholder='Lokeshwar'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='box2'>
        <h3>Description</h3>
        <input
          type="text"
          placeholder='A TA in the 100xDevs Cohort 2.0'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='box3'>
        <h3>Interest 1</h3>
        <input
          type='text'
          placeholder='Iconic'
          value={interest1}
          onChange={(e) => setInterest1(e.target.value)}
        />
      </div>
      <div className="box4">
        <h3>Interest 2</h3>
        <input
          type='text'
          placeholder='Open Source'
          value={interest2}
          onChange={(e) => setInterest2(e.target.value)}
        />
      </div>
      <div className="box5">
        <h3>Interest 3</h3>
        <input
          type='text'
          placeholder='App Dev'
          value={interest3}
          onChange={(e) => setInterest3(e.target.value)}
        />
      </div>
      <div className='box6'>
      <button onClick={() => setSend(true)}>Submit</button>

        </div>
    </div>
  );
}

export default Input;