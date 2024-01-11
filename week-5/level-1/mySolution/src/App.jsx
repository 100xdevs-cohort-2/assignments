import './App.css'

import React, { useState } from "react";

function Card({ card }) {
  const { Name, Description, Handles, Interests } = card;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px'}}>
      Name: {Name}
      <br />
      Description: {Description}
      <br />
      {Handles.map((handle, index) => (
        <ButtonRedirect key={index} url={handle.url} name={handle.name} />
      ))}
      <br />
      Interests: {Interests}
      <br />
    </div>
  );
}

function Cards({ props }) {
  
  const { cards } = props;

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

function ButtonRedirect({ url, name }) {
  return (
    <div>
      <a href={url}>
        <button>{name}</button>
      </a>
    </div>
  );
}

function AddSocialHandle({ name, onChange }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px'} }>
      Add {name} handle
      <br />
      URL:
      <input name={name} onChange={onChange} />
      <br />
    </div>
  );
}

function AddSocialHandles({ setSocialHandles }) {
  const handleSocialHandleChange = (index, value) => {
    setSocialHandles((prevHandles) => {
      const newHandles = [...prevHandles];
      newHandles[index] = value;
      return newHandles;
    });
  };

  return (
    <div>
      <AddSocialHandle name="GitHub" onChange={(e) => handleSocialHandleChange(0, e.target.value)} />
      <AddSocialHandle name="Instagram" onChange={(e) => handleSocialHandleChange(1, e.target.value)} />
      <AddSocialHandle name="LinkedIn" onChange={(e) => handleSocialHandleChange(2, e.target.value)} />
    </div>
  );
}

function AddCard({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [socialHandles, setSocialHandles] = useState(['', '', '']);
  const [interests, setInterests] = useState('')
  const socialHandleNames = ["Github", "Instagram", "LinkedIn"]
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ Name: name, Description: description, Handles: socialHandles.map((url, i) => ({ url, name: socialHandleNames[i] })), Interests: interests });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '10px'}}>
      <h2>Add a Card</h2>
      Name:
      <input name='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Description:
      <input name='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      Social Handles:
      <AddSocialHandles setSocialHandles={setSocialHandles} />
      <br />
      Interests:
      <input name="Interests" value={interests} onChange={(e) => setInterests(e.target.value)}/>
      <br />
      <button type="submit">Add Card</button>
    </form>
  );
}


function App() {
  
  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const props = {
    cards: cards
  };

  return (
    <div>
      <h1>Business Cards</h1>
      <AddCard onSubmit={handleAddCard} />
      <Cards props={props} />
    </div>
  );
}

export default App;
