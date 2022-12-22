import { FormEvent, KeyboardEvent, MouseEvent } from "react";
import { Box, Stack, Button } from "@mui/material";
import WordColumn from "../WordColumn";
import { scrambleMap } from "../../../utils";
import useLocalStorageState from "../../../hooks/useLocalStorageState";
import type { ScrambledWords } from "../../../types";

interface WordLadderFormProps {
  wordAmount: number;
  setScrambledWords: (scrambledWords: ScrambledWords) => void;
}

const WordLadderForm = ({
  wordAmount,
  setScrambledWords,
}: WordLadderFormProps) => {
  const [verbs, setVerbs] = useLocalStorageState(
    "verbs",
    Array(wordAmount).fill("")
  );
  const [nouns, setNouns] = useLocalStorageState(
    "nouns",
    Array(wordAmount).fill("")
  );

  const handleVerbChange = (newValue: string, index: number) => {
    const updatedVerbs = [...verbs];
    updatedVerbs[index] = newValue;
    setVerbs(updatedVerbs);
  };

  const handleNounChange = (newValue: string, index: number) => {
    const updatedNouns = [...nouns];
    updatedNouns[index] = newValue;
    setNouns(updatedNouns);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const scrambledWords = scrambleMap(verbs, nouns);
    setScrambledWords(scrambledWords);
  };

  const handleReset = (event: MouseEvent | KeyboardEvent) => {
    event.preventDefault();
    setVerbs(Array(wordAmount).fill(""));
    setNouns(Array(wordAmount).fill(""));
    setScrambledWords([]);
  };

  return (
    <Box>
      <form onSubmit={handleFormSubmit}>
        <Stack direction="row" spacing={3}>
          <WordColumn words={verbs} handleWordChange={handleVerbChange} />
          <WordColumn words={nouns} handleWordChange={handleNounChange} />
        </Stack>
        <Button variant="outlined" sx={{ marginRight: "1rem" }} type="submit">
          Pair Words
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </form>
    </Box>
  );
};

export default WordLadderForm;
