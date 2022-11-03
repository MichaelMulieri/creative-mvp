import React from "react";
import type { ScrambledWords } from "../../../types";

interface ScrambledWordPairsProps {
  scrambledWords: ScrambledWords;
}

const ScrambledWordPairs: React.FC<ScrambledWordPairsProps> = ({
  scrambledWords,
}) => {
  return (
    scrambledWords.length > 0 && (
      <div>
        <h1>Scrambled Word Pairs</h1>
        {scrambledWords.map((wordPair, index) => (
          <div key={index}>
            <span>{wordPair[0]}</span>: <span>{wordPair[1]}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default ScrambledWordPairs;
