import { Fragment } from "react";
import "./index.css";
import type { Words } from "../../../types";

interface WordColumnProps {
  words: Words;
  handleWordChange: (newValue: string, index: number) => void;
}

const WordColumn = ({ words, handleWordChange }: WordColumnProps) => (
  <Fragment>
    {words.map((word, index) => (
      <input
        key={index}
        value={word}
        onChange={(event) => handleWordChange(event.target.value, index)}
      />
    ))}
  </Fragment>
);

export default WordColumn;
