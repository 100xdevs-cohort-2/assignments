import React from "react";
import { useState } from "react";

const App = () => {
  const [showText, setShowText] = useState(true);

  const handleText = () => {
    setShowText(!showText);
  };

  return (
    <button>
      {showText ? (
        <>
          <form action="">
            <h1>Otp login</h1>
            <input type="tel" maxLength={10} placeholder="number" />

            <button type="submit" onClick={handleText}>
              submit
            </button>
          </form>
        </>
      ) : (
        <div>
          <h1>Login</h1>
          <input type="number" maxLength={4} />
          <button onClick={handleText}>done</button>
        </div>
      )}
    </button>
  );
};

export default App;
