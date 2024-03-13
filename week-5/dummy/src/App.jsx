import { useState } from "react";
import BussinessCard from "./components/BusinessCard";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Lokeshwar",
      description: "A TA in the cohort",
      interests: ["Ionic", "Open Sourse", "App dev"],
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-repuri-342878259/",
        twitter: "https://x.com/pranavchaitu",
      },
    },
    {
      id: 2,
      name: "Pranav",
      description: "A lawyer",
      interests: ["DSA", "Open Sourse", "web dev"],
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-repuri-342878259/",
        twitter: "https://x.com/pranavchaitu",
      },
    },
    {
      id: 3,
      name: "Chaitu",
      description: "A student",
      interests: ["Electron", "OpenAPI", "game dev"],
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-repuri-342878259/",
        twitter: "https://x.com/pranavchaitu",
      },
    },
  ]);

  return (
    <div>
      <Enterdata></Enterdata>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {data.map((d) => (
          <BussinessCard key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}

function Enterdata() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter description" />
      <input type="text" placeholder="enter interests" />
      <input type="text" placeholder="paste twitter url" />
      <input type="text" placeholder="paste linkedin url" />
    </div>
  );
}
export default App;
