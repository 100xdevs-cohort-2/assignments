import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

function App() {
  const [info, setInfo] = useState({
    name: "Akhil",
    details: "A student in the 100xDevs Cohort 2.0",
    interests: ["football", "anime", "F1"],
    s_media: ["Linkedin", "Twitter"],
  });
  return (
    <div>
      <Card info={info}></Card>
    </div>
  );
}

function Card({ info }) {
  return (
    <div className="card">
      <h1 style={{ textAlign: "left", padding: 15 }}>{info.name}</h1>
      <p className="title">{info.details}</p>
      <div className="interests">
        <p>Interests</p>

        {info.interests.map((interest) => (
          <div>{interest}</div>
        ))}
      </div>

      <div className="flex-container">
        {info.s_media.map((media) => (
          <button
            className="btn btn-primary mr-2"
            style={{ padding: "5px", marginRight: "10px" }}
          >
            {media}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
