import { useState } from "react";
import ScrambledWordPairs from "../../modules/ScrambledWordPairs";
import WordLadderForm from "../../modules/WordLadderForm";
import { loadLocalData } from "../../../utils";
import type { ScrambledWords } from "../../../types";

const WordLadderPage = () => {
  const [scrambledWords, setScrambledWords] = useState<ScrambledWords | []>(
    (loadLocalData("scrambledWords") as ScrambledWords) || []
  );

  return (
    <div>
      <h1>Word Ladder</h1>
      <WordLadderForm setScrambledWords={setScrambledWords} wordAmount={10} />
      <ScrambledWordPairs scrambledWords={scrambledWords} />
    </div>
  );
};

export default WordLadderPage;
