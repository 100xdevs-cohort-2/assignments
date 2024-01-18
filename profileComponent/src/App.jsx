import React from 'react';
import Profile from './Profile';

const App = () => {
  const profileData = {
    name: 'Krish Soni',
    age: 19,
    bio: 'Aspiring Full Stack Developer',
    profileImage: 'https://www.krishsoni.co/images/logo.png',
  };

  return (
    <div>
      <h1>My React Profile App</h1>
      <Profile {...profileData} />
    </div>
  );
};

export default App;