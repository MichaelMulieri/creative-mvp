import React, { useState } from "react";
import ScrambledWordPairs from "../../modules/ScrambledWordPairs";
import WordLadderForm from "../../modules/WordLadderForm";
import { loadLocalData } from "../../../utils";
import type { ScrambledWords } from "../../../types";

const WordLadderPage: React.FC = () => {
  const [scrambledWords, setScrambledWords] = useState<ScrambledWords | []>(
    (loadLocalData("scrambledWords") as ScrambledWords) || []
  );

  return (
    <div>
      <p>word ladder placeholder</p>
      <WordLadderForm setScrambledWords={setScrambledWords} wordAmount={10} />
      <ScrambledWordPairs scrambledWords={scrambledWords} />
    </div>
  );
};

export default WordLadderPage;
