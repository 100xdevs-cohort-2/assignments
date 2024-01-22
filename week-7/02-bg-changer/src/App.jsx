import { useState, useRef } from "react";
import React from "react";

function App() {
  return (
    <>
      <ColorBar />
    </>
  );
}

function ColorBar() {
  const [color, setcolor] = useState("slate-200");

  return (
    <>
      <div
        className={`container h-screen w-full px-12 flex flex-col justify-end py-12 items-center duration-500 bg-${color}`}
      >
        <div className="bg-white rounded-xl min-h-16 shadow-lg flex gap-5 flex-wrap justify-center items-center p-5 max-w-max">
          <button
            className="bg-rose-700 rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("rose-700")}
          >
            Rose
          </button>

          <button
            className="bg-sky-700 rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("sky-700")}
          >
            Sky
          </button>

          <button
            className="bg-purple-800 rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("purple-800")}
          >
            Purple
          </button>

          <button
            className="bg-black rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("black")}
          >
            Black
          </button>

          <button
            className="bg-orange-600 rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("orange-600")}
          >
            Orange
          </button>

          <button
            className="bg-lime-500 rounded-full w-28 h-10 text-white tracking-widest font-medium text-lg hover:scale-110 transition-all"
            onClick={() => setcolor("lime-500")}
          >
            Lime
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
