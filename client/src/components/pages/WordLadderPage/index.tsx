import { mockData } from "../../../mockData";
import { useParams } from "react-router-dom";

const WordLadderPage = () => {
  const { id } = useParams();

  const wordLadder = mockData?.wordladders[id ?? ""];

  return wordLadder ? (
    <>
      <h1>{wordLadder.name}</h1>
      {wordLadder.wordPairs.map((pair) => {
        return (
          <p>
            {pair.noun} {pair.verb}
          </p>
        );
      })}
    </>
  ) : (
    <p>Project not found.</p>
  );
};

export default WordLadderPage;
