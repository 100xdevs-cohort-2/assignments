import React from "react";

const Card = ({ name, description, socialMedia, interest }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="social-media">
        <button>{socialMedia.linkedin}</button>
      </div>
      <div className="interests">
        <h3>Interests:</h3>
        <ul>
          {IntersectionObserver.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
