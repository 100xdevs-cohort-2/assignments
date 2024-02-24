// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Card from "./Cards";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    interests: ["", "", ""], // Array to store interests
    twitter: "",
    linkedin: "",
  });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setFormData({ ...formData, submitted: true });
  }

  // Function to handle changes in form fields
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Function to handle changes in interest fields
  function handleInterestChange(index, value) {
    const updatedInterests = [...formData.interests];
    updatedInterests[index] = value;
    setFormData({ ...formData, interests: updatedInterests });
  }

  return (
    <>
      <nav>
        <h1>Business Card</h1>
      </nav>

      <div className="main">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} placeholder="Enter Name" onChange={handleChange} />
          <input type="text" name="description" value={formData.description} placeholder="Enter Description" onChange={handleChange} />
          <h3>Interests</h3>
          {formData.interests.map((interest, index) => (
            <input key={index} type="text" value={interest} placeholder={`Interest ${index + 1}`} onChange={(e) => handleInterestChange(index, e.target.value)} />
          ))}
          <label htmlFor="twitter">Twitter : </label>
          <input type="text" name="twitter" value={formData.twitter} placeholder="Enter Twitter link..." onChange={handleChange} />
          <label htmlFor="linkedin">LinkedIn : </label>
          <input type="text" name="linkedin" value={formData.linkedin} placeholder="Enter LinkedIn link..." onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        <div className="card-section">
          {/* Conditionally render the Card component if form data is available */}
          {formData.submitted && <Card formData={formData} />}
        </div>
      </div>
    </>
  );
}

export default App;
