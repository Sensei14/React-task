import { Box, Typography } from "@mui/material";
import Form from "./Form";

const WordGenerator = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3">Random Word Generator</Typography>
      </Box>
      <Form />
    </Box>
  );
};

export default WordGenerator;
