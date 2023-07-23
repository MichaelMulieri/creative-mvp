import { mockData } from "../../../mockData";
import { useParams } from "react-router-dom";

const WordLadderPage = () => {
  const { id } = useParams();

  const wordLadder = mockData?.wordladders[id ?? ""];

  return wordLadder ? (
    <>
      <h2>{wordLadder.name}</h2>
      {wordLadder.wordPairs.map((pair, index) => {
        return (
          <p key={index}>
            {pair.noun} {pair.verb}
          </p>
        );
      })}
    </>
  ) : (
    <p>Word ladder not found.</p>
  );
};

export default WordLadderPage;
