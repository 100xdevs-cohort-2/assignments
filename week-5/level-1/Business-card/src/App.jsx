// src/App.js
import React from 'react';
import './App.css';
import Card from './card';
import AddCardPage from './addcardpage';

const App = () => {
  return (
    <div className="app">
      <h1>Business Card App</h1>

      <AddCardPage />

      {/* Sample Card */}
      <Card
        name="John Doe"
        description="Web Developer"
        socialMedia={{ linkedin: 'LinkedIn', twitter: 'Twitter' }}
        interests={['React', 'JavaScript', 'Web Development']}
      />
    </div>
  );
};

export default App;
