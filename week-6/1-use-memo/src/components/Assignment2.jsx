import React, { useEffect, useMemo, useRef, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = []; // this array represent the array of sentence contains 1000 sentences (each sentence has 8 words)
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())]) // throw random number between 0 to 7
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");
    const setTimeoutId = useRef();

    // const filteredSentences = sentences.filter(x => x.includes(filter)) // an empty string is always a substring of given string
    
    // since this is an expensive task finding the substring / filter inside each sentence present inside the sentences => that must always be calcuated when the "filter" state_variable changes, this will be implemented using useMemo hook ( when the expensive task depends on the other state_variables => wrap that expensive function call inside the useMemo )

    const filteredSentences = useMemo(function() {
        // "string".includes("") this method checks if the given string is valid substring of the main string if yes returns true else false

        return sentences.filter(sentence => sentence.includes(filter));
    }, [filter])


    // here deboucing can be applied using useRef or normally can be applied
    // major use of "useRef" is to access the DOM elements inside the react life-cycle

    function userInput(event) {
        // by-default it is undefined value
        // if the userInput function gets called within 400 ms then the previous time-out will be cleared and new time-out will be added
        clearTimeout(setTimeoutId.current);

        setTimeoutId.current = setTimeout(function() {
            setFilter(event.target.value);
        }, 400);
    }
    

    return <div>
        <input type="text" onChange={userInput}></input>
        {filteredSentences.map((word, index) => <div key={index}>
            {word}    
        </div>)}
    </div>
}