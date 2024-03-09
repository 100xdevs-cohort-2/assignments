import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handlePara = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount < 1) amount = 1;
    if (amount > 7) amount = 7;

    setText(data.slice(0, amount));
    return;
  };
  return (
    <>
      <h2>Paragraph Generator</h2>
      <form action="" onSubmit={handlePara}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit">Generate</button>
      </form>
      {text.map((data, index) => {
        return (
          <>
            <p key={index}>{data}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
