import { Box, Typography } from "@mui/material";
import Generator from "./Generator";

const WordGenerator = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='center'>
        <Typography variant='h3'>Random Word Generator</Typography>
      </Box>
      <Generator />
    </Box>
  );
};

export default WordGenerator;
