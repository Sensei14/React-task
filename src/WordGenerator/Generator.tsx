import { Box, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import Results from "./Results";

const Form = () => {
  const [numberOfWords, serNumberOfWords] = useState(10);
  const [debouncedNumber] = useDebounce(numberOfWords, 1000);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <Stack gap={4} my={4}>
      <Box display='flex' gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        <TextField
          defaultValue={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          label='Search phrase'
          sx={{
            minWidth: 280,
          }}
        />
        <TextField
          type='number'
          label='Number of words to generate'
          defaultValue={numberOfWords}
          onChange={(e) => serNumberOfWords(Number(e.target.value))}
          sx={{
            minWidth: 280,
          }}
          error={numberOfWords < 1}
          helperText={numberOfWords < 1 ? "Value must be greater than 0" : null}
        />
      </Box>
      <Box>
        <Results numberOfWords={debouncedNumber} searchPhrase={searchPhrase} />
      </Box>
    </Stack>
  );
};

export default Form;
