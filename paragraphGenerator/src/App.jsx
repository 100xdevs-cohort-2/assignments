import React, { useState } from 'react';

const ParagraphGenerator = () => {
  const [numWords, setNumWords] = useState(50); // Default number of words

  const generateParagraph = () => {
    const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];

    const paragraph = Array.from({ length: numWords }, () => words[Math.floor(Math.random() * words.length)]).join(' ');

    return paragraph;
  };

  const handleNumWordsChange = (e) => {
    const words = parseInt(e.target.value, 10);
    setNumWords(words);
  };

  return (
    <div>
      <label htmlFor="numWords">Number of Words: </label>
      <input
        type="number"
        id="numWords"
        value={numWords}
        onChange={handleNumWordsChange}
      />

      <p>{generateParagraph()}</p>
    </div>
  );
};

export default ParagraphGenerator;
