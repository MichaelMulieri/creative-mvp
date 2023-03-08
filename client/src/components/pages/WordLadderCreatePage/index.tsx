import { KeyboardEvent, MouseEvent } from "react";
import { Typography, Box, Button } from "@mui/material";
import ScrambledWordPairs from "../../modules/ScrambledWordPairs";
import WordLadderForm from "../../modules/WordLadderForm";
import useLocalStorageState from "../../../hooks/useLocalStorageState";

const WordLadderCreatePage = () => {
  const [scrambledWords, setScrambledWords] = useLocalStorageState(
    "scrambledWords",
    []
  );

  const handleReset = (event: MouseEvent | KeyboardEvent) => {
    event.preventDefault();
    setScrambledWords([]);
  };

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Word Ladder
      </Typography>
      {scrambledWords.length === 0 ? (
        <WordLadderForm setScrambledWords={setScrambledWords} wordAmount={10} />
      ) : (
        <>
          <ScrambledWordPairs theScrambledWords={scrambledWords} />
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </>
      )}
    </Box>
  );
};

export default WordLadderCreatePage;
