import { TextField, Stack } from "@mui/material";
import type { Words } from "../../../types";

interface WordColumnProps {
  words: Words;
  handleWordChange: (newValue: string, index: number) => void;
}

const WordColumn = ({ words, handleWordChange }: WordColumnProps) => {
  return (
    <Stack spacing={2} width={"100%"}>
      {words.map((word, index) => (
        <TextField
          variant="filled"
          size="small"
          key={index}
          value={word}
          onChange={(event) => handleWordChange(event.target.value, index)}
        />
      ))}
    </Stack>
  );
};
export default WordColumn;
