import { useState } from "react";
import { Box, Typography, Card, TextField } from "@mui/material";
import IdeaActionDial from "../IdeaActionDial";

import type { ScrambledWords } from "../../../types";

interface ScrambledWordPairsProps {
  theScrambledWords: ScrambledWords;
}

const ScrambledWordPairs = ({ theScrambledWords }: ScrambledWordPairsProps) => {
  const [ideas, setIdeas] = useState<any[]>(Array(10).fill(""));

  const handleChangeIdeas = (event: any, index: any) => {
    const idea: any = event.target.value;
    const ideasClone = [...ideas];
    ideasClone[index] = idea;

    setIdeas(ideasClone);
  };

  return theScrambledWords.length > 0 ? (
    <Box>
      <Typography variant="h4" component="h2">
        Scrambled Word Pairs
      </Typography>
      {theScrambledWords.map((wordPair, index) => (
        <Card sx={{ my: "1rem", padding: "1rem" }} key={index}>
          <TextField
            variant="filled"
            size="small"
            key={index}
            fullWidth
            label={`${wordPair[0]}: ${wordPair[1]}`}
            value={ideas[index]}
            onChange={(event) => handleChangeIdeas(event, index)}
          />
          <IdeaActionDial idea={ideas[index]} />
        </Card>
      ))}
    </Box>
  ) : null;
};

export default ScrambledWordPairs;
