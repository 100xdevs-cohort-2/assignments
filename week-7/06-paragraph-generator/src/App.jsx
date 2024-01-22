import React from "react";
import { para } from "./data";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { paragraphAtom } from "./atoms";
import { useRef } from "react";

function App() {
  return (
    <RecoilRoot>
      <Interface />
      <ParagraphContainer />
    </RecoilRoot>
  );
}

function Interface() {
  const inputRef = useRef();
  const setParagraph = useSetRecoilState(paragraphAtom);

  function generateParagraph() {
    console.log("button rendered");
    const numberOfWords = parseInt(inputRef.current.value);
    if (!numberOfWords || isNaN(numberOfWords) || numberOfWords > para.length)
      return;

    let wordsArray = [];

    for (let i = 0; i < numberOfWords; i++) {
      const randomIndex = Math.floor(Math.random() * para.length);

      wordsArray.push(para[randomIndex]);
    }

    const paraString = wordsArray.join(" ");

    setParagraph(paraString);
  }

  return (
    <>
      <h1 className="font-bold text-4xl tracking-wide mt-10">Para Generator</h1>

      <div className="flex gap-7">
        <input
          type="number"
          className="h-11 rounded-md  border-solid border-2 border-slate-500 px-4"
          style={{ width: "48rem" }}
          placeholder="Enter number of words here !"
          required
          ref={inputRef}
        />

        <button
          className="rounded-full w-36 h-11 bg-slate-900 text-white tracing-wide text-lg"
          onClick={generateParagraph}
        >
          Generate
        </button>
      </div>
    </>
  );
}

function ParagraphContainer() {
  const paragraph = useRecoilValue(paragraphAtom);

  return (
    <>
      <div className="transition-all">
        <p className="text-lg tracking-wide text-justify">{paragraph}.</p>
      </div>
    </>
  );
}

export default App;
