import { useState, useCallback } from "react";

const Assignment4 = () => {
  const [words, setWords] = useState("");
  const [generatedParagraph, setGeneratedParagraph] = useState("");

  const generateWords = useCallback(() => {
    const word = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let paragraph = '';
    for (let i = 0; i < parseInt(words); i++) {
      let w = '';
      const wordLen = Math.floor(Math.random() * 10) + 1;
      for (let j = 0; j < wordLen; j++) {
        const randomIdx = Math.floor(Math.random() * word.length);
        w += word[randomIdx];
      }
      paragraph += w + ' ';
    }
    setGeneratedParagraph(paragraph.trim());
  }, [words]);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "3rem", padding: "2rem" }}>
        Para Generator
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <input
          type="number"
          style={{ border: "2px black solid", padding: "1rem" }}
          placeholder="Enter Number of Words"
          value={words}
          onChange={(e) => setWords(e.target.value)}
        />
        <button
          type="button"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem",
            borderRadius: "1rem",
          }}
          onClick={generateWords}
        >
          Generate
        </button>
      </div>
      <div style={{ margin: "10px", textAlign: "center" }}>
        <p>{generatedParagraph}</p>
      </div>
    </div>
  );
};

export default Assignment4;
