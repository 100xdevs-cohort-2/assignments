import { useState, useEffect } from "react";
import "./BgChanger.css";

export function BgChanger() {
  const [bgColor, setBgColor] = useState("default");

  useEffect(() => {
    document.body.classList.remove(
      "red",
      "yellow",
      "black",
      "pink",
      "green",
      "violet",
      "default"
    );
    document.body.classList.toggle(bgColor, true);
  }, [bgColor]);

  return (
    <div className="panel-container">
      <button
        className="color-btn red"
        onClick={() => {
          setBgColor("red");
        }}
      >
        Red
      </button>
      <button
        className="color-btn yellow"
        onClick={() => {
          setBgColor("yellow");
        }}
      >
        Yellow
      </button>
      <button
        className="color-btn black"
        onClick={() => {
          setBgColor("black");
        }}
      >
        Black
      </button>
      <button
        className="color-btn pink"
        onClick={() => {
          setBgColor("pink");
        }}
      >
        Pink
      </button>
      <button
        className="color-btn green"
        onClick={() => {
          setBgColor("green");
        }}
      >
        Green
      </button>
      <button
        className="color-btn violet"
        onClick={() => {
          setBgColor("violet");
        }}
      >
        Violet
      </button>
      <button
        className="color-btn default"
        onClick={() => {
          setBgColor("default");
        }}
      >
        Default
      </button>
    </div>
  );
}
