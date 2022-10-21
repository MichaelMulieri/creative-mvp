import React from "react";
import "./index.css";

const WordColumn = ({ words, handleWordChange }) => (
  <React.Fragment>
    {words.map((word, index) => (
      <input
        key={index}
        value={words[index]}
        onChange={(event) => handleWordChange(event.target.value, index)}
      />
    ))}
  </React.Fragment>
);

export default WordColumn;
