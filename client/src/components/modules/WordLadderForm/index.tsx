import React, { useState } from "react";
import WordColumn from "../WordColumn";
import { scrambleMap, loadLocalData, saveLocalData } from "../../../utils";
import "./index.css";

const WordLadderForm = ({ wordAmount }) => {
  const [verbs, setVerbs] = useState(
    loadLocalData("verbs") || Array(wordAmount).fill("")
  );
  const [nouns, setNouns] = useState(
    loadLocalData("nouns") || Array(wordAmount).fill("")
  );
  const [scrambledWords, setScrambledWords] = useState(
    loadLocalData("scrambledWords") || []
  );

  const handleVerbChange = (newValue, index) => {
    const updatedVerbs = [...verbs];
    updatedVerbs[index] = newValue;
    saveLocalData("verbs", updatedVerbs);
    setVerbs(updatedVerbs);
  };

  const handleNounChange = (newValue, index) => {
    const updatedNouns = [...nouns];
    updatedNouns[index] = newValue;
    saveLocalData("nouns", updatedNouns);
    setNouns(updatedNouns);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const scrambledWords = scrambleMap(verbs, nouns);
    saveLocalData("scrambledWords", scrambledWords);
    setScrambledWords(scrambledWords);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="leftCol">
          <WordColumn words={verbs} handleWordChange={handleVerbChange} />
        </div>
        <div className="rightCol">
          <WordColumn words={nouns} handleWordChange={handleNounChange} />
        </div>
        <button>Pair Words</button>
      </form>
      {scrambledWords.length > 0 && (
        <div>
          <h1>Scrambled Word Pairs</h1>
          {scrambledWords.map((wordPair, index) => (
            <div key={index}>
              <span>{wordPair[0]}</span>: <span>{wordPair[1]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordLadderForm;
