import ScrambledWordPairs from "../../modules/ScrambledWordPairs";
import WordLadderForm from "../../modules/WordLadderForm";
import useLocalStorageState from "../../../hooks/useLocalStorageState";

const WordLadderPage = () => {
  const [scrambledWords, setScrambledWords] = useLocalStorageState(
    "scrambledWords",
    []
  );

  return (
    <div>
      <h1>Word Ladder</h1>
      <WordLadderForm setScrambledWords={setScrambledWords} wordAmount={10} />
      <ScrambledWordPairs theScrambledWords={scrambledWords} />
    </div>
  );
};

export default WordLadderPage;
