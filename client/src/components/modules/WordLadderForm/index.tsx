import React, { useState } from "react";
import WordColumn from "../WordColumn";
import { scrambleMap, loadLocalData, saveLocalData } from "../../../utils";
import "./index.css";

const WordLadderForm = ({ wordAmount, setScrambledWords }) => {
  const [verbs, setVerbs] = useState(
    loadLocalData("verbs") || Array(wordAmount).fill("")
  );
  const [nouns, setNouns] = useState(
    loadLocalData("nouns") || Array(wordAmount).fill("")
  );

  const handleVerbChange = (newValue, index) => {
    const updatedVerbs: string[] = [...verbs];
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

  const handleReset = (event) => {
    event.preventDefault();
    setVerbs(Array(wordAmount).fill(""));
    setNouns(Array(wordAmount).fill(""));
    setScrambledWords([]);
    saveLocalData("verbs", null);
    saveLocalData("nouns", null);
    saveLocalData("scrambledWords", null);
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
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default WordLadderForm;
