import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[500px] h-[400px] border rounded-lg shadow-lg px-5 py-10">
        <h1 className="text-2xl font-semibold mb-5">Lokeshwar</h1>

        <p className="mb-5">A TA in the 100xDevs Cohort 2.0</p>

        <h2 className="font-semibold text-xl mb-2">Interests</h2>

        <ul className="mb-4">
          <li>Ionic</li>
          <li>Open Source</li>
          <li>App Dev</li>
        </ul>

        <div className="flex  items-center gap-5">
          <button className="px-4 py-2 bg-blue-500 text-white font-normal text-lg rounded-lg">
            LinkedIN
          </button>

          <button className="px-4 py-2 bg-blue-500 text-white font-normal text-lg rounded-lg">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
