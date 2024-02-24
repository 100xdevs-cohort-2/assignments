// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cards.css";

function Card({ formData }) {
  return (
    <>
      <div className="card">
        <h2>{formData.name}</h2>
        <p>{formData.description}</p>
        <h3>Interests</h3>
        <ul>
          {formData.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <div className="btns">
          <a href={formData.linkedin} target="_blank">
            LinkedIn
          </a>
          <a href={formData.twitter} target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
