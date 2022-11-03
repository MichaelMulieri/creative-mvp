import React from "react";
import "./index.css";
import type { Words } from "../../../types";

interface WordColumnProps {
  words: Words;
  handleWordChange: (string, number) => void;
}

const WordColumn: React.FC<WordColumnProps> = ({ words, handleWordChange }) => (
  <React.Fragment>
    {words.map((word, index) => (
      <input
        key={index}
        value={word}
        onChange={(event) => handleWordChange(event.target.value, index)}
      />
    ))}
  </React.Fragment>
);

export default WordColumn;
