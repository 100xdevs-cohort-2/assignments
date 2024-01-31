/* eslint-disable react/prop-types */
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p className="desc">{props.description}</p>

      <h2>Interests</h2>
      {props.interests.map((interest) => (
        <p className="interest" key={interest}>
          {interest}
        </p>
      ))}

      <div className="linksDiv">
        <div className="buttonDiv">
          <a href={props.linkedIn}>LinkedIn</a>
        </div>
        <div className="buttonDiv">
          <a href={props.twitter}>Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
