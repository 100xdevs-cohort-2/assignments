import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState("");
  const [bodyColor, setbodyColor] = useState("");

  const handleColor = (newColor) => {
    setColors(newColor);

    document.body.style.backgroundColor = newColor;

    setColors("");
  };

  return (
    <>
      <center>
        <div className=" ">
          <button
            onClick={() => handleColor("red")}
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColor("yellow")}
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleColor("black")}
            style={{ background: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => handleColor("purple")}
            style={{ background: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => handleColor("green")}
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => handleColor("blue")}
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColor("white")}
            style={{ background: "orange" }}
          >
            Default
          </button>
        </div>
      </center>
    </>
  );
}

export default App;
