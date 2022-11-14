import { useState, FormEvent, KeyboardEvent, MouseEvent } from "react";
import WordColumn from "../WordColumn";
import { scrambleMap, loadLocalData, saveLocalData } from "../../../utils";
import "./index.css";
import type { Words, ScrambledWords } from "../../../types";

interface WordLadderFormProps {
  wordAmount: number;
  setScrambledWords: (scrambledWords: ScrambledWords) => void;
}

const WordLadderForm = ({
  wordAmount,
  setScrambledWords,
}: WordLadderFormProps) => {
  const [verbs, setVerbs] = useState(
    (loadLocalData("verbs") as Words) || Array(wordAmount).fill("")
  );
  const [nouns, setNouns] = useState(
    (loadLocalData("nouns") as Words) || Array(wordAmount).fill("")
  );

  const handleVerbChange = (newValue: string, index: number) => {
    const updatedVerbs = [...verbs];
    updatedVerbs[index] = newValue;
    saveLocalData("verbs", updatedVerbs);
    setVerbs(updatedVerbs);
  };

  const handleNounChange = (newValue: string, index: number) => {
    const updatedNouns = [...nouns];
    updatedNouns[index] = newValue;
    saveLocalData("nouns", updatedNouns);
    setNouns(updatedNouns);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const scrambledWords = scrambleMap(verbs, nouns);
    saveLocalData("scrambledWords", scrambledWords);
    setScrambledWords(scrambledWords);
  };

  const handleReset = (event: MouseEvent | KeyboardEvent) => {
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
