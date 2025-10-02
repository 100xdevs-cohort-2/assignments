import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState([]);
  const [linkedin, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");

  return (
    <div className="app-container">
      <form className="input-form">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <input
          type="text"
          onChange={(e) => setInterests(e.target.value.trim().split(","))}
          placeholder="Interests (x,y,z)"
        />
        <input
          type="text"
          onChange={(e) => setLinkedIn(e.target.value)}
          placeholder="LinkedIn Profile URL"
        />
        <input
          type="text"
          onChange={(e) => setTwitter(e.target.value)}
          placeholder="Twitter Profile URL"
        />
      </form>

      <Card
        card={{
          name,
          bio,
          interests,
          linkedin,
          twitter,
        }}
      />
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="card">
      <h1>{card.name}</h1>
      <p className="bio">{card.bio}</p>
      <div>
        <h3>Interests</h3>
        <ul>
          {card.interests.map((interest, index) => (
            <li key={index}>{interest.trim()}</li>
          ))}
        </ul>
      </div>
      <div className="social-links">
        <a
          className="button"
          href={card.linkedin}
        >
          LinkedIn
        </a>
        <a
          className="button"
          href={card.twitter}
        >
          Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
