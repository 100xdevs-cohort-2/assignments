import React, { useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
let TOTAL_LINES = 1000;
const ALL_WORDS = [];

//Creates thousand random sentences
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    //selects random word
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}

const changeTotalLines = () => {
  TOTAL_LINES = TOTAL_LINES - 1;
  console.log("Total lines", TOTAL_LINES);
};

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");
  const [render, setRender] = useState(false);

  // To display senteces with filter criteria
  const filteredSentences = useMemo(() => {
    console.log("Filtering..");
    return sentences.filter((x) => x.includes(filter));
  }, [filter, sentences]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        ></input>
        {filteredSentences.map((word) => (
          <div>{word}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            render == false ? setRender(true) : setRender(false);
            changeTotalLines();
          }}
        >
          Renders everything
        </button>
        {/* Try removing the useMemo, click this button and see the console */}
      </div>
    </div>
  );
}
