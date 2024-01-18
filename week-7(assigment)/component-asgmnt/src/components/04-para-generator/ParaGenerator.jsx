import { useState, useRef, useCallback } from "react";
import { loremIpsum } from "lorem-ipsum";
import "./paraGenerator.css";

export function ParaGenerator() {
  const [length, setLength] = useState("Enter no of words");
  const paraRef = useRef(null);

  const genParagraph = useCallback(() => {
    try {
      const para = loremIpsum({ count: parseInt(length), units: "words" });
      console.log(para);
      paraRef.current.innerHTML = para;
      setLength("Enter no of words");
    } catch (err) {
      console.log("chill bro!");
    }
  }, [length]);

  return (
    <div className="container">
      <h1>Para Generator</h1>
      <input
        type="number"
        inputMode="numeric"
        id="para-length"
        onChange={(e) => {
          setLength(e.target.value);
        }}
        placeholder={length}
      />
      <button
        onClick={() => {
          genParagraph();
        }}
      >
        Generate
      </button>
      <p ref={paraRef}></p>
    </div>
  );
}
