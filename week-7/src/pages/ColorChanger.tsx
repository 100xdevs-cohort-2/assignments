import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("white");
  return (
    <div className={`w-full h-screen bg-${color} relative transition`}>
      <div className="__pallete fixed rounded w-fit p-3 flex gap-3 bg-white shadow bottom-5 left-1/2 translate-x-[-50%]">
        <button
          onClick={() => setColor("red-500")}
          className="bg-red-500 text-white p-3 rounded py-1"
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow-500")}
          className="bg-yellow-500 p-3 rounded py-1"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple-500")}
          className="bg-purple-500 text-white p-3 rounded py-1"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("green-500")}
          className="bg-green-500 text-white p-3 rounded py-1"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue-500")}
          className="bg-blue-500 text-white p-3 rounded py-1"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("white")}
          className="bg-white text-black shadow p-3 rounded py-1"
        >
          Default
        </button>
      </div>
    </div>
  );
}
