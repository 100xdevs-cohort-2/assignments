import React, { useState } from "react";

function AddCardPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [interests, setInterests] = useState([]);

  const handleAddCard = () => {
    // Handle card addition logic (you can send data to the backend here)
  };

  return (
    <div className="add-card-page">
      <h2>Add Business Card</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>LinkedIn:</label>
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label>Twitter:</label>
        <input
          type="text"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />

        <label>Interests:</label>
        <input
          type="text"
          placeholder="Add interest"
          onKeyDown={(e) =>
            e.key === "Enter" && setInterests([...interests, e.target.value])
          }
        />

        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>

        <button type="button" onClick={handleAddCard}>
          Add Card
        </button>
      </form>
    </div>
  );
}

export default AddCardPage;
