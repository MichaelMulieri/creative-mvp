import { Box, Typography, Card, TextField } from "@mui/material";

import type { ScrambledWords } from "../../../types";

interface ScrambledWordPairsProps {
  theScrambledWords: ScrambledWords;
}

const ScrambledWordPairs = ({ theScrambledWords }: ScrambledWordPairsProps) => {
  return theScrambledWords.length > 0 ? (
    <Box>
      <Typography variant="h4" component="h2">
        Scrambled Word Pairs
      </Typography>
      {theScrambledWords.map((wordPair, index) => (
        <Card sx={{ my: "1rem", padding: "1rem" }}>
          <TextField
            variant="filled"
            size="small"
            key={index}
            fullWidth
            label={`${wordPair[0]}: ${wordPair[1]}`}
          />
        </Card>
      ))}
    </Box>
  ) : null;
};

export default ScrambledWordPairs;
