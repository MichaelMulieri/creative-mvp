import type { ScrambledWords } from "../../../types";

interface ScrambledWordPairsProps {
  theScrambledWords: ScrambledWords;
}

const ScrambledWordPairs = ({ theScrambledWords }: ScrambledWordPairsProps) => {
  return theScrambledWords.length > 0 ? (
    <div>
      <h1>Scrambled Word Pairs</h1>
      {theScrambledWords.map((wordPair, index) => (
        <div key={index}>
          <span>{wordPair[0]}</span>: <span>{wordPair[1]}</span>
        </div>
      ))}
    </div>
  ) : null;
};

export default ScrambledWordPairs;
