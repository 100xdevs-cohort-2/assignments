import React, { useState } from 'react';

const BirthdayWisher = () => {
  const [name, setName] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const birthdayCards = [
    {
      id: 1,
      style: { backgroundColor: '#ffd700', color: '#000' },
      message: `Happy Birthday, ${name}! Wishing you a day filled with joy and laughter.`,
    },
    {
      id: 2,
      style: { backgroundColor: '#87ceeb', color: '#fff' },
      message: `Warmest wishes on your birthday, ${name}! May your year ahead be amazing.`,
    },
    {
      id: 3,
      style: { backgroundColor: '#ff69b4', color: '#fff' },
      message: `Happy Birthday, ${name}! May your day be as special as you are.`,
    },
  ];

  return (
    <div>
      <h2>Birthday Wisher</h2>
      <label htmlFor="name">Enter Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter the name"
      />

      <div className="birthday-cards">
        {birthdayCards.map((card) => (
          <div key={card.id} className="birthday-card" style={card.style}>
            <p>{card.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayWisher;
