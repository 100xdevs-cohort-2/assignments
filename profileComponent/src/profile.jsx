
import React from 'react';

const Profile = (props) => {
  const { name, age, bio, profileImage } = props;

  return (
    <div className="profile">
      <img src={profileImage} alt={`${name}'s Profile`} />
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
};

export default Profile;
