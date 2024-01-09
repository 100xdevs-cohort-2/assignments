/* eslint-disable react/prop-types */
// import React from 'react';

function Card({ name, description, interest }) {
  return (
    <div className="flex justify-center items-center ">
      <div
        id="card"
        className="w-full max-w-md bg-white shadow-md rounded-md overflow-hidden"
      >
        <div id="card Name" className="flex justify-center">
          {name} card
        </div>
        <br />
        <div id="name" className="px-2">
          Name: {name}
        </div>
        <br />
        <div id="Description" className="px-2">
          Description: {description}
        </div>
        <br />
        <div id="interests" className="px-2">
          Interest: {interest}
        </div>
        <br />
        <div id="icons" className="px-2"></div>
      </div>
    </div>
  );
}

export default Card;
