// const CreateCards = () => {
//     cosnt
//   return (
//     <div className="w-1/3">
//       <h1>Create a Card</h1>
//       <div className="flex flex-col">
//         <label htmlFor="">Name</label>
//         <input className="border-2 border-black" type="text" />
//       </div>
//       <div className="flex flex-col">
//         <label htmlFor="">Descriptoin</label>
//         <input className="border-2 border-black" type="text" />
//       </div>
//     </div>
//   );
// };

// export default CreateCards;
import { useState } from "react";
import axios from "axios"; // Assuming you use axios for HTTP requests

const CreateCards = () => {
  const [newCard, setNewCard] = useState({
    name: "",
    description: "",
    socialMediaHandles: [],
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleSocialMediaChange = (index, e) => {
    const newSocialMediaHandles = [...newCard.socialMediaHandles];
    newSocialMediaHandles[index] = e.target.value;
    setNewCard((prevCard) => ({
      ...prevCard,
      socialMediaHandles: newSocialMediaHandles,
    }));
  };

  const handleInterestChange = (index, e) => {
    const newInterests = [...newCard.interests];
    newInterests[index] = e.target.value;
    setNewCard((prevCard) => ({
      ...prevCard,
      interests: newInterests,
    }));
  };

  const addSocialMediaHandle = () => {
    setNewCard((prevCard) => ({
      ...prevCard,
      socialMediaHandles: [...prevCard.socialMediaHandles, ""],
    }));
  };

  const addInterest = () => {
    setNewCard((prevCard) => ({
      ...prevCard,
      interests: [...prevCard.interests, ""],
    }));
  };

  const saveCardToDatabase = () => {
    // Send a request to your server to store the new card in the database
    axios
      .post("http://localhost:3000/cards", newCard)
      .then((response) => {
        console.log("Card saved successfully!", response.data);
        // Optionally, you can redirect or perform other actions after saving
      })
      .catch((error) => {
        console.error("Error saving card:", error);
      });
  };

  return (
    <div className="w-1/3">
      {/* Input fields for the new card */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Card Name"
          value={newCard.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Card Description"
          value={newCard.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {/* Input fields for social media handles */}
        {newCard.socialMediaHandles.map((social, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Social Media Link ${index + 1}`}
            value={social}
            onChange={(e) => handleSocialMediaChange(index, e)}
          />
        ))}
        <button
          className="border-none bg-black text-white border-2 px-4 py-2"
          onClick={addSocialMediaHandle}
        >
          Add Social Media Link
        </button>
      </div>

      {/* Input fields for interests */}
      {newCard.interests.map((interest, index) => (
        <input
          key={index}
          type="text"
          className="border-2 border-black"
          placeholder={`Interest ${index + 1}`}
          value={interest}
          onChange={(e) => handleInterestChange(index, e)}
        />
      ))}
      <div>
        <button
          className="border-none bg-black text-white border-2 px-4 py-2 mx-2"
          onClick={addInterest}
        >
          Add Interest
        </button>

        {/* Button to save the new card to the database */}
        <button
          className="border-none bg-black text-white border-2 px-4 py-2"
          onClick={saveCardToDatabase}
        >
          Save Card
        </button>
      </div>
    </div>
  );
};

export default CreateCards;
